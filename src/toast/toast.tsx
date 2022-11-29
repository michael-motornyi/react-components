import { XCircleIcon } from '@heroicons/react/24/solid';
import cn from 'classnames';
import React, { FC } from 'react';

export type Props = {
  children?: React.ReactNode;
  className?: string;
  onDissmissClick?: () => void | undefined;
  color?: string;
};

export const Toast: FC<Props> = ({ children, className, onDissmissClick }) => {
  return (
    <div className="relative animate-in fade-in">
      <div
        className={cn(
          className
            ? className
            : 'min-w-[16rem] rounded-md border bg-red-400 p-6 text-sm text-white',
          'pr-10'
        )}
      >
        {children}
      </div>
      <button className="cursor-pointer" onClick={onDissmissClick}>
        <XCircleIcon className="absolute top-0 right-0 m-2 h-5 w-5 text-white" />
      </button>
    </div>
  );
};
