import React from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import './app/i18n';
import {AppNavigator} from './app/routes/AppNavigator';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          {/* <ErrorBoundary catchErrors={Config.catchErrors}> */}
          <AppNavigator />
          {/* </ErrorBoundary> */}
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
};
export default App;
