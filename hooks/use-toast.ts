import * as React from 'react';

type Toast = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  open?: boolean;
};

type ToastAction = {
  type: 'ADD_TOAST' | 'UPDATE_TOAST' | 'DISMISS_TOAST' | 'REMOVE_TOAST';
  toast?: Toast;
  toastId?: string;
};

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000;

const listeners = new Set<(state: { toasts: Toast[] }) => void>();
let memoryState: { toasts: Toast[] } = { toasts: [] };

function dispatch(action: ToastAction) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => listener(memoryState));
}

function reducer(state: { toasts: Toast[] }, action: ToastAction) {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [action.toast!, ...state.toasts].slice(0, TOAST_LIMIT),
      };
    case 'UPDATE_TOAST':
      return {
        ...state,
        toasts: state.toasts.map((toast) =>
          toast.id === action.toast?.id ? { ...toast, ...action.toast } : toast,
        ),
      };
    case 'DISMISS_TOAST': {
      const toastId = action.toastId;
      if (toastId) {
        return {
          ...state,
          toasts: state.toasts.filter((toast) => toast.id !== toastId),
        };
      }
      return {
        ...state,
        toasts: state.toasts.map((toast) => ({ ...toast, open: false })),
      };
    }
    case 'REMOVE_TOAST':
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.id !== action.toast?.id),
      };
    default:
      return state;
  }
}

export function useToast() {
  const [state, setState] = React.useState(memoryState);

  React.useEffect(() => {
    listeners.add(setState);
    return () => {
      listeners.delete(setState);
    };
  }, []);

  return {
    toast: (toast: Toast) => {
      const id = toast.id || `${Date.now()}-${Math.random()}`;
      dispatch({ type: 'ADD_TOAST', toast: { ...toast, id, open: true } });
      return id;
    },
    dismiss: (toastId?: string) => {
      dispatch({ type: 'DISMISS_TOAST', toastId });
    },
    toasts: state.toasts,
  };
}
