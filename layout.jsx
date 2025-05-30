// src/app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'AI Content Assistant',
  description: 'Generate high-quality content with AI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}