import { NextApiHandler } from "next";
import { getPosts } from "../../services/post/getPosts";

const handler: NextApiHandler = async (req, res) => {
  const posts = await getPosts();

  return res.json(posts);
};

export default handler;
