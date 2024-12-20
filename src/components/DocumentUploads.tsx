import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface DocumentUploadsProps {
  formData: {
    resume: File | null;
    portfolioLinks: string;
  };
  updateFormData: (data: Partial<DocumentUploadsProps["formData"]>) => void;
}

export default function DocumentUploads({
  formData,
  updateFormData,
}: DocumentUploadsProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="resume">Resume/CV</Label>
        <div className="relative">
          <Input
            id="resume"
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              updateFormData({ resume: file });
            }}
            required
            className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
          />
          <div className="bg-[#2D3E50] text-white py-2 px-4 rounded cursor-pointer">
            Choose File
          </div>
          <span className="ml-2">
            {formData.resume ? formData.resume.name : "No file chosen"}
          </span>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="portfolioLinks">
          Portfolio/Code Repository Links (Optional)
        </Label>
        <Textarea
          id="portfolioLinks"
          value={formData.portfolioLinks}
          onChange={(e) => updateFormData({ portfolioLinks: e.target.value })}
        />
      </div>
    </div>
  );
}
