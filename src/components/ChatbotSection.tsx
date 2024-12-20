"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mic, Send } from "lucide-react";

export default function ChatbotSection() {
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; content: string }[]
  >([]);
  const [isRecording, setIsRecording] = useState(false);

  const handleSendMessage = (content: string) => {
    setMessages([...messages, { role: "user", content }]);
    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: "This is a simulated response from the chatbot.",
        },
      ]);
    }, 1000);
  };

  const handleAudioInput = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Simulate audio input
      setTimeout(() => {
        handleSendMessage("This is a simulated audio input message.");
        setIsRecording(false);
      }, 2000);
    }
  };

  return (
    <Card className="w-full h-[600px] bg-white shadow-xl rounded-xl overflow-hidden">
      <CardHeader className="bg-[#2c3e50]">
        <CardTitle className="text-2xl font-bold text-white">
          AI Interviewer
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[450px] p-4">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`mb-4 ${
                  message.role === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block p-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-[#2c3e50] text-white"
                      : "bg-gray-100 text-gray-800"
                  } max-w-[80%]`}
                >
                  {message.content}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </ScrollArea>
      </CardContent>
      <CardFooter className="bg-gray-100 p-4">
        <div className="flex items-center space-x-2 w-full">
          <Button
            variant="outline"
            size="icon"
            className={`rounded-full ${
              isRecording ? "bg-red-500 text-white" : "bg-[#2c3e50] text-white"
            }`}
            onClick={handleAudioInput}
          >
            <Mic className="h-4 w-4" />
          </Button>
          <Button
            className="rounded-full flex-grow bg-[#2c3e50] text-white hover:bg-[#34495e]"
            onClick={() => handleSendMessage("Hello, AI Interviewer!")}
          >
            <Send className="h-4 w-4 mr-2" />
            Send Message
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
