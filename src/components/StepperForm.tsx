/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import DocumentUploads from "./DocumentUploads";
import GeneralQuestions from "./GeneralQuestions";
import PersonalDetails from "./PersonalDetails";
import ProfessionalDetails from "./ProfessionalDetails";
import { useRouter } from "next/navigation";

const steps = [
  "Document Uploads",
  "Personal Details",
  "Professional Details",
  "General Questions",
];

export default function StepperForm() {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Personal Details
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    city: "",
    state: "",
    country: "",
    address: "",
    // Professional Details
    desiredRole: "",
    yearsOfExperience: "",
    availability: "",
    otherAvailability: "",
    // Document Uploads
    resume: null as File | null,
    portfolioLinks: "",
    // General Questions
    expectedSalary: "",
    willingToRelocate: "",
    linkedinProfile: "",
  });

  const updateFormData = (newData: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <DocumentUploads
            formData={formData as any}
            updateFormData={updateFormData}
          />
        );
      case 1:
        return (
          <PersonalDetails
            formData={formData as any}
            updateFormData={updateFormData}
          />
        );
      case 2:
        return (
          <ProfessionalDetails
            formData={formData as any}
            updateFormData={updateFormData}
          />
        );
      case 3:
        return (
          <GeneralQuestions
            formData={formData as any}
            updateFormData={updateFormData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Application Form
      </h1>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="h-2 bg-gray-200 rounded-full">
          <motion.div
            className="h-full bg-[#2d3e50] rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="flex justify-between mt-2">
          {steps.map((step, index) => (
            <div
              key={step}
              className={`text-sm ${
                index <= currentStep
                  ? "text-[#2d3e50] font-semibold"
                  : "text-gray-400"
              }`}
            >
              {step}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {renderStep()}

        <div className="mt-8 flex justify-between">
          <Button
            type="button"
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="bg-gray-300 text-gray-800 hover:bg-gray-400"
          >
            Previous
          </Button>
          {currentStep < steps.length - 1 ? (
            <Button type="button" onClick={handleNext} className="bg-[#2d3e50]">
              Next
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-[#2d3e50]"
              onClick={() => router.push("/interview")}
            >
              Submit Application
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
