import { ReactNode, ComponentProps, ElementType } from 'react';

type ButtonOwnProps<E extends ElementType = ElementType> = {
  className?: string;
  children: ReactNode;
  view?: BUTTON_VIEW;
  rounded?: boolean; 
  as?: E;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const DEFAULT_ELEMENT = 'button';

export const enum BUTTON_VIEW {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export default function Button<E extends ElementType = typeof DEFAULT_ELEMENT>({
  className,
  children,
  rounded,
  view = BUTTON_VIEW.SECONDARY,
  as,
  ...otherProps
}: ButtonProps<E>) {
  const Element = as || DEFAULT_ELEMENT;

  return (
    <Element
      {...otherProps}
      className={`transition-all ${
        view === BUTTON_VIEW.PRIMARY
          ? 'py-[20px] px-[78px] bg-bgBody text-textDark hover:bg-[#D3C5B9] active:bg-[#BDB1A7]'
          : `${rounded ? 'p-[18px]' : 'py-[10px] px-[23px]' } text-textDark border-2 border-borderDark bg-transparent hover:text-textLight hover:bg-bgContainer active:bg-textDark active:border-textDark`
      } font-semibold inline-block rounded-full ${className ?? ''}`}
    >
      {children}
    </Element>
  );
}
