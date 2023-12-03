import { ReactNode, ComponentProps, ElementType } from 'react';

export const enum BUTTON_VIEW {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type ButtonOwnProps<E extends ElementType = ElementType> = {
  className?: string;
  children: ReactNode;
  view?: BUTTON_VIEW;
  as?: E;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const DEFAULT_ELEMENT = 'button';

export default function Button<E extends ElementType = typeof DEFAULT_ELEMENT>({
  className,
  children,
  view = BUTTON_VIEW.SECONDARY,
  as,
  ...otherProps
}: ButtonProps<E>) {
  const Element = as || DEFAULT_ELEMENT;

  return (
    <Element
      {...otherProps}
      className={`${
        view === BUTTON_VIEW.PRIMARY
          ? 'py-[20px] px-[78px] bg-bgBody text-textDark'
          : 'py-[10px] px-[77.5px] text-textDark border-2 border-borderDark bg-transparent transition-colors hover:text-textLight hover:bg-bgContainer active:bg-textDark active:border-textDark'
      } inline-block rounded-full ${className ?? ''}`}
    >
      {children}
    </Element>
  );
}
