"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Send, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp?: string;
  isAction?: boolean;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [userMessageCount, setUserMessageCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: "Hey There! Who am I talking to today?",
        sender: "bot",
        timestamp: "4:59 PM",
      },
    ]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    if (userMessageCount > 0 && userMessageCount % 3 === 0) {
      setShowPopup(true);
    }
  }, [messages, userMessageCount]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: input,
        sender: "user",
        timestamp: new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, newMessage]);
      setInput("");
      setIsTyping(true);
      setUserMessageCount((prev) => prev + 1);

      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          text: "Thank you for your message. I'll get back to you shortly.",
          sender: "bot",
          timestamp: new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      }, 2000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto h-[650px] flex flex-col relative rounded-[5%] overflow-hidden">
      <header className="bg-[#2d3e50] p-4 flex items-center gap-3">
        <Avatar className="h-10 w-10 bg-white/10">
          <AvatarImage
            src="https://static.vecteezy.com/system/resources/previews/004/996/790/original/robot-chatbot-icon-sign-free-vector.jpg"
            alt="Recruiter"
          />
        </Avatar>
        <h1 className="text-xl font-semibold text-white">Recruiter</h1>
      </header>

      <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`flex items-start gap-3 ${
                message.sender === "user" ? "justify-end" : ""
              }`}
            >
              {message.sender === "bot" && (
                <Avatar className="h-8 w-8 mt-1 bg-[#2d3e50]">
                  <AvatarImage
                    src="https://static.vecteezy.com/system/resources/previews/004/996/790/original/robot-chatbot-icon-sign-free-vector.jpg"
                    alt="Recruiter"
                  />
                </Avatar>
              )}
              <div
                className={`flex-1 ${
                  message.sender === "user" ? "flex flex-col items-end" : ""
                }`}
              >
                <div
                  className={`inline-block rounded-lg px-4 py-2 max-w-[85%] ${
                    message.sender === "bot"
                      ? message.isAction
                        ? "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800"
                        : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800"
                      : "bg-[#E5F5F8] text-[#2d3e50]"
                  }`}
                >
                  {message.isAction ? (
                    <a href="#" className="hover:underline">
                      {message.text}
                    </a>
                  ) : (
                    message.text
                  )}
                </div>
                {message.timestamp && (
                  <div className="text-xs text-gray-500 mt-1 px-1">
                    {message.timestamp}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isTyping && (
          <div className="flex items-start gap-3">
            <Avatar className="h-8 w-8 mt-1 bg-[#2d3e50]">
              <AvatarImage
                src="https://static.vecteezy.com/system/resources/previews/004/996/790/original/robot-chatbot-icon-sign-free-vector.jpg"
                alt="Recruiter"
              />
            </Avatar>
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg px-4 py-2 inline-block">
              <motion.div
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex gap-1"
              >
                <div className="w-2 h-2 rounded-full bg-gray-400" />
                <div className="w-2 h-2 rounded-full bg-gray-400" />
                <div className="w-2 h-2 rounded-full bg-gray-400" />
              </motion.div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-white border-t">
        <div className="flex items-center gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder="Write a message"
            className="flex-1 resize-none border-0 focus-visible:ring-0 p-2 h-[42px] max-h-[42px]"
          />
          <Button
            size="icon"
            type="submit"
            className="bg-[#2d3e50] hover:bg-[#1d2b3a]"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </form>

      {showPopup && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <Card className="p-6 max-w-sm w-full bg-white">
            <h2 className="text-xl font-semibold mb-2 text-center">
              Congratulations!
            </h2>
            <p className="text-center mb-4">
              You have passed the initial chatbot
            </p>
            <Button
              onClick={() => {
                setShowPopup(false), router.push("/post-interview");
              }}
              className="w-full bg-[#2d3e50] hover:bg-[#1d2b3a] text-white"
            >
              Click to move forward <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
}
