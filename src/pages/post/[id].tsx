import { Post } from "@prisma/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { getPostById } from "../../services/post/getPostById";
import { getPosts } from "../../services/post/getPosts";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();

  const paths = posts.map(({ id }) => ({ params: { id: String(id) } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = Number(context?.params?.id);
  const post = await getPostById(id);

  return { props: { post } };
};

type PostProps = {
  post: Post;
};

const Post = ({ post }: PostProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
