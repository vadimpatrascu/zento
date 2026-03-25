import type { Metadata } from "next";
import { MatchingQuiz } from "./quiz";

export const metadata: Metadata = {
  title: "Găsește specialistul potrivit — Quiz AI",
  description:
    "Răspunde la câteva întrebări și algoritmul nostru îți recomandă specialistul perfect pentru nevoile tale.",
};

export default function MatchingPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <MatchingQuiz />
    </div>
  );
}
