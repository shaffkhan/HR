import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface GeneralQuestionsProps {
  formData: {
    expectedSalary: string;
    willingToRelocate: string;
    linkedinProfile: string;
  };
  updateFormData: (data: Partial<GeneralQuestionsProps["formData"]>) => void;
}

export default function GeneralQuestions({
  formData,
  updateFormData,
}: GeneralQuestionsProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="expectedSalary">Expected Salary</Label>
        <Input
          id="expectedSalary"
          type="number"
          value={formData.expectedSalary}
          onChange={(e) => updateFormData({ expectedSalary: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label>Willingness to relocate</Label>
        <RadioGroup
          value={formData.willingToRelocate}
          onValueChange={(value: never) =>
            updateFormData({ willingToRelocate: value })
          }
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Yes" id="relocate-yes" />
            <Label htmlFor="relocate-yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="No" id="relocate-no" />
            <Label htmlFor="relocate-no">No</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="space-y-2">
        <Label htmlFor="linkedinProfile">LinkedIn Profile (Optional)</Label>
        <Input
          id="linkedinProfile"
          type="url"
          value={formData.linkedinProfile}
          onChange={(e) => updateFormData({ linkedinProfile: e.target.value })}
        />
      </div>
    </div>
  );
}
