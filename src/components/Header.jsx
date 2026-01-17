import { useSettings } from "../context/SettingsContext";

const Header = () => {
  const { language } = useSettings();

  return (
    <h1>
      {language === "en" ? "Welcome" : "ยินดีต้อนรับ"}
    </h1>
  );
};

export default Header;
