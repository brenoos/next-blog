import { Post } from "@prisma/client";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { getPosts } from "../services/post/getPosts";

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getPosts();

  return { props: { posts } };
};

interface BlogProps {
  posts: Post[];
}

const Blog = ({ posts }: BlogProps) => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`post/${post.id}`} key={post.id}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
