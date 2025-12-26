import { NativeModules } from "react-native";

const { ToastModule } = NativeModules;

export const showToast = (message: string) => {
  ToastModule.showToast(message);
};
