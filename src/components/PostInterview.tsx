"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

export default function PostInterview() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const handleNextInterview = () => {
    // Handle logic for taking next interview
    console.log("Taking next interview");
  };

  const handleScheduleLater = () => {
    setShowCalendar(true);
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    // Handle logic for scheduling interview
    console.log("Scheduled interview for:", date);
    setShowCalendar(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-xl rounded-lg p-8 space-y-6"
    >
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Interview Complete
      </h1>
      <p className="text-center text-gray-600">
        Thank you for completing the interview. What would you like to do next?
      </p>
      <div className="flex flex-col space-y-4">
        <Button onClick={handleNextInterview}>Take Next Interview Now</Button>
        <Button onClick={handleScheduleLater} variant="outline">
          Schedule Interview for Later
        </Button>
      </div>
      {showCalendar && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            className="rounded-md border"
          />
        </motion.div>
      )}
    </motion.div>
  );
}
