'use client';
// import { useState, useEffect } from 'react';
// import { saveAs } from 'file-saver';
// import jsPDF from 'jspdf';
// import { Document, Packer, Paragraph, TextRun } from 'docx';



// Import necessary modules and components
import { useEffect, useState, useRef } from "react";
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import { Document, Packer, Paragraph, TextRun } from 'docx';

// Declare a global interface to add the webkitSpeechRecognition property to the Window object
declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

export default function MicrophoneComponent() {
  // State variables to manage recording status, completion, and transcript
  const [isRecording, setIsRecording] = useState(false);
  const [recordingComplete, setRecordingComplete] = useState(false);
  const [transcript, setTranscript] = useState("");

  // Reference to store the SpeechRecognition instance
  const recognitionRef = useRef<any>(null);

  // Function to start recording
  const startRecording = () => {
    setIsRecording(true);
    // Create a new SpeechRecognition instance and configure it
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

    // Event handler for speech recognition results
    recognitionRef.current.onresult = (event: any) => {
      const { transcript } = event.results[event.results.length - 1][0];

      // Log the recognition results and update the transcript state
      console.log(event.results);
      setTranscript(transcript);
    };

    // Start the speech recognition
    recognitionRef.current.start();
  };

  // Cleanup effect when the component unmounts
  useEffect(() => {
    return () => {
      // Stop the speech recognition if it's active
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  // Function to stop recording
  const stopRecording = () => {
    if (recognitionRef.current) {
      // Stop the speech recognition and mark recording as complete
      recognitionRef.current.stop();
      setRecordingComplete(true);
    }
  };

  // Toggle recording state and manage recording actions
  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  // The rest of your export functions can remain the same...
  const getFileName = () => {
    const name = prompt("Enter file name:", "transcript");
    return name ? name : "transcript"; // Default name if no input
  };

  const exportToText = () => {
    const fileName = getFileName() + '.txt';
    const blob = new Blob([transcript], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, fileName);
  };

  const exportToDocx = async () => {
    const fileName = getFileName() + '.docx';
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun(transcript),
            ],
          }),
        ],
      }],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, fileName);
  };

  const exportToPDF = () => {
    const fileName = getFileName() + '.pdf';
    const doc = new jsPDF();
    doc.text(transcript, 10, 10);
    doc.save(fileName);
  };

  const clearTranscript = () => {
    setTranscript('');
  };

  return (
  <>
  <div className="flex items-center justify-center h-screen w-full">
  <div className="w-full">
    {(isRecording || transcript) && (
      <div className="w-1/4 m-auto rounded-md border p-4 bg-white">
        <div className="flex-1 flex w-full justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">
              {recordingComplete ? "Recorded" : "Recording"}
            </p>
            <p className="text-sm text-muted-foreground">
              {recordingComplete
                ? "Thanks for talking."
                : "Start speaking..."}
            </p>
          </div>
          {isRecording && (
            <div className="rounded-full w-4 h-4 bg-red-400 animate-pulse" />
          )}
        </div>

        {transcript && (
          <div className="border rounded-md p-2 h-fullm mt-4">
            <p className="mb-0">{transcript}</p>
          </div>
        )}
      </div>
    )}

    <div className="flex items-center w-full">
      {isRecording ? (
        // Button for stopping recording
        <button
          onClick={handleToggleRecording}
          className="mt-10 m-auto flex items-center justify-center bg-red-400 hover:bg-red-500 rounded-full w-20 h-20 focus:outline-none"
        >
          <svg
            className="h-12 w-12 "
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="white" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </button>
      ) : (
        // Button for starting recording
        <button
          onClick={handleToggleRecording}
          className="mt-10 m-auto flex items-center justify-center bg-blue-400 hover:bg-blue-500 rounded-full w-20 h-20 focus:outline-none"
        >
          <svg
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-white"
          >
            <path
              fill="currentColor" // Change fill color to the desired color
              d="M128 176a48.05 48.05 0 0 0 48-48V64a48 48 0 0 0-96 0v64a48.05 48.05 0 0 0 48 48ZM96 64a32 32 0 0 1 64 0v64a32 32 0 0 1-64 0Zm40 143.6V232a8 8 0 0 1-16 0v-24.4A80.11 80.11 0 0 1 48 128a8 8 0 0 1 16 0a64 64 0 0 0 128 0a8 8 0 0 1 16 0a80.11 80.11 0 0 1-72 79.6Z"
            />
          </svg>
        </button>
      )}
    </div>
  </div>
</div>
 {/* Another one  */}
    <div>
      <h1>Speech-to-Text Recorder</h1>
      <textarea
        value={transcript}
        // onChange={(e) => setTranscript(e.target.value)}
        rows={10}
        cols={50}
      />
      <br />
      <button onClick={startRecording} disabled={isRecording}>Start Recording</button>
      <button onClick={stopRecording} disabled={!isRecording}>Stop Recording</button>
      <button onClick={exportToText}>Export as TXT</button>
      <button onClick={exportToDocx}>Export as DOCX</button>
      <button onClick={exportToPDF}>Export as PDF</button>
      <button onClick={clearTranscript}>Clear Text</button>
    </div>
    </>
  );
}
