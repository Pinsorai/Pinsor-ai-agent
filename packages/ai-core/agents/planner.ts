export async function PlannerAgent(prompt: string) {
  return {
    project: "Generated App",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "PostgreSQL"
    ],
    requirements: prompt
  };
}
