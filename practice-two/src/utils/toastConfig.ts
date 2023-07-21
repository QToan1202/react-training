import { ToastPosition } from 'react-toastify';
import { ToastProps } from 'react-toastify/dist/types';

const toastConfig = (toastId: string, position: ToastPosition): Partial<ToastProps> => {
  return {
    toastId, // Prevent duplicate toast
    position,
    closeButton: false,
    closeOnClick: true,
    pauseOnHover: false,
    pauseOnFocusLoss: false,
  }
}

export default toastConfig
