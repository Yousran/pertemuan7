import PostCard from "./post-card";
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

export default function InstagramFeed(){
    return (
        <div className="min-h-screen py-8 px-4 flex flex-col items-center bg-linear-to-r from-purple-900 to-pink-900">
        <header className="w-full max-w-md bg-white rounded-lg px-4 py-3 mb-4 shadow-sm">
            <h1 className="font-serif italic text-2xl font-bold tracking-wide">Instakilogram</h1>
        </header>

        <main className="w-full max-w-md space-y-6">
            {initialPosts.map((post) => (
                <PostCard post={post}/>
            ))}
        </main>
        </div>
    )
}