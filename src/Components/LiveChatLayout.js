const LiveChatLayout = (props) => {
    console.log(props);
    const { name, msg, id }=props.data
  return (
    <div className="flex flex-row justify-start items-start gap-2" key={id}>
      <img
        src={`https://avatar.iran.liara.run/public?v=`+id}
        alt="profile-pic"
        className="w-7 h-7 rounded-full"
      />
      <div>
        <span className="font-sans font-medium pr-2 text-gray-500 text-sm">{name}</span>
        <span className="font-medium text-sm">{msg}</span>
      </div>
    </div>
  );
};

export default LiveChatLayout;
