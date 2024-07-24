import "./src/styles/global.css";
import { StatusBar } from "expo-status-bar";
import AppProfile from "./src/components/app-profile";

export default function App() {
  return (
    <>
      <AppProfile />
      <StatusBar style="light" />
    </>
  );
}
