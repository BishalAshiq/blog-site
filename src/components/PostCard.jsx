import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <Link href={`/post/${post.id}`}>
      <div className=''>
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-transform duration-200 hover:scale-[1.02] postCard-div">
          <h2 className="text-xl font-semibold mb-2 dark:text-white line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
            {post.body}
          </p>
        </article>
      </div>
    </Link>
  );
}