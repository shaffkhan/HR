"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function PostInterview() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const router = useRouter();

  const handleNextInterview = () => {
    router.push("/avatar-interview");
    console.log("Taking next interview");
  };

  const handleScheduleLater = () => {
    setShowCalendar(true);
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      setShowEmailDialog(true);
    }
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending email
    console.log("Sending email to:", email);
    console.log("Scheduled interview for:", selectedDate);
    setShowEmailDialog(false);
    setShowConfirmation(true);
    // Reset states
    setEmail("");
    setSelectedDate(undefined);
    setShowCalendar(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-xl rounded-lg p-8 space-y-6 max-w-md mx-auto"
    >
      <h1 className="text-3xl font-bold text-center text-[#2c3e50]">
        Interview Complete
      </h1>
      <p className="text-center text-gray-600">
        Thank you for completing the interview. What would you like to do next?
      </p>
      <div className="flex flex-col space-y-4">
        <Button
          onClick={handleNextInterview}
          className="bg-[#2c3e50] hover:bg-[#34495e] text-white"
        >
          Take Next Interview Now
        </Button>
        <Button
          onClick={handleScheduleLater}
          variant="outline"
          className="border-[#2c3e50] text-[#2c3e50] hover:bg-[#2c3e50] hover:text-white"
        >
          Schedule Interview for Later
        </Button>
      </div>
      <AnimatePresence>
        {showCalendar && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              className="rounded-md border border-[#2c3e50]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog open={showEmailDialog} onOpenChange={setShowEmailDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-[#2c3e50]">
              Enter Your Email
            </DialogTitle>
            <DialogDescription>
              We will send you a confirmation of your scheduled interview.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSendEmail}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="col-span-3"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="bg-[#2c3e50] hover:bg-[#34495e] text-white"
              >
                Send Confirmation
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-[#2c3e50]">Confirmation</DialogTitle>
            <DialogDescription>
              Your interview has been scheduled successfully.
            </DialogDescription>
          </DialogHeader>
          <p>
            An email confirmation has been sent to your provided email address.
          </p>
          <DialogFooter>
            <Button
              onClick={() => setShowConfirmation(false)}
              className="bg-[#2c3e50] hover:bg-[#34495e] text-white"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
