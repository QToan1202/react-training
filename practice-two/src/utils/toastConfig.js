const toastConfig = (toastId, position) => {
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
