import { Bookmark, Heart } from 'lucide-react';

const initialPosts = [
    {
        id: 1,
        username: 'fajrin',
        userAvatar: 'https://picsum.photos/id/1025/100/100',
        postImage: 'https://picsum.photos/id/180/600/600',
        caption: 'Ngoding ditemani secangkir kopi. ☕',
        like: 1908,
        isLiked: false,
        isSaved: true,
    },
    {
      id: 2,
      username: 'fakhira',
      userAvatar: 'https://picsum.photos/id/64/100/100',
      postImage: 'https://picsum.photos/id/1015/600/600',
      caption: 'Live streaming session hari ini! 🎮🔥',
      like: 1243,
      isLiked: false,
      isSaved: false,
  },
];

export default function App() {
  return (
  <div className="min-h-screen">
    {/* START Instagram Feed */}
    <div className="min-h-screen py-8 px-4 flex flex-col items-center bg-linear-to-r from-purple-900 to-pink-900">
      <header className="w-full max-w-md bg-white rounded-lg px-4 py-3 mb-4 shadow-sm">
        <h1 className="font-serif italic text-2xl font-bold tracking-wide">Instakilogram</h1>
      </header>

      <main className="w-full max-w-md space-y-6">
        {initialPosts.map((post) => (
          // START Post Card
          <article key={post.id} className="bg-white border border-gray-200 rounded-lg shadow-sm">
            {/* START Post Header */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center space-x-3">
                <img
                  src={post.userAvatar}
                  alt={post.username}
                  className="w-8 h-8 rounded-full object-cover border border-gray-300"
                />
                <span className="text-sm font-semibold text-gray-900">{post.username}</span>
              </div>
            </div>
            {/* END Post header */}
            
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
          // END Post Card
        ))}
      </main>
    </div>
    {/* // END Instagram Feed */}
  </div>
  );
}