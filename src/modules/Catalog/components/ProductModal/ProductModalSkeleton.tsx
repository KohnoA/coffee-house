export default function ProductModalSkeleton() {
  return (
    <section className="flex items-start gap-[20px]">
      <div className="animate-pulse shrink-0 w-[310px] h-[310px] bg-borderLight rounded-[40px] md:hidden" />

      <div>
        <div className="animate-pulse w-[40%] h-[30px] mb-[20px] bg-borderLight rounded-[20px]" />

        <div className="mb-[20px]">
          <div className="animate-pulse max-w-[90%] min-h-[18px] mb-[9px] bg-borderLight rounded-xl" />
          <div className="animate-pulse max-w-[75%] min-h-[18px] bg-borderLight rounded-xl" />
        </div>

        <div className="animate-pulse max-w-[20%] min-h-[18px] mb-[12px] bg-borderLight rounded-xl" />

        <div className="flex flex-wrap gap-[15px] mb-[20px]">
          <div className="animate-pulse w-[116px] min-h-[46px] bg-borderLight rounded-[100px]" />
          <div className="animate-pulse w-[116px] min-h-[46px] bg-borderLight rounded-[100px]" />
          <div className="animate-pulse w-[116px] min-h-[46px] bg-borderLight rounded-[100px]" />
        </div>

        <div className="animate-pulse max-w-[20%] min-h-[18px] mb-[12px] bg-borderLight rounded-xl" />

        <div className="flex flex-wrap gap-[15px] mb-[25px]">
          <div className="animate-pulse w-[116px] min-h-[46px] bg-borderLight rounded-[100px]" />
          <div className="animate-pulse w-[116px] min-h-[46px] bg-borderLight rounded-[100px]" />
          <div className="animate-pulse w-[116px] min-h-[46px] bg-borderLight rounded-[100px]" />
        </div>

        <div className="flex justify-between mb-[20px]">
          <div className="animate-pulse w-[20%] h3030px] bg-borderLight rounded-[20px]" />
          <div className="animate-pulse w-[20%] h-[30px] bg-borderLight rounded-[20px]" />
        </div>

        <div className="animate-pulse h-[2px] mb-[15px] bg-borderLight" />

        <div className="mb-[30px]">
          <div className="animate-pulse max-w-[97%] min-h-[8px] mb-[9px] bg-borderLight rounded-xl" />
          <div className="animate-pulse max-w-[90%] min-h-[8px] bg-borderLight rounded-xl" />
        </div>

        <div className="animate-pulse h-[44px] bg-borderLight rounded-[100px]" />
      </div>
    </section>
  );
}
