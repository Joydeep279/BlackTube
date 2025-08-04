import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/LiveChatStore";
import LiveChatLayout from "./LiveChatLayout";
const LiveChatContainer = () => {
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
    <div className="w-[30rem] h-[500px] bg-slate-50 mt-2 rounded-xl px-2 py-2 flex gap-2 flex-col-reverse overflow-y-scroll">
        {
            liveChat.map((items)=><LiveChatLayout data={items}/>)
        }
    </div>
  );
};

export default LiveChatContainer;
