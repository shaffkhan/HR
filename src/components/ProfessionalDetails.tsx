import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
    availabilityUnit: string;
    availabilityValue: string;
    workMode: string[];
    technicalSkills: string;
    proficiencyLevel: string;
    previousIndustries: string;
    industriesOfInterest: string;
    currentCompany: string;
    professionalAchievements: string;
  };
  updateFormData: (data: Partial<ProfessionalDetailsProps["formData"]>) => void;
}

const industries = [
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Manufacturing",
  "Retail",
  "Entertainment",
  "Transportation",
  "Energy",
  "Telecommunications",
];

const roles = [
  "Software Engineer",
  "Product Manager",
  "Data Scientist",
  "UX Designer",
  "DevOps Engineer",
  "Project Manager",
  "Business Analyst",
  "Full Stack Developer",
  "AI Engineer",
  "Cloud Architect",
];

export default function ProfessionalDetails({
  formData,
  updateFormData,
}: ProfessionalDetailsProps) {
  const workModeOptions = [
    { id: "onsite", label: "On-Site" },
    { id: "remote", label: "Remote" },
    { id: "hybrid", label: "Hybrid" },
  ];

  const handleWorkModeChange = (checked: boolean, value: string) => {
    const currentModes = new Set(formData.workMode);
    if (checked) {
      currentModes.add(value);
    } else {
      currentModes.delete(value);
    }
    updateFormData({ workMode: Array.from(currentModes) });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="desiredRole">Desired Role</Label>
        <Select
          value={formData.desiredRole}
          onValueChange={(value) => updateFormData({ desiredRole: value })}
        >
          <SelectTrigger id="desiredRole">
            <SelectValue placeholder="Select a Role" />
          </SelectTrigger>
          <SelectContent>
            {roles.map((role) => (
              <SelectItem key={role} value={role}>
                {role}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="yearsOfExperience">Years of Experience</Label>
        <Input
          id="yearsOfExperience"
          type="number"
          min="0"
          max="50"
          placeholder="Enter No. of Years"
          value={formData.yearsOfExperience}
          onChange={(e) =>
            updateFormData({ yearsOfExperience: e.target.value })
          }
          required
        />
      </div>

      <div className="space-y-2 md:col-span-2">
        <Label>Availability</Label>
        <div className="flex gap-4">
          <div className="flex-1">
            <Select
              value={formData.availabilityUnit}
              onValueChange={(value) =>
                updateFormData({ availabilityUnit: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="days">Days</SelectItem>
                <SelectItem value="weeks">Weeks</SelectItem>
                <SelectItem value="months">Months</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <Input
              type="number"
              min="1"
              value={formData.availabilityValue}
              onChange={(e) =>
                updateFormData({ availabilityValue: e.target.value })
              }
              placeholder="Enter Number"
              required
            />
          </div>
        </div>
      </div>

      <div className="space-y-2 md:col-span-2">
        <Label>Preferred Work Mode</Label>
        <div className="flex gap-6">
          {workModeOptions.map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <Checkbox
                id={option.id}
                checked={formData.workMode.includes(option.id)}
                onCheckedChange={(checked) =>
                  handleWorkModeChange(checked as boolean, option.id)
                }
              />
              <Label htmlFor={option.id}>{option.label}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="technicalSkills">Technical Skills</Label>
        <Input
          id="technicalSkills"
          value={formData.technicalSkills}
          onChange={(e) => updateFormData({ technicalSkills: e.target.value })}
          placeholder="e.g., JavaScript, Python, React, Node.js"
          required
        />
      </div>

      <div className="space-y-2 md:col-span-2">
        <Label>Proficiency Level</Label>
        <RadioGroup
          value={formData.proficiencyLevel}
          onValueChange={(value) => updateFormData({ proficiencyLevel: value })}
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="entry" id="entry" />
            <Label htmlFor="entry">Entry</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="intermediate" id="intermediate" />
            <Label htmlFor="intermediate">Intermediate</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="expert" id="expert" />
            <Label htmlFor="expert">Expert</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="previousIndustries">Previously Worked Industries</Label>
        <Select
          value={formData.previousIndustries}
          onValueChange={(value) =>
            updateFormData({ previousIndustries: value })
          }
        >
          <SelectTrigger id="previousIndustries">
            <SelectValue placeholder="Select industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((industry) => (
              <SelectItem key={industry} value={industry.toLowerCase()}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="industriesOfInterest">Industries of Interest</Label>
        <Select
          value={formData.industriesOfInterest}
          onValueChange={(value) =>
            updateFormData({ industriesOfInterest: value })
          }
        >
          <SelectTrigger id="industriesOfInterest">
            <SelectValue placeholder="Select industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((industry) => (
              <SelectItem key={industry} value={industry.toLowerCase()}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="currentCompany">Current Job Title</Label>
        <Input
          id="currentCompany"
          value={formData.currentCompany}
          onChange={(e) => updateFormData({ currentCompany: e.target.value })}
          placeholder="Enter Current Job Title"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="currentCompany">Current Company</Label>
        <Input
          id="currentCompany"
          value={formData.currentCompany}
          onChange={(e) => updateFormData({ currentCompany: e.target.value })}
          placeholder="Enter Current Company"
        />
      </div>

      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="professionalAchievements">
          Professional Achievements
        </Label>
        <Textarea
          id="professionalAchievements"
          value={formData.professionalAchievements}
          onChange={(e) =>
            updateFormData({ professionalAchievements: e.target.value })
          }
          placeholder="Describe your Key Professional Achievements"
          className="min-h-[100px]"
        />
      </div>
    </div>
  );
}
