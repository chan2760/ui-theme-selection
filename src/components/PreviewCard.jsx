import { useSettings } from "../context/SettingsContext";

export default function PreviewCard() {
  const { theme, language } = useSettings();

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <p>Current Language: {language}</p>
      <p>
        {language === "en"
          ? "This is your preference preview."
          : "นี่คือหน้าตัวอย่างการตั้งค่า"}
      </p>
    </div>
  );
}
 