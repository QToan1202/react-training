import { ToastPosition } from 'react-toastify';

const toastConfig = (toastId: string, position: ToastPosition) => {
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
