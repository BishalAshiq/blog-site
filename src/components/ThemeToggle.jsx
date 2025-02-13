'use client';
import { useTheme } from '@/context/ThemeContext';
import Switch from '@mui/material/Switch';

export default function ThemeToggle() {
  const { isDark, setIsDark } = useTheme();


  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      document.documentElement.classList.toggle('dark', newTheme);
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  return (


    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-200"
    >
      {isDark ? '🌞 ' : '🌙 '}
    </button>
  );
}
