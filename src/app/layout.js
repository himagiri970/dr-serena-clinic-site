import './globals.css';
import Navbar from '../components/navbar';
import Home from './page';
import AboutPage from '../components/about';

export const metadata = {
  title: 'Therapist App',
  description: 'Compassionate therapy for personal growth and well-being',
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
