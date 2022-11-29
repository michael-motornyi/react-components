import { Meta, Story } from '@storybook/react';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';

import { TOAST_POSITIONS } from '../../src/toast/constants';
import { Toast } from '../../src/toast/toast';
import {
  Props as ToastContaineProps,
  ToastContainer,
} from '../../src/toast/toast-container';

const meta: Meta = {
  title: 'Toast notifications',
  component: ToastContainer,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    position: {
      options: [
        TOAST_POSITIONS.TOP_LEFT,
        TOAST_POSITIONS.TOP_CENTER,
        TOAST_POSITIONS.TOP_RIGHT,
        TOAST_POSITIONS.BOTTOM_LEFT,
        TOAST_POSITIONS.BOTTOM_CENTER,
        TOAST_POSITIONS.BOTTOM_RIGHT,
      ],
      control: { type: 'select' },
    },
    autoDismiss: { time: { control: { type: 'number' } } },
  },
};

export default meta;

const Template: Story<ToastContaineProps> = (args) => {
  const [toasts, setToasts] = useState<{ text: string; id: string }[]>([]);

  const addToast = (text: string) => {
    setToasts([...toasts, { text, id: nanoid() }]);
  };

  const removeToast = (id: string) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <button
          className="rounded-md border px-3 py-1 text-sm hover:bg-neutral-100"
          onClick={() => addToast('Hello')}
        >
          Add toast
        </button>
      </div>

      <ToastContainer
        position={args.position}
        autoDismiss={{
          setToasts,
          time: args.autoDismiss?.time || 0,
        }}
      >
        {toasts.map((toast) => (
          <Toast key={toast.id} onDissmissClick={() => removeToast(toast.id)}>
            <h1 className="text-xl">{toast.text}</h1>
          </Toast>
        ))}
      </ToastContainer>
    </>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const toastContainer = Template.bind({});

toastContainer.args = {
  position: TOAST_POSITIONS.TOP_RIGHT,
  autoDismiss: { time: 3000 },
};
