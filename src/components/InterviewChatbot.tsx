"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Send } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
}

export default function InterviewChatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add initial greeting message
    setMessages([
      {
        id: 1,
        text: "Welcome [Name], we're excited to begin your interview for the [Desired Role]. Let's get started!",
        sender: "bot",
      },
    ]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: input,
        sender: "user",
      };
      setMessages((prev) => [...prev, newMessage]);
      setInput("");
      setIsTyping(true);
      // Simulate bot response (replace with actual chatbot logic)
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          text: "Thank you for your response. Here's the next question: Can you describe a challenging project you've worked on and how you overcame the obstacles?",
          sender: "bot",
        };
        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      }, 2000);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto bg-gradient-to-br from-indigo-50 to-purple-50 shadow-2xl rounded-xl overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
          <h1 className="text-3xl font-bold text-center text-white">
            AI Interview Assistant
          </h1>
        </div>
        <div className="h-[600px] flex flex-col">
          <div
            className="flex-grow overflow-y-auto space-y-4 p-6"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#8b5cf6 #ddd6fe",
            }}
          >
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-end space-x-2 ${
                    message.sender === "bot" ? "justify-start" : "justify-end"
                  }`}
                >
                  {message.sender === "bot" && (
                    <Avatar className="w-8 h-8 bg-indigo-600">
                      <span className="text-xs font-bold"></span>
                    </Avatar>
                  )}
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className={`max-w-[70%] p-3 rounded-lg shadow-md ${
                      message.sender === "bot"
                        ? "bg-white text-indigo-900"
                        : "bg-indigo-600 text-white"
                    }`}
                  >
                    {message.text}
                  </motion.div>
                  {message.sender === "user" && (
                    <Avatar className="w-8 h-8 bg-purple-600">
                      <span className="text-xs font-bold"></span>
                    </Avatar>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center space-x-2"
              >
                <Avatar className="w-8 h-8 bg-indigo-600">
                  <span className="text-xs font-bold"></span>
                </Avatar>
                <div className="bg-white p-3 rounded-lg shadow-md">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      transition: { repeat: Infinity, duration: 0.8 },
                    }}
                    className="w-6 h-2 bg-indigo-600 rounded-full"
                  />
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form
            onSubmit={handleSubmit}
            className="p-4 bg-white border-t border-indigo-100"
          >
            <div className="flex items-center space-x-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your response..."
                className="flex-grow resize-none border-indigo-200 focus:ring-indigo-500 focus:border-indigo-500"
                rows={2}
              />
              <div className="flex flex-col space-y-2">
                <Button
                  type="submit"
                  size="icon"
                  className="rounded-full bg-indigo-600 hover:bg-indigo-700"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
