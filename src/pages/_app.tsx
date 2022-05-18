import { AppProps } from 'next/app';

import '@/assets/styles/global.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
