import Header from "./components/Header";
import SettingsPanel from "./components/SettingsPanel";
import PreviewCard from "./components/PreviewCard";
import { useSettings } from "./context/SettingsContext";

function App() {
  const { theme } = useSettings();

  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <Header />
      <SettingsPanel />
      <PreviewCard />
    </div>
  );
}

export default App;
