import { Meta, Story } from '@storybook/react';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';

import { TOAST_POSITIONS } from '../../src/toast/constants';
import { Props as ToastProps, Toast } from '../../src/toast/toast';
import { ToastContainer } from '../../src/toast/toast-container';

const meta: Meta = {
  title: 'Toast',
  component: Toast,

  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ToastProps> = () => {
  const [toasts, setToasts] = useState<{ text: string; id: string }[]>([]);

  const addToast = (text: string) => {
    setToasts([...toasts, { text, id: nanoid() }]);
  };

  const removeToast = (id: string) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <>
      <button
        className="rounded-md border px-3 py-1 text-sm hover:bg-neutral-100"
        onClick={() => addToast('Hello')}
      >
        Add toast
      </button>
      <ToastContainer
        position={TOAST_POSITIONS.BOTTOM_RIGHT}
        removeLastOnTimer={
          toasts.length ? () => setToasts(toasts.slice(1)) : undefined
        }
      >
        {toasts.map((toast) => (
          <Toast key={toast.id} onDissmissClick={() => removeToast(toast.id)}>
            {toast.text}
          </Toast>
        ))}
      </ToastContainer>
    </>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
