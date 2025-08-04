import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/LiveChatStore";
import LiveChatLayout from "./LiveChatLayout";

const LiveChatContainer = () => {
  const [typedMsg, setTypedMsg] = useState();
  const liveChat = useSelector((store) => store.liveChat);
  const dispatch = useDispatch();
  async function pollLiveChatApi() {
    const apiData = await fetch("https://dummyjson.com/quotes/random");
    const data = await apiData.json();
    dispatch(addChat({ id: data.id, name: data.author, msg: data.quote }));
  }
  useEffect(() => {
    const pollInterval = setInterval(() => {
      pollLiveChatApi();
    }, 10000);

    return () => {
      clearInterval(pollInterval);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="w-96 h-[500px] bg-slate-50 mt-2 rounded-xl px-2 py-2 flex gap-2 flex-col-reverse overflow-y-scroll shadow-md">
        {liveChat.map((items) => (
          <LiveChatLayout data={items} key={items.id} />
        ))}
      </div>
      <form
        className="h-8 flex justify-end mt-1"
        onSubmit={(e) => {
          e.preventDefault();
          if (typedMsg !== "") {
            dispatch(addChat({ id: -1, name: "Joydeep", msg: typedMsg }));
            setTypedMsg("");
          }
        }}>
        <input
          type="text"
          className="w-4/5 px-5 py-0.5 outline-blue-400 rounded-l-xl outline-1 bg-gray-100 border shadow"
          value={typedMsg}
          onChange={(e) => setTypedMsg(e.target.value)}></input>
        <button
          className="w-1/5 h-8 rounded-r bg-gray-500 text-white font-mono font-medium"
          onClick={() => {
            if (typedMsg !== "") {
              dispatch(addChat({ id: -1, name: "Joydeep", msg: typedMsg }));
              setTypedMsg("");
            }
          }}>
          SEND
        </button>
      </form>
    </div>
  );
};

export default LiveChatContainer;
