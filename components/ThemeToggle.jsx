import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div 
        style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(40, 36, 96, 0.08)' }} 
        className={className} 
      />
    );
  }

  const isLight = theme === 'light';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isLight ? "Switch to Dark Theme" : "Switch to Light Theme"}
      title={isLight ? "Switch to Dark Theme" : "Switch to Light Theme"}
      className={`theme-toggle-btn ${className}`}
      style={{
        width: '38px',
        height: '38px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        border: '1px solid var(--border-color)',
        background: 'var(--toggle-bg)',
        color: 'var(--toggle-color)',
        transition: 'all 0.25s ease',
        padding: 0
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.06)';
        e.currentTarget.style.borderColor = '#2c73d9';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.borderColor = 'var(--border-color)';
      }}
    >
      {isLight ? (
        <Moon size={18} strokeWidth={2} />
      ) : (
        <Sun size={18} strokeWidth={2} />
      )}
    </button>
  );
}
