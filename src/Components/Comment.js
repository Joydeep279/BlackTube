const commentData = [
  {
    name: "Joydeep",
    msg: "This is my youtube Comment!",
    reply: [
      {
        name: "Joydeep",
        msg: "This is my youtube Comment!",
        reply: [],
      },
      {
        name: "Joydeep",
        msg: "This is my youtube Comment!",
        reply: [],
      },
      {
        name: "Joydeep",
        msg: "This is my youtube Comment!",
        reply: [],
      },
    ],
  },
  {
    name: "Joydeep",
    msg: "This is my youtube Comment!",
    reply: [
      {
        name: "Joydeep",
        msg: "This is my youtube Comment!",
        reply: [],
      },
      {
        name: "Joydeep",
        msg: "This is my youtube Comment!",
        reply: [],
      },
      {
        name: "Joydeep",
        msg: "This is my youtube Comment!",
        reply: [
          {
            name: "Joydeep",
            msg: "This is my youtube Comment!",
            reply: [],
          },
        ],
      },
    ],
  },
  {
    name: "Joydeep",
    msg: "This is my youtube Comment!",
    reply: [
      {
        name: "Joydeep",
        msg: "This is my youtube Comment!",
        reply: [],
      },
      {
        name: "Joydeep",
        msg: "This is my youtube Comment!",
        reply: [
          {
            name: "Joydeep",
            msg: "This is my youtube Comment!",
            reply: [],
          },
        ],
      },
      {
        name: "Joydeep",
        msg: "This is my youtube Comment!",
        reply: [],
      },
    ],
  },
  {
    name: "Joydeep",
    msg: "This is my youtube Comment!",
    reply: [
      {
        name: "Joydeep",
        msg: "This is my youtube Comment!",
        reply: [],
      },
      {
        name: "Joydeep",
        msg: "This is my youtube Comment!",
        reply: [],
      },
      {
        name: "Joydeep",
        msg: "This is my youtube Comment!",
        reply: [],
      },
    ],
  },
];
const CommentLayout = ({ data }) => {
  if (Object.keys(data).length === 0) {
    return;
  }
  const { name, msg } = data;
  return (
    <div className="bg-slate-50">
      <div className="flex items-center gap-2">
        <img
          src="https://avatar.iran.liara.run/public/boy"
          alt="profile-pic"
          className="w-7 h-7 rounded-full"
        />
        <span className="text-base font-sans font-medium">{name}</span>
      </div>
      <span className="pl-10">{msg}</span>
    </div>
  );
};

const Comment = () => {
  return (
    <div className="px-16 w-1/2">
      <h1 className="font-bold text-xl">Comment</h1>
      <div>
        {commentData.map((items, index) => (
          <CommentLayout data={items} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Comment;
