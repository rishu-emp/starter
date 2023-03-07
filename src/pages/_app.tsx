import '@styles/globals.scss';
import type { AppProps } from 'next/app';
import { AppState, wrapper } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux';
import Navigation from '@components/Navigation/Navigation.component';

function App({ Component, pageProps }: AppProps): JSX.Element {
  const store: AppState = useStore();
  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <Navigation />
      <Component {...pageProps} />
    </PersistGate>
  );
}

export default wrapper.withRedux(App);
