import { Bookmark, Heart } from 'lucide-react';
import PostHeader from './post-header';

export default function PostCard({post}){
    return (
        <article key={post.id} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <PostHeader post={post}/>
                
                <div className="w-full bg-black flex items-center justify-center overflow-hidden">
                <img
                    src={post.postImage}
                    alt="Post content"
                    className="w-full h-auto object-cover max-h-125"
                />
                </div>

                <div className="px-4 py-3">
                <div className="flex items-center justify-between">
                    <button
                    type="button"
                    onClick={() => {post.like++; console.log(post.like)}}
                    className="focus:outline-none transition transform active:scale-125 cursor-pointer"
                    >
                    <Heart className="w-7 h-7 fill-current text-red-600" />
                    </button>

                    <button
                    type="button"
                    onClick={() => {post.isSaved = !post.isSaved; console.log(post.isSaved)}}
                    className="focus:outline-none transition transform active:scale-125 text-gray-800 hover:text-gray-500 cursor-pointer"
                    >
                    {post.isSaved ? (
                        <Bookmark className="w-7 h-7 text-gray-900 fill-current" />
                    ) : (
                        <Bookmark className="w-7 h-7" />
                    )}
                    </button>
                </div>
                <div className="flex items-center justify-between mt-1">
                    <span className="text-sm font-semibold">{post.like} Like</span>
                </div>
                </div>

                <div className="px-4 text-sm text-gray-800 pb-4">
                <span className="font-semibold mr-2">{post.username}</span>
                {post.caption}
                </div>
            </article>
    )
}