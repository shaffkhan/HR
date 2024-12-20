"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation'

export default function SpecificInfo() {
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [photoBlob, setPhotoBlob] = useState<Blob | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const router = useRouter()

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      const chunks: BlobPart[] = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        setAudioBlob(blob);
      };

      mediaRecorder.start();
      setIsRecording(true);

      // Stop recording after 10 seconds
      setTimeout(() => {
        if (
          mediaRecorderRef.current &&
          mediaRecorderRef.current.state === "recording"
        ) {
          mediaRecorderRef.current.stop();
          setIsRecording(false);
        }
      }, 10000);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      canvas.getContext("2d")?.drawImage(videoRef.current, 0, 0);
      canvas.toBlob(
        (blob) => {
          if (blob) {
            setPhotoBlob(blob);
          }
        },
        "image/jpeg",
        0.95
      );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/interview')
    console.log("Form submitted:", { audioBlob, photoBlob });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-xl rounded-lg p-8 space-y-6"
    >
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Specific Information
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <Label className="text-lg font-semibold">
            Audio Message Recording
          </Label>
          <p className="text-sm text-gray-600">
            Please record a 10-second audio message introducing yourself and
            explaining why you are a great fit for this role.
          </p>
          <div className="flex space-x-4">
            <Button
              type="button"
              onClick={startRecording}
              disabled={isRecording}
            >
              Start Recording
            </Button>
            <Button
              type="button"
              onClick={stopRecording}
              disabled={!isRecording}
            >
              Stop Recording
            </Button>
          </div>
          {audioBlob && (
            <audio
              controls
              src={URL.createObjectURL(audioBlob)}
              className="w-full"
            />
          )}
        </div>
        <div className="space-y-4">
          <Label className="text-lg font-semibold">Fresh Photo Capture</Label>
          <p className="text-sm text-gray-600">
            Take a fresh photo for facial identification during later stages of
            the interview process.
          </p>
          <div className="space-y-4">
            <Button type="button" onClick={startCamera}>
              Start Camera
            </Button>
            <video
              ref={videoRef}
              autoPlay
              muted
              className="w-full h-64 bg-gray-200"
            />
            <Button type="button" onClick={capturePhoto}>
              Capture Photo
            </Button>
            {photoBlob && (
              <img
                src={URL.createObjectURL(photoBlob)}
                alt="Captured"
                className="w-full h-64 object-cover"
              />
            )}
          </div>
        </div>
        <Button type="submit" className="w-full">
          Submit Specific Information
        </Button>
      </form>
    </motion.div>
  );
}
