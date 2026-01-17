import { useSettings } from "../context/SettingsContext";

export default function Header() {
  const { language } = useSettings();

  return (
    <h1>
      {language === "en" ? "Welcome" : "ยินดีต้อนรับ"}
    </h1>
  );
}
