import { Router } from "express";
import { generateProject } from "../../../packages/ai-core";

const router = Router();

router.post("/generate", async (req, res) => {
  const { prompt } = req.body;

  const result = await generateProject(prompt);

  res.json(result);
});

export default router;
