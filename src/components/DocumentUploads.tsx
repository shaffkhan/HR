import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface DocumentUploadsProps {
  formData: {
    resume: File | null;
    nationalId: File | null;
    certifications: File | null;
  };
  updateFormData: (data: Partial<DocumentUploadsProps["formData"]>) => void;
}

export default function DocumentUploads({
  formData,
  updateFormData,
}: DocumentUploadsProps) {
  const handleFileChange =
    (field: keyof DocumentUploadsProps["formData"]) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      updateFormData({ [field]: file });
    };

  const renderFileUpload = (
    field: keyof DocumentUploadsProps["formData"],
    label: string,
    required: boolean = true
  ) => (
    <div className="space-y-2">
      <Label htmlFor={field}>{label}</Label>
      <div className="relative border-2 border-gray-200 rounded-lg">
        <Input
          id={field}
          type="file"
          onChange={handleFileChange(field)}
          required={required}
          className="opacity-0 absolute inset-0 w-full h-full cursor-pointer z-10"
        />
        <div className="flex items-center p-2">
          <div className="bg-[#2D3E50] text-white py-2 px-6 rounded-lg font-medium">
            Choose File
          </div>
          <span className="ml-3 text-gray-500">
            {formData[field]
              ? (formData[field] as File).name
              : "No file chosen"}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {renderFileUpload("resume", "CV / Resume")}
      {renderFileUpload("nationalId", "National ID / Passport")}
      {renderFileUpload("certifications", "Certifications")}
    </div>
  );
}
