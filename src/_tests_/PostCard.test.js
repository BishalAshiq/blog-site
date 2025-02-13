import { render, screen } from '@testing-library/react';
import PostCard from '@/components/PostCard';

test('renders post title and body', () => {
  const post = { id: 1, title: 'Test Post', body: 'This is a test post' };
  render(<PostCard post={post} />);

  expect(screen.getByText('Test Post')).toBeInTheDocument();
  expect(screen.getByText('This is a test post')).toBeInTheDocument();
});
