import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId, inventoryId } = req.query;
  if (!userId || typeof userId !== "string" || !inventoryId || typeof inventoryId !== "string") {
    return res.status(400).json({ error: "Invalid userId or inventoryId" });
  }
  try {
    const membership = await prisma.inventoryMember.findFirst({
      where: {
        userId,
        inventoryId,
      },
      select: { role: true },
    });
    res.status(200).json({ role: membership?.role || "USER" });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch role" });
  }
}