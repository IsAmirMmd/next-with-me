import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  postId: string | string[] | undefined;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    postId: req.query?.postId,
  });
}
