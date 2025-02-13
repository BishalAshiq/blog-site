'use client'; 

import { useBlog } from '@/context/BlogContext';
import { useParams } from 'next/navigation';

export default function PostPage() {
  const { id } = useParams();  
  const { posts } = useBlog(); 

 
  const post = posts.find(p => p.id.toString() === id);

  if (!post) return <div className="text-center p-8 text-red-500">Post not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 dark:text-white">{post.title}</h1>
      <p className="text-gray-700 dark:text-gray-300">{post.body}</p>
    </div>
  );
}
