import cn from 'classnames';
import React, { FC } from 'react';
import { useInterval } from 'react-use';

import { DEFAULT_DISSMISS_DURATION, TOAST_POSITIONS } from './constants';
import { Toast } from './toast';

export type Props = {
  position: TOAST_POSITIONS;
  children: React.ReactElement<typeof Toast>[];
  className?: string;
  removeLastOnTimer?: () => void;
};

export const ToastContainer: FC<Props> = ({
  position,
  children,
  className,
  removeLastOnTimer,
}) => {
  useInterval(
    () => removeLastOnTimer?.(),
    removeLastOnTimer ? DEFAULT_DISSMISS_DURATION : null
  );

  return (
    <div
      className={cn(
        className ? className : 'm-3',
        {
          'top-0 left-0': position === TOAST_POSITIONS.TOP_LEFT,
          'top-0 left-1/2 translate-x-[-50%]':
            position === TOAST_POSITIONS.TOP_CENTER,
          'top-0 right-0': position === TOAST_POSITIONS.TOP_RIGHT,
          'bottom-0 left-0': position === TOAST_POSITIONS.BOTTOM_LEFT,
          'bottom-0 left-1/2 translate-x-[-50%]':
            position === TOAST_POSITIONS.BOTTOM_CENTER,
          'bottom-0 right-0': position === TOAST_POSITIONS.BOTTOM_RIGHT,
        },
        'absolute'
      )}
    >
      {children}
    </div>
  );
};
