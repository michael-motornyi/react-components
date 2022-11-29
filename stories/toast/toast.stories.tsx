import { Meta, Story } from '@storybook/react';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';

import { TOAST_POSITIONS } from '../../src/toast/constants';
import { Props as ToastProps, Toast } from '../../src/toast/toast';
import { ToastContainer } from '../../src/toast/toast-container';

const meta: Meta = {
  title: 'Toast notifications',
  component: Toast,

  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    className: { control: { type: 'text' } },
    children: { control: { type: 'text' } },
  },
};

export default meta;

const Template: Story<ToastProps> = (args) => {
  return (
    <div className="flex justify-center">
      <Toast className={args.className} onDissmissClick={() => {}}>
        {args.children}
      </Toast>
    </div>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const toastItem = Template.bind({});

toastItem.args = {
  children: 'Hello',
};
