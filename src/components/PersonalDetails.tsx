/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { SocialLinks } from "./SocialLinks";

interface PersonalDetailsProps {
  formData: {
    fullName: string;
    email: string;
    phone: string;
    alternativeNumber: string;
    dateOfBirth: string;
    timeZone: string;
    country: string;
    state: string;
    city: string;
    address: string;
    nationality: string;
    currentLocation: string;
    languages: string[];
    socialLinks: { [key: string]: string };
    personalWebsite: string;
    educationLevel: string;
    educationType: string;
  };
  updateFormData: (data: Partial<PersonalDetailsProps["formData"]>) => void;
}

export default function PersonalDetails({
  formData,
  updateFormData,
}: PersonalDetailsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          value={formData.fullName}
          onChange={(e) => updateFormData({ fullName: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => updateFormData({ phone: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="alternativeNumber">Alternative Number</Label>
        <Input
          id="alternativeNumber"
          type="tel"
          value={formData.alternativeNumber}
          onChange={(e) =>
            updateFormData({ alternativeNumber: e.target.value })
          }
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="dateOfBirth">Date of Birth</Label>
        <div className="relative">
          <CalendarIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            id="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => updateFormData({ dateOfBirth: e.target.value })}
            required
            className="pl-10"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="nationality">Nationality</Label>
        <Select
          value={formData.nationality}
          onValueChange={(value: any) => updateFormData({ nationality: value })}
        >
          <SelectTrigger id="nationality">
            <SelectValue placeholder="Select nationality" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="usa">American</SelectItem>
            <SelectItem value="uk">British</SelectItem>
            <SelectItem value="canada">Canadian</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="Nationality">Nationality</Label>
        <Select
          value={formData.country}
          onValueChange={(value) => updateFormData({ country: value })}
        >
          <SelectTrigger id="country">
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="usa">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="canada">Canada</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="state">State</Label>
        <Select
          value={formData.state}
          onValueChange={(value) => updateFormData({ state: value })}
        >
          <SelectTrigger id="state">
            <SelectValue placeholder="Select a state" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ny">New York</SelectItem>
            <SelectItem value="ca">California</SelectItem>
            <SelectItem value="tx">Texas</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="city">City</Label>
        <Select
          value={formData.city}
          onValueChange={(value) => updateFormData({ city: value })}
        >
          <SelectTrigger id="city">
            <SelectValue placeholder="Select a city" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="nyc">New York City</SelectItem>
            <SelectItem value="la">Los Angeles</SelectItem>
            <SelectItem value="chicago">Chicago</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="currentLocation">Current Location</Label>
        <Input
          id="currentLocation"
          value={formData.currentLocation}
          onChange={(e) => updateFormData({ currentLocation: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="address">Address</Label>
        <Textarea
          id="address"
          value={formData.address}
          onChange={(e) => updateFormData({ address: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="timeZone">Time Zone</Label>
        <Select
          value={formData.timeZone}
          onValueChange={(value) => updateFormData({ timeZone: value })}
        >
          <SelectTrigger id="timeZone">
            <SelectValue placeholder="Select a time zone" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="GMT">GMT</SelectItem>
            <SelectItem value="EST">EST</SelectItem>
            <SelectItem value="PST">PST</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* <div className="space-y-2">
        <Label htmlFor="languages">Languages</Label>
        <Select
          options={[
            { value: "ur", label: "Urdu" },
            { value: "en", label: "English" },
            { value: "fr", label: "French" },
            { value: "ar", label: "Arabic" },
          ]}
          value={formData.languages as any}
          onChange={(value: any) => updateFormData({ languages: value })}
        />
      </div> */}
      <div className="space-y-2 md:col-span-2">
        <Label>Social Links</Label>
        <SocialLinks
          value={formData.socialLinks}
          onChange={(value: any) => updateFormData({ socialLinks: value })}
          options={[
            { value: "linkedin", label: "LinkedIn" },
            { value: "facebook", label: "Facebook" },
            { value: "instagram", label: "Instagram" },
            { value: "github", label: "GitHub" },
          ]}
        />
      </div>
      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="personalWebsite">
          Portfolio / Github Link (Optional)
        </Label>
        <Input
          id="personalWebsite"
          type="url"
          value={formData.personalWebsite}
          onChange={(e) => updateFormData({ personalWebsite: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="educationLevel">Education Level</Label>
        <Select
          value={formData.educationLevel}
          onValueChange={(value) => updateFormData({ educationLevel: value })}
        >
          <SelectTrigger id="educationLevel">
            <SelectValue placeholder="Select education level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="matric">Matric</SelectItem>
            <SelectItem value="inter">Inter</SelectItem>
            <SelectItem value="bachelors">Bachelors</SelectItem>
            <SelectItem value="mphil">M.Phil</SelectItem>
            <SelectItem value="phd">Ph.D</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="educationType">Education Type</Label>
        <Input
          id="educationType"
          value={formData.educationType}
          onChange={(e) => updateFormData({ educationType: e.target.value })}
          required
        />
      </div>
    </div>
  );
}
