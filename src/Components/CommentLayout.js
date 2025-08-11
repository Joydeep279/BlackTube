const CommentLayout = ({ info }) => {
  const { authorProfileImageUrl, textDisplay, authorDisplayName, likeCount } =
    info.snippet.topLevelComment.snippet;
  return (
    <div className="w-1/2 h-24 rounded-lg">
      <div className="flex items-start gap-2">
        <img
          src={authorProfileImageUrl}
          alt="profile-pic"
          className="w-7 h-7 rounded-full"
        />
        <span className="text-base font-sans font-medium">
          {authorDisplayName}
        </span>
      </div>
      <span className="pl-10 text-gray-800 font-sans font-normal">
        {textDisplay}
      </span>
      <div className="ml-10 mt-2.5 flex gap-5 items-center">
        <div className="flex gap-2.5 items-center text-gray-600 text-sm">
          <img
            src="https://cdn-icons-png.flaticon.com/512/159/159766.png"
            alt="Like-BTN"
            className="h-4 w-4 cursor-pointer"
          />
          <span>{likeCount}</span>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/159/159775.png"
            alt="Like-BTN"
            className="h-4 w-4 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
export default CommentLayout;
