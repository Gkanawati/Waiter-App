import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { Loading } from './src/components/Loading';
import { Main } from './src/Main';

export default function App() {
  const [fontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  return (
    <>
      <StatusBar style='dark' />
      {fontsLoaded ? <Main /> : <Loading />}
    </>
  );
}
