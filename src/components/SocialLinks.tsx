import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SocialLinksProps {
  value: { [key: string]: string };
  onChange: (value: { [key: string]: string }) => void;
  options: { value: string; label: string }[];
}

export function SocialLinks({ value, onChange, options }: SocialLinksProps) {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (socialMedia: string) => {
    onChange({ ...value, [socialMedia]: "" });
    setOpen(false);
  };

  const handleRemove = (socialMedia: string) => {
    const newValue = { ...value };
    delete newValue[socialMedia];
    onChange(newValue);
  };

  const handleChange = (socialMedia: string, url: string) => {
    onChange({ ...value, [socialMedia]: url });
  };

  return (
    <div className="space-y-2">
      {Object.entries(value).map(([socialMedia, url]) => (
        <div key={socialMedia} className="flex items-center space-x-2">
          <Input
            value={url}
            onChange={(e) => handleChange(socialMedia, e.target.value)}
            placeholder={`${socialMedia} URL`}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => handleRemove(socialMedia)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            Add social media
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search social media..." />
            <CommandEmpty>No social media found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  onSelect={() => handleSelect(option.value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value[option.value] ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
