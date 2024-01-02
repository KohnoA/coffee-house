interface ProductListSkeletonProps {
  amount?: number;
}

const DEFAULT_AMOUNT_OF_ITEMS = 8;

export default function ProductListSkeleton({
  amount = DEFAULT_AMOUNT_OF_ITEMS,
}: ProductListSkeletonProps) {
  return (
    <ul className="grid grid-cols-cards gap-[40px] mb-[100px] max-[768px]:px-[14px] max-sm:px-[19px]">
      {new Array(amount).fill(amount).map((_, index) => (
        <li
          key={index}
          className="rounded-[40px] overflow-hidden bg-bgBody border-[1px] border-borderLight"
        >
          <div className="animate-pulse min-h-[308px] bg-borderLight" />

          <div className=" flex flex-col gap-[18px] p-[20px]">
            <div className="animate-pulse max-w-[60%] min-h-[30px] bg-borderLight rounded-[20px]" />

            <div>
              <div className="animate-pulse max-w-[90%] min-h-[18px] mb-[9px] bg-borderLight rounded-xl" />
              <div className="animate-pulse max-w-[75%] min-h-[18px] bg-borderLight rounded-xl" />
            </div>

            <div className="animate-pulse max-w-[100px] min-h-[30px] bg-borderLight rounded-[20px]" />
          </div>
        </li>
      ))}
    </ul>
  );
}
