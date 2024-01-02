'use client';

import { ReactNode, useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './styles.css';

interface ModalProps {
  children: ReactNode;
  isActive: boolean;
  onClose: () => void;
}

export default function Modal({ children, isActive, onClose }: ModalProps) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const nodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }

  return createPortal(
    <CSSTransition
      in={isActive}
      nodeRef={nodeRef}
      timeout={300}
      classNames="modal"
      unmountOnExit
    >
      <div
        ref={nodeRef}
        className="fixed z-50 left-0 right-0 top-0 bottom-0 flex justify-center items-center p-[40px] bg-bgBackdrop shadow-xl overflow-y-auto"
        onClick={onClose}
      >
        <div
          className="modal-content m-auto p-[16px] bg-bgBody rounded-[40px]"
          onClick={(event) => event.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </CSSTransition>,
    document.getElementById('modal') as HTMLElement
  );
}
