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
                                        reply: "i replied to this comment",
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
    reply: "i replied to this comment",
  },
  {
    name: "SKULL",
    url: "https://avatars.githubusercontent.com/u/109482893?v=4",
    msg: "This is my first commment",
    reply: "i replied to this comment",
  },
  {
    name: "SKULL",
    url: "https://avatars.githubusercontent.com/u/109482893?v=4",
    msg: "This is my first commment",
    reply: "i replied to this comment",
  },
  {
    name: "SKULL",
    url: "https://avatars.githubusercontent.com/u/109482893?v=4",
    msg: "This is my first commment",
    reply: "i replied to this comment",
  },
  {
    name: "SKULL",
    url: "https://avatars.githubusercontent.com/u/109482893?v=4",
    msg: "This is my first commment",
    reply: "i replied to this comment",
  },
  {
    name: "SKULL",
    url: "https://avatars.githubusercontent.com/u/109482893?v=4",
    msg: "This is my first commment",
    reply: "i replied to this comment",
  },
  {
    name: "SKULL",
    url: "https://avatars.githubusercontent.com/u/109482893?v=4",
    msg: "This is my first commment",
    reply: "i replied to this comment",
  },
];
const CommentLayout = ({ data }) => {
  const { name, url, msg, reply } = data;
  return (
    <div>
      <div>
        <img src={url} alt="profile-pic" />
        <span>{name}</span>
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
        {commentData.map((items) => (
          <CommentLayout data={items} />
        ))}
      </div>
    </div>
  );
};

export default Comment;
