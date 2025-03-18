import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Force scrollbar to always be visible to prevent layout shift
document.documentElement.style.setProperty('overflow-y', 'scroll');

createRoot(document.getElementById("root")!).render(<App />);
