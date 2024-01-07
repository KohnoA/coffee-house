export default function ProductCardSkeleton() {
  return (
    <li className="rounded-[40px] overflow-hidden bg-bgBody border-[1px] border-borderLight">
      <div className="animate-pulse min-h-[308px] bg-borderLight" />

      <div className=" flex flex-col gap-[24px] p-[20px]">
        <div className="animate-pulse max-w-[60%] min-h-[30px] bg-borderLight rounded-[20px]" />

        <div>
          <div className="animate-pulse max-w-[90%] min-h-[18px] mb-[9px] bg-borderLight rounded-xl" />
          <div className="animate-pulse max-w-[75%] min-h-[18px] bg-borderLight rounded-xl" />
        </div>

        <div className="animate-pulse max-w-[100px] min-h-[30px] bg-borderLight rounded-[20px]" />
      </div>
    </li>
  );
}
