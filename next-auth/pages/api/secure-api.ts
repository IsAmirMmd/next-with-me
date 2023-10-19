import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

type Data = {
  message: string;
  session?: object;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "not autherized" });
  }
  return res.status(200).json({ message: "logged in", session });
}
