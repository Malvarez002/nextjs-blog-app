import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Provider from './components/provider/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blog Web App',
  description: 'Web application developed with NextJS',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <Provider>
          <div className='container'>
            <div className='wrapper'>
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
