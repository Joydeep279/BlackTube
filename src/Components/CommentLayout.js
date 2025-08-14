const CommentLayout = ({ info }) => {
  const { authorProfileImageUrl, textDisplay, authorDisplayName, likeCount } =
    info.snippet.topLevelComment.snippet;
  return (
    <div className="w-1/2 h-24 rounded-lg">
      <div className="flex items-start gap-2">
        <img
          src={authorProfileImageUrl}
          alt="profile-pic"
          className="w-5 h-5 rounded-full"
        />
        <span className="text-xs font-sans font-medium text-black">
          {authorDisplayName}
        </span>
      </div>
      <span className="text-slate-800 font-sans text-sm overflow-hidden font-medium">
        {textDisplay}
      </span>
      <div className="mt-2.5 flex gap-5 items-center">
        <div className="flex gap-2.5 items-center text-gray-600 text-sm">
          <img
            src="https://cdn-icons-png.flaticon.com/512/159/159766.png"
            alt="Like-BTN"
            className="h-4 w-4 cursor-pointer"
          />
          <span className="font-medium text-black text-sm">{likeCount}</span>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/159/159775.png"
            alt="Like-BTN"
            className="h-4 w-4 cursor-pointer"
          />
        </div>
        <div className="font-medium text-sm">reply</div>
      </div>
    </div>
  );
};
export default CommentLayout;
