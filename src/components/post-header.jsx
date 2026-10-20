export default function PostHeader({ username, userAvatar = "https://picsum.photos/id/237/100/100" }) {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center space-x-3">
        <img
          src={userAvatar}
          alt={username}
          className="w-8 h-8 rounded-full object-cover border border-gray-300"
        />
        <span className="text-sm font-semibold text-gray-900">{username}</span>
      </div>
    </div>
  );
}