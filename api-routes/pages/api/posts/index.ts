import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  posts: {
    title: string;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    posts: [
      {
        title: "iPhone 12",
      },
      {
        title: "iPhone 13",
      },
    ],
  });
}
