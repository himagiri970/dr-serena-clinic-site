import './globals.css';
import Navbar from '../components/navbar';
import Home from './page';
import AboutPage from '../components/about';

export const metadata = {
  title: 'My Next.js App',
  description: 'App Router Layout Example',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
