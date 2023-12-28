import { ReactNode } from 'react';
import Button from '@/UI/Button';

interface ItemProps {
  icon?: ReactNode;
  label: string;
  value: string;
  isActive: boolean;
  onClick: (value: string) => void;
}

export default function Item(props: ItemProps) {
  const { value, label, icon, isActive, onClick } = props;

  return (
    <li>
      <Button
        onClick={() => onClick(value)}
        className={`group flex items-center gap-[8px] py-[8px] pl-[8px] pr-[16px] border-borderLight hover:bg-textAccent hover:border-textAccent ${
          isActive
            ? 'text-textLight !bg-bgContainer !border-bgContainer active:!bg-textDark active:!border-textDark'
            : ''
        }`}
      >
        {icon && (
          <span
            className={`flex justify-center items-center w-[30px] h-[30px] p-[5px] rounded-full text-textDark transition-colors bg-borderLight group-hover:bg-bgBody ${
              isActive ? '!bg-bgBody' : ''
            }`}
          >
            {icon}
          </span>
        )}{' '}
        {label}
      </Button>
    </li>
  );
}
