const ShopButtons = () => {
  return (
    <div className="py-12 flex sm:flex-row flex-col justify-center items-center gap-[28px]">
      <div className="flex gap-[24px] sm:gap-[28px]">
        <button className="text-lg rounded-md py-[10px] px-[18px] bg-[#B88E2F] text-white cursor-pointer">
          1
        </button>
        <button className="text-lg rounded-md py-[10px] px-[18px] bg-[#F9F1E7] hover:bg-[#e9dbb9e7] text-black cursor-pointer">
          2
        </button>
        <button className="text-lg rounded-md py-[10px] px-[18px] bg-[#F9F1E7] hover:bg-[#e9dbb9e7] text-black cursor-pointer">
          3
        </button>
      </div>
      <button className="text-lg rounded-md py-[10px] px-[18px] bg-[#F9F1E7] hover:bg-[#e9dbb9e7] text-black cursor-pointer">
        Next
      </button>
    </div>
  );
};

export default ShopButtons;
