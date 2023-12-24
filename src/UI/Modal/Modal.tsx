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
        className="fixed left-0 right-0 top-0 bottom-0 bg-bgBackdrop shadow-xl"
        onClick={onClose}
      >
        <div
          className="modal-content fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full bg-bgBody p-[16px] rounded-[40px]"
          onClick={(event) => event.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </CSSTransition>,
    document.getElementById('modal') as HTMLElement
  );
}
