import React, { useState } from 'react';

const ThemeSelectorComponent: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>('light');

  const changeTheme = (theme: string) => {
    setSelectedTheme(theme);
  };

  return (
    <div>
      <h2>Theme Selector</h2>
      <select value={selectedTheme} onChange={(e) => changeTheme(e.target.value)}>
        <option value="light">Light Theme</option>
        <option value="dark">Dark Theme</option>
      </select>
    </div>
  );
};

export default ThemeSelectorComponent;