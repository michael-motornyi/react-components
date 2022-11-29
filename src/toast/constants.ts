export enum TOAST_POSITIONS {
  TOP_LEFT = 'top-left',
  TOP_CENTER = 'top-center',
  TOP_RIGHT = 'top-right',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_CENTER = 'bottom-center',
  BOTTOM_RIGHT = 'bottom-right',
}

export const DEFAULT_DISSMISS_DURATION = 3000;

export const ANIMATION_DURATION = 50;

export const ANIMATIONS = {
  [TOAST_POSITIONS.TOP_LEFT]: {
    IN: 'fade-in-0 slide-in-from-left',
    OUT: 'fade-out-0 slide-out-to-left',
  },
  [TOAST_POSITIONS.TOP_CENTER]: {
    IN: 'fade-in-0 slide-in-from-top',
    OUT: 'fade-out-0 slide-out-to-top',
  },
  [TOAST_POSITIONS.TOP_RIGHT]: {
    IN: 'fade-in-0 slide-in-from-right',
    OUT: 'fade-out-0 slide-out-to-right',
  },
  [TOAST_POSITIONS.BOTTOM_LEFT]: {
    IN: 'fade-in-0 slide-in-from-left',
    OUT: 'fade-out-0 slide-out-to-left',
  },
  [TOAST_POSITIONS.BOTTOM_CENTER]: {
    IN: 'fade-in-0 slide-in-from-bottom',
    OUT: 'fade-out-0 slide-out-to-bottom',
  },
  [TOAST_POSITIONS.BOTTOM_RIGHT]: {
    IN: 'fade-in-0 slide-in-from-right',
    OUT: 'fade-out-0 slide-out-to-right',
  },
};
