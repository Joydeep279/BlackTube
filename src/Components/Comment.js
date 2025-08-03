const commentData = [
  {
    name: "SKULL",
    url: "https://avatars.githubusercontent.com/u/109482893?v=4",
    msg: "This is my first commment",
    reply: [
      {
        name: "SKULL",
        url: "https://avatars.githubusercontent.com/u/109482893?v=4",
        msg: "This is my first commment",
        reply: [
          {
            name: "SKULL",
            url: "https://avatars.githubusercontent.com/u/109482893?v=4",
            msg: "This is my first commment",
            reply: [
              {
                name: "SKULL",
                url: "https://avatars.githubusercontent.com/u/109482893?v=4",
                msg: "This is my first commment",
                reply: [
                  {
                    name: "SKULL",
                    url: "https://avatars.githubusercontent.com/u/109482893?v=4",
                    msg: "This is my first commment",
                    reply: [
                      {
                        name: "SKULL",
                        url: "https://avatars.githubusercontent.com/u/109482893?v=4",
                        msg: "This is my first commment",
                        reply: [
                          {
                            name: "SKULL",
                            url: "https://avatars.githubusercontent.com/u/109482893?v=4",
                            msg: "This is my first commment",
                            reply: [
                              {
                                name: "SKULL",
                                url: "https://avatars.githubusercontent.com/u/109482893?v=4",
                                msg: "This is my first commment",
                                reply: [
                                  {
                                    name: "SKULL",
                                    url: "https://avatars.githubusercontent.com/u/109482893?v=4",
                                    msg: "This is my first commment",
                                    reply: [
                                      {
                                        name: "SKULL",
                                        url: "https://avatars.githubusercontent.com/u/109482893?v=4",
                                        msg: "This is my first commment",
                                        reply: [
                                          
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "SKULL",
    url: "https://avatars.githubusercontent.com/u/109482893?v=4",
    msg: "This is my first commment",
    reply: [
      
    ],
  },
  {
    name: "SKULL",
    url: "https://avatars.githubusercontent.com/u/109482893?v=4",
    msg: "This is my first commment",
    reply: [
      
    ],
  },
  {
    name: "SKULL",
    url: "https://avatars.githubusercontent.com/u/109482893?v=4",
    msg: "This is my first commment",
    reply: [
      
    ],
  },
  {
    name: "SKULL",
    url: "https://avatars.githubusercontent.com/u/109482893?v=4",
    msg: "This is my first commment",
    reply: [
      
    ],
  },
  {
    name: "SKULL",
    url: "https://avatars.githubusercontent.com/u/109482893?v=4",
    msg: "This is my first commment",
    reply: [
      
    ],
  },
  {
    name: "SKULL",
    url: "https://avatars.githubusercontent.com/u/109482893?v=4",
    msg: "This is my first commment",
    reply: [
      
    ],
  },
  {
    name: "SKULL",
    url: "https://avatars.githubusercontent.com/u/109482893?v=4",
    msg: "This is my first commment",
    reply: [
      
    ],
  },
];
const CommentLayout = ({ data }) => {
  console.log(data);
  const { name, url, msg, reply } = data;
  return (
    <div className="bg-slate-50">
      <div className="flex items-center gap-2">
        <img src={url} alt="profile-pic" className="w-8 h-8 rounded-full" />
        <span className="text-base font-sans font-medium">{name}</span>
      </div>
      <span>{msg}</span>
      <CommentLayout data={reply} />
    </div>
  );
};

const Comment = () => {
  return (
    <div className="px-10">
      <h1 className="font-bold text-xl">Comment</h1>
      <div>
        {/* {commentData.map((items) => (
          <CommentLayout data={items} />
        ))} */
          
        }
        {/* <CommentLayout data={commentData[0]}/> */}
      </div>
    </div>
  );
};

export default Comment;
