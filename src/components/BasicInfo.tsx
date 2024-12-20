// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { useRouter } from "next/navigation";

// export default function BasicInfo() {
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     dateOfBirth: "",
//     city: "",
//     state: "",
//     country: "",
//     desiredRole: "",
//     yearsOfExperience: "",
//     availability: "",
//     resume: null,
//     portfolioLinks: "",
//     expectedSalary: "",
//     willingToRelocate: "",
//     linkedinProfile: "",
//   });

//   const handleInputChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
//     >
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setFormData(
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         (prev) => ({ ...prev, resume: e.target.files?.[0] || null } as any)
//       );
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     router.push("/specific-info");
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="bg-white shadow-xl rounded-lg p-8 space-y-6"
//     >
//       <h1 className="text-3xl font-bold text-center text-gray-800">
//         Basic Information
//       </h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="space-y-2">
//             <Label htmlFor="fullName">Full Name</Label>
//             <Input
//               id="fullName"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="phone">Phone Number</Label>
//             <Input
//               id="phone"
//               name="phone"
//               type="tel"
//               value={formData.phone}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="dateOfBirth">Date of Birth</Label>
//             <Input
//               id="dateOfBirth"
//               name="dateOfBirth"
//               type="date"
//               value={formData.dateOfBirth}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="city">City</Label>
//             <Input
//               id="city"
//               name="city"
//               value={formData.city}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="state">State</Label>
//             <Input
//               id="state"
//               name="state"
//               value={formData.state}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="country">Country</Label>
//             <Input
//               id="country"
//               name="country"
//               value={formData.country}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="desiredRole">Desired Role</Label>
//             <Select
//               onValueChange={(value) =>
//                 setFormData((prev) => ({ ...prev, desiredRole: value }))
//               }
//               required
//             >
//               <SelectTrigger id="desiredRole" className="w-full">
//                 <SelectValue placeholder="Select a role" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="AI Developer">AI Developer</SelectItem>
//                 <SelectItem value="ML Engineer">ML Engineer</SelectItem>
//                 <SelectItem value="Data Scientist">Data Scientist</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="yearsOfExperience">Years of Experience</Label>
//             <Input
//               id="yearsOfExperience"
//               name="yearsOfExperience"
//               type="number"
//               value={formData.yearsOfExperience}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="availability">Availability</Label>
//             <Select
//               onValueChange={(value) =>
//                 setFormData((prev) => ({ ...prev, availability: value }))
//               }
//               required
//             >
//               <SelectTrigger id="availability" className="w-full">
//                 <SelectValue placeholder="Select availability" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="Immediate">Immediate</SelectItem>
//                 <SelectItem value="1 Month">1 Month</SelectItem>
//                 <SelectItem value="Other">Other</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="resume">Resume/CV</Label>
//           <Input
//             id="resume"
//             name="resume"
//             type="file"
//             onChange={handleFileChange}
//             required
//           />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="portfolioLinks">
//             Portfolio/Code Repository Links
//           </Label>
//           <Textarea
//             id="portfolioLinks"
//             name="portfolioLinks"
//             value={formData.portfolioLinks}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="expectedSalary">Expected Salary</Label>
//           <Input
//             id="expectedSalary"
//             name="expectedSalary"
//             type="number"
//             value={formData.expectedSalary}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="linkedinProfile">LinkedIn Profile URL</Label>
//           <Input
//             id="linkedinProfile"
//             name="linkedinProfile"
//             type="url"
//             value={formData.linkedinProfile}
//             onChange={handleInputChange}
//           />
//         </div>
//         <Button type="submit" className="w-full bg-[#2d3e50]">
//           Submit Basic Information
//         </Button>
//       </form>
//     </motion.div>
//   );
// }
