import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  todos: {
    id: number;
    title: string;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    todos: [
      {
        id: 1,
        title: "learning Api",
      },
      {
        id: 2,
        title: "Learning Next",
      },
    ],
  });
}
