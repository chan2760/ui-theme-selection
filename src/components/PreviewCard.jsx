import { useSettings } from "../context/SettingsContext";

const PreviewCard = () => {
  const { theme, language } = useSettings();

  return (
    <div>
      <h3>Preview</h3>
      <p>Current Theme: {theme}</p>
      <p>Current Language: {language}</p>
      <p>
        {language === "en"
          ? "This is your preference preview."
          : "นี่คือหน้าตัวอย่างการตั้งค่า"}
      </p>
    </div>
  );
};

export default PreviewCard;
