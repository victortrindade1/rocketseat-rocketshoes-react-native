import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  const tron = Reactotron.configure() // .configure({ host: '192.168.1.7' })
    .use(reactotronRedux())
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear(); // Opcional. Limpa a tela do Reactotron a cada refresh
}
