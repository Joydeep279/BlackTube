import ChipData from "../utils/Chip-Bar-Data";
const ChipBar = () => {
  return (
    <div className="flex flex-row gap-4 px-3.5 items-center border-none sticky top-[52px] pt-1.5 pb-4  backdrop-blur-md bg-white/90 z-0 overflow-x-scroll overflow-auto no-scrollbar">
      {ChipData.map((item) => (
        <button
          key={item.chipCloudChipRenderer.trackingParams}
          className="px-3.5 py-1.5 rounded-lg text-sm font-semibold bg-gray-100 hover:bg-gray-200 
         text-gray-800  
         transition-colors duration-200 focus:bg-black focus:text-white text-nowrap">
          {item.chipCloudChipRenderer.text.runs[0].text}
        </button>
      ))}
    </div>
  );
};

export default ChipBar;
