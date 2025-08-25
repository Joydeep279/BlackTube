import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/LiveChatStore";
import LiveChatLayout from "./LiveChatLayout";

const LiveChatContainer = () => {
  const [typedMsg, setTypedMsg] = useState("");
  const liveChat = useSelector((store) => store.liveChat.data);
  const dispatch = useDispatch();
  const pollIntervalRef = useRef(null);
  async function pollLiveChatApi() {
    const apiData = await fetch("https://dummyjson.com/quotes/random");
    const data = await apiData.json();
    dispatch(addChat({ id: data.id, name: data.author, msg: data.quote }));
  }
  useEffect(() => {
    pollIntervalRef.current = setInterval(() => {
      pollLiveChatApi();
    }, 5000);

    return () => {
      clearInterval(pollIntervalRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col px-2 lg:px-2">
      <div className="w-full h-[300px] lg:h-[450px] bg-slate-50 mt-2 rounded-xl px-2 py-2 flex gap-2 flex-col-reverse overflow-y-auto shadow-md">
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
          placeholder="Enter the Text"
          type="text"
          className="w-3/4 px-2 sm:px-5 py-0.5 text-sm outline-blue-400 rounded-l-xl outline-1 bg-gray-100 border shadow"
          value={typedMsg}
          onChange={(e) => setTypedMsg(e.target.value)}></input>
        <button
          className="w-1/4 h-8 bg-black border-r rounded-l border-white text-white text-xs sm:text-sm font-mono font-medium hover:bg-gray-800"
          onClick={() => {
            if (typedMsg !== "") {
              dispatch(addChat({ id: -1, name: "Joydeep", msg: typedMsg }));
              setTypedMsg("");
            }
          }}>
          SEND
        </button>
        <button
          className="w-1/4 h-8 rounded-r bg-black text-white text-xs sm:text-sm font-mono font-medium hover:bg-gray-800"
          onClick={() => {
            clearInterval(pollIntervalRef.current);
          }}>
          STOP
        </button>
      </form>
    </div>
  );
};

export default LiveChatContainer;
