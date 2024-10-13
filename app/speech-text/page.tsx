"use client";

import React, { useState, useEffect } from "react";
import { Mic, MicOff, StopCircle } from "lucide-react";
import { useVoiceToText } from "react-speakup";

import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";
import Footer from "../components/Footer";

const VoiceToText = () => {
  // Use the useVoiceToText hook to enable voice-to-text functionality
  const { startListening, stopListening, transcript, reset } = useVoiceToText({
    continuous: true,
    lang: "en-US",
  });

  // State variables to track whether the app is listening and the editable transcript
  const [isListening, setIsListening] = useState(false);
  const [editableTranscript, setEditableTranscript] = useState(transcript);

  // Function to handle starting the voice-to-text listening
  const handleStartListening = () => {
    startListening();
    setIsListening(true);
  };

  // Function to handle stopping the voice-to-text listening
  const handleStopListening = () => {
    stopListening();
    setIsListening(false);
  };

  // Function to get the file name from the user
  const getFileName = () => {
    const name = prompt("Enter file name:", "transcript");
    return name === null ? null : name ? name : "transcript"; // Return null if user presses "Cancel"
  };

  // Function to export the transcript as a text file
  const exportToText = () => {
    const fileName = getFileName();
    if (fileName === null) return; // Cancel the operation if user pressed "Cancel"
    const blob = new Blob([transcript], { type: "text/plain;charset=utf-8" });
    saveAs(blob, fileName + ".txt");
  };

  // Function to export the transcript as a DOCX file
  const exportToDocx = async () => {
    const fileName = getFileName();
    if (fileName === null) return; // Cancel the operation if user pressed "Cancel"

    // Create a new DOCX document
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [new TextRun(transcript)],
            }),
          ],
        },
      ],
    });

    // Convert the DOCX document to a blob
    const blob = await Packer.toBlob(doc);
    saveAs(blob, fileName + ".docx");
  };

  // Function to export the transcript as a PDF file
  const exportToPDF = () => {
    const fileName = getFileName();
    if (fileName === null) return; // Cancel the operation if user pressed "Cancel"

    // Create a new PDF document
    const doc = new jsPDF();
    doc.text(transcript, 10, 10);
    doc.save(fileName + ".pdf");
  };

  // Update the editable transcript whenever the main transcript changes
  useEffect(() => {
    setEditableTranscript(transcript);
  }, [transcript]);

  return (
    <div className="flex flex-col  justify-center h-full w-full gap-14 bg-gradient-to-bl from-slate-500 to-slate-950">
      <div className="flex justify-center mt-44">
        <textarea
          value={editableTranscript}
          onChange={(e) => setEditableTranscript(e.target.value)}
          rows={6}
          className="text-slate-950 shadow-lg shadow-white focus:shadow-xl focus:shadow-yellow-300 border-2 border-white rounded-3xl placeholder-slate-500 p-5 focus:border-yellow-500 focus:outline-none bg-slate-200 w-5/6 md:w-4/6 lg:w-3/6"
          placeholder={` ${
            isListening
              ? "Start Speaking..."
              : "Press the Mic-icon to Start Recording"
          }`}
        />
      </div>

      <div className="flex justify-center">
        <div className="flex gap-6">
          {isListening ? (
            <MicOff
              onClick={handleStopListening}
              role="button"
              className="bg-gradient-to-bl from-red-500 hover:from-red-700 rounded-full p-8"
              size={120}
            />
          ) : (
            <Mic
              onClick={handleStartListening}
              role="button"
              className="bg-gradient-to-bl from-green-500 hover:from-green-700  rounded-full p-8"
              size={120}
            />
          )}
          <StopCircle
            onClick={reset}
            role="button"
            className="bg-gradient-to-bl from-zinc-500 hover:from-zinc-700  rounded-full p-8"
            size={120}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center">
        <button
          className="bg-gradient-to-br from-rose-500  hover:from-rose-700  rounded-full px-14 py-5 mx-8"
          onClick={exportToPDF}
        >
          Export as PDF
        </button>
        <button
          className="bg-gradient-to-tr from-zinc-500 hover:from-zinc-700  rounded-full px-14 py-5 md:m-0 m-4"
          onClick={exportToText}
        >
          Export as TXT
        </button>{" "}
        <button
          className="bg-gradient-to-tl from-sky-500 hover:from-sky-700  rounded-full px-12 py-5 mx-8"
          onClick={exportToDocx}
        >
          Export as DOCX
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default VoiceToText;
