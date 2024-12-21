/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

interface GeneralQuestionsProps {
  formData: {
    expectedSalaryFrom: string;
    expectedSalaryTo: string;
    flexibleWorkingHours: string;
    willingToRelocate: string;
    longTermGoals: string;
    problemSolvingApproach: string;
    customCompanyQuestions: string;
  };
  updateFormData: (data: Partial<GeneralQuestionsProps["formData"]>) => void;
}

export default function GeneralQuestions({
  formData,
  updateFormData,
}: GeneralQuestionsProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Expected Salary Range</Label>
        <div className="flex space-x-4">
          <div className="flex-1 space-y-2">
            <Label htmlFor="expectedSalaryFrom">From</Label>
            <Input
              id="expectedSalaryFrom"
              type="number"
              value={formData.expectedSalaryFrom}
              onChange={(e) =>
                updateFormData({ expectedSalaryFrom: e.target.value })
              }
              required
            />
          </div>
          <div className="flex-1 space-y-2">
            <Label htmlFor="expectedSalaryTo">To</Label>
            <Input
              id="expectedSalaryTo"
              type="number"
              value={formData.expectedSalaryTo}
              onChange={(e) =>
                updateFormData({ expectedSalaryTo: e.target.value })
              }
              required
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Flexible Working Hours</Label>
        <RadioGroup
          value={formData.flexibleWorkingHours}
          onValueChange={(value: any) =>
            updateFormData({ flexibleWorkingHours: value })
          }
        >
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Flexible" id="flexible" />
              <Label htmlFor="flexible">Flexible</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Fixed" id="fixed" />
              <Label htmlFor="fixed">Fixed</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Partial" id="partial" />
              <Label htmlFor="partial">Partial</Label>
            </div>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label>Willingness to Relocate</Label>
        <RadioGroup
          value={formData.willingToRelocate}
          onValueChange={(value: any) =>
            updateFormData({ willingToRelocate: value })
          }
        >
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Yes" id="relocate-yes" />
              <Label htmlFor="relocate-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="No" id="relocate-no" />
              <Label htmlFor="relocate-no">No</Label>
            </div>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="longTermGoals">Long Term Goals</Label>
        <Textarea
          id="longTermGoals"
          value={formData.longTermGoals}
          onChange={(e) => updateFormData({ longTermGoals: e.target.value })}
          placeholder="Describe your long term career goals"
          className="min-h-[100px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="problemSolvingApproach">Problem Solving Approach</Label>
        <Textarea
          id="problemSolvingApproach"
          value={formData.problemSolvingApproach}
          onChange={(e) =>
            updateFormData({ problemSolvingApproach: e.target.value })
          }
          placeholder="Describe your approach to problem-solving"
          className="min-h-[100px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="customCompanyQuestions">Custom Company Questions</Label>
        <Textarea
          id="customCompanyQuestions"
          value={formData.customCompanyQuestions}
          onChange={(e) =>
            updateFormData({ customCompanyQuestions: e.target.value })
          }
          placeholder="Answer any additional questions from the company"
          className="min-h-[100px]"
        />
      </div>
    </div>
  );
}
