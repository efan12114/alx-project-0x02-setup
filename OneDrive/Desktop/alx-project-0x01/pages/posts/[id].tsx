import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { PostProps } from '@/interfaces';
import Header from '@/components/layout/Header';

interface PostDetailProps {
  post: PostProps;
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  if (!post) {
    return (
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold">Post Not Found</h1>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg mt-10">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4 capitalize">{post.title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 whitespace-pre-line">{post.body}</p>
        
        <div className="pt-4 border-t border-gray-200 text-sm text-gray-500">
          <p>Post ID: <span className="font-semibold">{post.id}</span></p>
          <p>User ID: <span className="font-semibold">{post.userId}</span></p>
        </div>
      </div>
    </div>
  );
};

// Next.js function to tell the app which paths (IDs) to pre-render
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: PostProps[] = await response.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

// Next.js function to fetch the data for the specific ID requested
export const getStaticProps: GetStaticProps<PostDetailProps> = async ({ params }) => {
  const postId = params?.id;
  
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post: PostProps = await response.json();

  return {
    props: {
      post,
    },
  };
};

export default PostDetail;