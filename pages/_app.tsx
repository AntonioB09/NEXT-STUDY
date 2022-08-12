import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { ApplitationContainer} from '../components/ApplitationContainer';
import { RouterTransition } from '../components/RouterTransition';
export default function App({ Component, pageProps }) {
 

  return (
    <>
      <Head>
        <title>VACUCAB</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
      theme={{ primaryShade: { light: 7, dark: 9 } }}
      withGlobalStyles
      withNormalizeCSS
      >
         <RouterTransition />
        <ApplitationContainer>
        <Component {...pageProps} />
        </ApplitationContainer>

      </MantineProvider>
    </>
  );
}