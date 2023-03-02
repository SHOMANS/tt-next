import Header from '@/components/Header';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <footer style={{ marginTop: 20 }}>copyright for GSG-TT8 &copy;</footer>
    </>
  );
}
