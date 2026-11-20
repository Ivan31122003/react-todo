import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import classes from './styles.module.scss';

export const Modal = ({ children, ...props}) => {
  useEffect(() => {
    if (!props.visible) {
      return;
    } 
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prev;
    };
  }, [props.visible]);

  return props.visible && createPortal(
    <div className={classes.modalWrapper}>
      <div className={classes.modalContent}>
        <header className={classes.modalContent__header}>
          <span className={classes.modalContent__title}>{props.title}</span>
          <span onClick={props.toggleVisibility}>Крестик</span>
        </header>
        {children}
      </div>
    </div>,
    document.body
  );
}