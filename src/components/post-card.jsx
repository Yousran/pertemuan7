import PostHeader from './post-header';
import PostActions from './post-actions';

export default function PostCard({ post, onBookmark, onLike }) {
  return (
    <article className="bg-white border border-gray-200 rounded-lg shadow-sm">
      <PostHeader username={post.username} userAvatar={post.userAvatar} />
      
      <div className="w-full bg-black flex items-center justify-center overflow-hidden">
        <img
          src={post.postImage}
          alt="Post content"
          className="w-full h-auto object-cover max-h-125"
        />
      </div>
      <PostActions post={post} onBookmark={onBookmark} onLike={onLike} />

      <div className="px-4 text-sm text-gray-800 pb-4">
        <span className="font-semibold mr-2">{post.username}</span>
        {post.caption}
      </div>
    </article>
  );
}