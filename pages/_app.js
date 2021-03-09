import '../scss/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from '../components/navigation';
import axios from 'axios';
import { SWRConfig } from 'swr';

function MyApp({ Component, pageProps }) {
  const fetcher = url => axios.get(url).then(res => res.data);
  return (
    <>
      <Navigation />
      <SWRConfig value={{ fetcher, revalidateOnFocus: false }}>
        <Component {...pageProps} />\
      </SWRConfig>
    </>
  );
}

export default MyApp;
