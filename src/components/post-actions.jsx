import { Bookmark, Heart } from 'lucide-react';

export default function PostActions({ post, onBookmark, onLike }) {
  return (
    <div className="px-4 py-3">
      <div className="flex items-center justify-between">
        <button
          onClick={() => onLike(post.id)}
          className="focus:outline-none transition transform active:scale-125"
        >
          <Heart
            className={`w-7 h-7 ${post.isLiked ? 'fill-current text-red-600' : 'text-gray-800'}`}
          />
        </button>

        <button
          onClick={() => onBookmark(post.id)}
          className="focus:outline-none transition transform active:scale-125 text-gray-800 hover:text-gray-500"
        >
          {post.isSaved ? (
            <Bookmark className="w-7 h-7 text-gray-900 fill-current" />
          ) : (
            <Bookmark className="w-7 h-7" />
          )}
        </button>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">{post.like} Like</span>
      </div>
    </div>
  );
}