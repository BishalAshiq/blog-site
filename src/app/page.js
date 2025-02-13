'use client';
import { useState } from 'react';
import PostCard from '@/components/PostCard';
import SearchBar from '@/components/SearchBar';
import { useBlog } from '@/context/BlogContext';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function HomePage() {
  const { posts, loading, error } = useBlog();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="text-center p-8"> 
  <Box sx={{ display: 'flex', justifyContent: "center" }}>
  <CircularProgress />
  <CircularProgress />
  <CircularProgress />
   </Box></div>;
  if (error) return <div className="text-center p-8 text-red-500">Error: {error}</div>;

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}