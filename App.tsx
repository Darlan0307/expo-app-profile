import "./src/styles/global.css";
import { StatusBar } from "expo-status-bar";
import AppProfile from "./src/components/app-profile";
import { ToastProvider } from "./src/components/Toast";

export default function App() {
  return (
    <ToastProvider position="top">
      <AppProfile />
      <StatusBar style="light" />
    </ToastProvider>
  );
}
