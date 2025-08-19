const CommentLayout = ({ info }) => {
  const { authorProfileImageUrl, textDisplay, authorDisplayName, likeCount } =
    info.snippet.topLevelComment.snippet;
  return (
    <div className="w-full sm:w-3/4 lg:w-1/2 h-auto rounded-lg">
      <div className="flex items-start gap-2">
        <img
          src={authorProfileImageUrl}
          alt="profile-pic"
          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full"
        />
        <span className="text-xs sm:text-sm font-sans font-medium text-black">
          {authorDisplayName}
        </span>
      </div>
      <span className="text-slate-800 font-sans text-xs sm:text-sm overflow-hidden font-medium pl-7 sm:pl-10">
        {textDisplay}
      </span>
      <div className="mt-2 sm:mt-2.5 flex gap-3 sm:gap-5 items-center pl-7 sm:pl-10">
        <div className="flex gap-2 sm:gap-2.5 items-center text-gray-600">
          <img
            src="https://cdn-icons-png.flaticon.com/512/159/159766.png"
            alt="Like-BTN"
            className="h-3 w-3 sm:h-4 sm:w-4 cursor-pointer"
          />
          <span className="font-medium text-black text-xs sm:text-sm">{likeCount}</span>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/159/159775.png"
            alt="Like-BTN"
            className="h-3 w-3 sm:h-4 sm:w-4 cursor-pointer"
          />
        </div>
        <div className="font-medium text-xs sm:text-sm">reply</div>
      </div>
    </div>
  );
};
export default CommentLayout;
