'use client'

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleSpeechText = () => {
    router.push("/speech-text");
  };

  return (
    <>
      <main className="h-screen bg-gradient-to-tr from-zinc-200 via-zinc-600 to-zinc-900">
        <div className="min-h-full ">
          <div className="pt-80 flex space-x-10 justify-center">
            <button
              className="bg-slate-500 hover:bg-slate-700 text-white py-2 px-4 rounded-s-3xl"
              onClick={handleSpeechText}
            >
              Speech-Text
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
