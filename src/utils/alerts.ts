import { ToastOptions } from "react-toastify";

export const successOptions: ToastOptions<{}> = {
  position: "top-center",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const errorOptions: ToastOptions<{}> = {
  position: "top-center",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const loadingOptions: ToastOptions<{}> = {
  position: "top-center",
  isLoading: false,
  autoClose: 1500,
  closeButton: true,
};

export const warningOptions: ToastOptions<{}> = {
  position: "top-center",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};
