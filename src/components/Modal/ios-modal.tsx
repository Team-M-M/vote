import React, { useEffect, useRef } from 'react';

export function IosModal() {
  return <></>;
}
interface ModalHookProps {
  backRef?: HTMLElement;
  backId?: string;
  topMargin?: number;
}

const useModal = ({ backRef, backId, topMargin }: ModalHookProps) => {
  // backRef 혹은 backId 가 둘 중에 하나만 있어야만 작동 가능.
  if (!backId && !backRef) {throw new Error('No Dom Selected');}
  if (backId && backRef) {throw new Error('Two Dom Received');}

  const MARGIN = topMargin || 50;

  let $back: HTMLElement | null;
  if (backRef) {$back = backRef;}

  const $modal = useRef<HTMLDivElement>(document.createElement('div'));
  const $drag = useRef<HTMLDivElement>(document.createElement('div'));

  useEffect(() => {
    backId && ($back = document.getElementById(backId));
    if (!$back || !$modal.current || !$drag.current) {return;}

    let touchStartTime: Date, touchEndTime: Date;
    let touchStartPoint = 0,
      touchEndPoint = 0;

    const onTouchStart = (e: TouchEvent) => {
      touchStartTime = new Date();
      touchStartPoint = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!$back || !$modal || !$drag.current) {return;}

      const position = e.touches[0].clientY;
      const modalHeight = $back.offsetHeight - position;

      $back.style.touchAction = 'none';
      $back.style.overflowY = 'none';
      // (현재 스크롤 위치 / 클라이언트 높이) * 0.2
      $back.style.transform = `scale(${0.95 + (position / $back.scrollHeight) * 0.05})`;

      if ($modal.current.style.transition) {$modal.current.style.transition = 'all 0s ease';}
      $modal.current.style.transform = `translate3D(0px, ${position || 0}px, 0)`;
      $modal.current.style.height = `${modalHeight}px`;

      e.preventDefault();
      // e.stopPropagation();
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!$back || !$modal || !$drag.current) {return;}
      touchEndTime = new Date();
      touchEndPoint = e.changedTouches[0].clientY;

      if (e.changedTouches[0].clientY < MARGIN) {
        const modalHeight = $back.offsetHeight - MARGIN;
        $modal.current.style.transform = `translate3D(0px, ${MARGIN}px, 0)`;
        $modal.current.style.height = `${modalHeight}px`;
        return;
      }

      if (!touchEndTime || !touchStartTime) {return;}

      const timeInterval = Number(touchEndTime) - Number(touchStartTime);
      const velocity = (touchEndPoint - touchStartPoint) / timeInterval;

      if (velocity > 2) {return closeModal();}

      if (e.changedTouches[0].clientY / $modal.current.clientHeight > 0.7) {return closeModal();}
      else {return openModal();}
    };

    $drag.current.addEventListener('touchstart', onTouchStart);
    $drag.current.addEventListener('touchmove', onTouchMove);
    $drag.current.addEventListener('touchend', onTouchEnd);

    return () => {
      $drag.current?.removeEventListener('touchstart', onTouchStart);
      $drag.current?.removeEventListener('touchmove', onTouchMove);
      $drag.current?.removeEventListener('touchend', onTouchEnd);
    };
  }, [$drag.current, $modal.current]);

  const closeModal = () => {
    backId && ($back = document.getElementById(backId));
    if (!$back || !$modal.current) {return;}

    $modal.current.style.transform = `translate3D(0px, 120%, 0)`;
    $modal.current.style.transition = `all 0.3s linear`;
    $modal.current.style.height = '';

    $back.style.transform = `scale(1)`;
    $back.style.borderRadius = '';
    $back.style.opacity = '';
  };

  const openModal = () => {
    console.log('openModal');
    backId && ($back = document.getElementById(backId));
    if (!$back || !$modal.current) {return;}

    const modalHeight = $back.offsetHeight - MARGIN;

    $modal.current.style.height = `${modalHeight}px`;
    $modal.current.style.transform = `translate(0px, ${MARGIN}px)`;
    $modal.current.style.transition = `all 0.2s linear`;

    $back.style.transition = `all 0.35s linear`;
    $back.style.transform = `scale(0.95)`;
    $back.style.borderRadius = '1rem';
    $back.style.opacity = '0.8';
  };

  // const ModalComponent = useCallback(({modalChildren, title = '모달창'} : {modalChildren: ReactNode, title?: string}) => {
  //       console.log('ModalComponent')
  //       console.log($drag)
  //     return (
  //       <Modal.Container modalDiv={$modal}>
  //         <Modal.DragHeader ref={$drag}>
  //           <Modal.HeaderLeft className="invisible">...</Modal.HeaderLeft>
  //           <Modal.HeaderCenter>{title}</Modal.HeaderCenter>
  //           <Modal.HeaderRight onClose={() => closeModal()}>Done</Modal.HeaderRight>
  //         </Modal.DragHeader>

  //         <Modal.Body>{modalChildren}</Modal.Body>
  //       </Modal.Container>
  //     );
  //   },
  //   [backRef, backId],
  // );

  return { /* ModalComponent, */ openModal, closeModal };
};

export default useModal;
