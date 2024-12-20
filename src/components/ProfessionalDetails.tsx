import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProfessionalDetailsProps {
  formData: {
    desiredRole: string;
    yearsOfExperience: string;
    availability: string;
    otherAvailability: string;
  };
  updateFormData: (data: Partial<ProfessionalDetailsProps["formData"]>) => void;
}

export default function ProfessionalDetails({
  formData,
  updateFormData,
}: ProfessionalDetailsProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="desiredRole">Desired Role</Label>
        <Select
          value={formData.desiredRole}
          onValueChange={(value) => updateFormData({ desiredRole: value })}
        >
          <SelectTrigger id="desiredRole">
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="AI Developer">AI Developer</SelectItem>
            <SelectItem value="ML Engineer">ML Engineer</SelectItem>
            <SelectItem value="Data Scientist">Data Scientist</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="yearsOfExperience">Years of Experience</Label>
        <Input
          id="yearsOfExperience"
          type="number"
          value={formData.yearsOfExperience}
          onChange={(e) =>
            updateFormData({ yearsOfExperience: e.target.value })
          }
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="availability">Availability</Label>
        <Select
          value={formData.availability}
          onValueChange={(value) => updateFormData({ availability: value })}
        >
          <SelectTrigger id="availability">
            <SelectValue placeholder="Select availability" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Immediate">Immediate</SelectItem>
            <SelectItem value="1 Month">1 Month</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {formData.availability === "Other" && (
        <div className="space-y-2">
          <Label htmlFor="otherAvailability">Specify Availability</Label>
          <Input
            id="otherAvailability"
            value={formData.otherAvailability}
            onChange={(e) =>
              updateFormData({ otherAvailability: e.target.value })
            }
            required
          />
        </div>
      )}
    </div>
  );
}
