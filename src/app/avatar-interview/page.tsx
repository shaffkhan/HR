"use client";

import ChatbotSection from "@/components/ChatbotSection";
import VideoSection from "@/components/VideoSection";
import { motion } from "framer-motion";

export default function InterviewChatbot() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-5/12 mb-8 md:mb-0 md:mr-8"
      >
        <VideoSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full md:w-6/12"
      >
        <ChatbotSection />
      </motion.div>
    </div>
  );
}
