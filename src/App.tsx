/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Routes from 'routes';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from 'stores';
import {Provider} from 'react-redux';

const queryClient = new QueryClient();

// const codePushOptions: CodePushOptions = {
//   checkFrequency: codePush.CheckFrequency.MANUAL,
// };

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <QueryClientProvider client={queryClient}>
          <GestureHandlerRootView style={{flex: 1}}>
            <SafeAreaProvider>
              <Routes />
            </SafeAreaProvider>
          </GestureHandlerRootView>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

// export default codePush(codePushOptions)(App);
export default App;
