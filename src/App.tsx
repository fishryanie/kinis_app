import React from 'react';
import codePush, {CodePushOptions} from 'react-native-code-push';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaView} from 'react-native';
import {persistor, store} from 'stores';
import {Provider} from 'react-redux';
import Routes from 'routes';

const queryClient = new QueryClient();

// const codePushOptions: CodePushOptions = {
//   checkFrequency: codePush.CheckFrequency.MANUAL,
// };

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <PersistGate persistor={persistor} loading={null}>
            <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
              <Routes />
            </SafeAreaView>
          </PersistGate>
        </SafeAreaProvider>
      </QueryClientProvider>
    </Provider>
  );
};

// export default codePush(codePushOptions)(App);
export default App
