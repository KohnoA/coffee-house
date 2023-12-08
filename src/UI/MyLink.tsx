import { ComponentProps, ElementType, ReactNode } from 'react';
import Link from 'next/link';

type MyLinkOwnProps<E extends ElementType = ElementType> = {
  className?: string;
  view?: MY_LINK_VIEW;
  children: ReactNode;
  href: string;
  as?: E;
  isActive?: boolean;
};

type MyLinkProps<E extends ElementType> = MyLinkOwnProps<E> &
  Omit<ComponentProps<E>, keyof MyLinkOwnProps>;

const DEFAULT_ELEMENT = Link;

export const enum MY_LINK_VIEW {
  DARK = 'dark',
  LIGHT = 'light',
}

export default function MyLink<E extends ElementType = typeof DEFAULT_ELEMENT>({
  className,
  view = MY_LINK_VIEW.DARK,
  href,
  children,
  as,
  isActive,
  ...otherProps
}: MyLinkProps<E>) {
  const Element = as || DEFAULT_ELEMENT;

  return (
    <Element
      href={href}
      {...otherProps}
      className={`relative flex gap-1 items-center py-1.5 transition-opacity group active:opacity-75 ${
        isActive ? 'pointer-events-none' : ''
      } ${className ?? ''}`}
    >
      {children}
      <span
        className={`absolute left-0 bottom-0 w-0 h-[3px] ${
          view === MY_LINK_VIEW.DARK ? 'bg-textDark' : 'bg-textLight'
        } transition-all group-hover:w-full ${isActive ? 'w-full' : ''}`}
      />
    </Element>
  );
}
