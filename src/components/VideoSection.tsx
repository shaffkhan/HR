"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function VideoSection() {
  return (
    <Card className="w-full bg-white shadow-xl rounded-xl overflow-hidden">
      <CardHeader className="bg-[#2c3e50] text-white">
        <CardTitle className="text-2xl font-bold">Sarah Johnson</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="aspect-video bg-gray-200 mb-6 rounded-lg overflow-hidden"
        >
          {/* Replace with actual video player */}
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            Video Player Placeholder
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center space-x-4"
        >
          <Avatar className="h-16 w-16 ring-2 ring-[#2c3e50]">
            <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-sm text-gray-600">Software Engineer</p>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}
