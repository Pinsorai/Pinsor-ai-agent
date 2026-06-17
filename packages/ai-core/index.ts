import { PlannerAgent } from "./agents/planner";
import { BuilderAgent } from "./agents/builder";

export async function generateProject(prompt: string) {
  const plan = await PlannerAgent(prompt);

  const code = await BuilderAgent(plan);

  return {
    plan,
    code
  };
}
