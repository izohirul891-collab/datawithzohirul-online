import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, FileText, Printer, AlertCircle } from "lucide-react";

interface DownloadPortfolioDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SECTIONS = [
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact Info" },
] as const;

const DownloadPortfolioDialog = ({ open, onOpenChange }: DownloadPortfolioDialogProps) => {
  const [paperSize, setPaperSize] = useState<string>("");
  const [format, setFormat] = useState<string>("");
  const [sections, setSections] = useState<string[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  const toggleSection = (id: string) => {
    setSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const selectAllSections = () => {
    if (sections.length === SECTIONS.length) {
      setSections([]);
    } else {
      setSections(SECTIONS.map((s) => s.id));
    }
  };

  const validate = (): boolean => {
    const newErrors: string[] = [];
    if (!paperSize) newErrors.push("Paper size is required");
    if (!format) newErrors.push("Export format is required");
    if (sections.length === 0) newErrors.push("Select at least one section");
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleDownload = () => {
    if (!validate()) return;

    // Apply section visibility for print
    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) {
        el.dataset.printHidden = sections.includes(section.id) ? "false" : "true";
      }
    });

    // Set paper size CSS variable for print
    const root = document.documentElement;
    const sizes: Record<string, { w: string; h: string }> = {
      a4: { w: "210mm", h: "297mm" },
      letter: { w: "8.5in", h: "11in" },
      legal: { w: "8.5in", h: "14in" },
      a3: { w: "297mm", h: "420mm" },
    };
    const size = sizes[paperSize];
    if (size) {
      root.style.setProperty("--print-width", size.w);
      root.style.setProperty("--print-height", size.h);
    }

    if (format === "pdf" || format === "print") {
      onOpenChange(false);
      setTimeout(() => window.print(), 300);
    } else if (format === "word") {
      exportToWord();
    }

    // Cleanup after print
    setTimeout(() => {
      SECTIONS.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) delete el.dataset.printHidden;
      });
      root.style.removeProperty("--print-width");
      root.style.removeProperty("--print-height");
    }, 2000);
  };

  const exportToWord = () => {
    // Build HTML content for Word export
    const content = document.querySelector("main") || document.body;
    const cloned = content.cloneNode(true) as HTMLElement;

    // Remove hidden sections
    SECTIONS.forEach((section) => {
      if (!sections.includes(section.id)) {
        const el = cloned.querySelector(`#${section.id}`);
        el?.parentElement?.removeChild(el);
      }
    });

    // Remove nav, footer, buttons
    cloned.querySelectorAll("nav, footer, button, .no-print").forEach((el) => el.remove());

    const html = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office'
            xmlns:w='urn:schemas-microsoft-com:office:word'
            xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Calibri, sans-serif; color: #222; padding: 20px; }
          h1, h2, h3 { color: #1a1a1a; }
          img { max-width: 100%; height: auto; }
          section { margin-bottom: 24px; }
        </style>
      </head>
      <body>${cloned.innerHTML}</body>
      </html>
    `;

    const blob = new Blob([html], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Portfolio_MD_Zohirul_Islam.doc";
    link.click();
    URL.revokeObjectURL(url);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Download size={20} className="text-primary" />
            Download Portfolio
          </DialogTitle>
          <DialogDescription>
            Configure your download settings. All fields marked with * are required.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 py-2">
          {/* Errors */}
          {errors.length > 0 && (
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-3 space-y-1">
              {errors.map((err, i) => (
                <p key={i} className="text-sm text-destructive flex items-center gap-2">
                  <AlertCircle size={14} />
                  {err}
                </p>
              ))}
            </div>
          )}

          {/* Paper Size */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold">
              Paper Size <span className="text-destructive">*</span>
            </Label>
            <Select value={paperSize} onValueChange={setPaperSize}>
              <SelectTrigger>
                <SelectValue placeholder="Select paper size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="a4">A4 (210 × 297 mm)</SelectItem>
                <SelectItem value="letter">US Letter (8.5 × 11 in)</SelectItem>
                <SelectItem value="legal">US Legal (8.5 × 14 in)</SelectItem>
                <SelectItem value="a3">A3 (297 × 420 mm)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Export Format */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold">
              Export Format <span className="text-destructive">*</span>
            </Label>
            <Select value={format} onValueChange={setFormat}>
              <SelectTrigger>
                <SelectValue placeholder="Select export format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">
                  <span className="flex items-center gap-2">
                    <FileText size={14} /> Save as PDF
                  </span>
                </SelectItem>
                <SelectItem value="word">
                  <span className="flex items-center gap-2">
                    <FileText size={14} /> Export to MS Word (.doc)
                  </span>
                </SelectItem>
                <SelectItem value="print">
                  <span className="flex items-center gap-2">
                    <Printer size={14} /> Print Directly
                  </span>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Sections */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-semibold">
                Sections to Include <span className="text-destructive">*</span>
              </Label>
              <button
                type="button"
                onClick={selectAllSections}
                className="text-xs text-primary hover:underline font-medium"
              >
                {sections.length === SECTIONS.length ? "Deselect All" : "Select All"}
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {SECTIONS.map((section) => (
                <label
                  key={section.id}
                  className="flex items-center gap-2 p-2.5 rounded-lg border border-border hover:bg-secondary/50 cursor-pointer transition-colors"
                >
                  <Checkbox
                    checked={sections.includes(section.id)}
                    onCheckedChange={() => toggleSection(section.id)}
                  />
                  <span className="text-sm">{section.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleDownload} className="gap-2">
            <Download size={16} />
            Download
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadPortfolioDialog;
