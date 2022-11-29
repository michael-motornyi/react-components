import { XCircleIcon } from '@heroicons/react/24/solid';
import cn from 'classnames';
import React, { FC } from 'react';

export type Props = {
  children?: React.ReactNode;
  className?: string;
  dissmissButtonclassName?: string;
  onDissmissClick?: () => void | undefined;
};

export const Toast: FC<Props> = ({
  children,
  className = 'rounded-md border bg-red-400 p-6 text-sm text-white',
  dissmissButtonclassName = 'absolute top-0 right-0 m-2 h-5 w-5 text-white',
  onDissmissClick,
}) => {
  return (
    <div className="relative animate-in fade-in">
      <div className={cn(className, 'min-w-[16rem] pr-10')}>{children}</div>
      <button className="cursor-pointer" onClick={onDissmissClick}>
        <XCircleIcon className={dissmissButtonclassName} />
      </button>
    </div>
  );
};
