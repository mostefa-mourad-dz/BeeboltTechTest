import React from 'react';
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context";
import './app/i18n';
import { AppNavigator } from './app/routes/AppNavigator';

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE";

interface AppProps {
  hideSplashScreen: () => Promise<void>
}

const App = (props: AppProps) => {

  const { hideSplashScreen } = props;

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      {/* <ErrorBoundary catchErrors={Config.catchErrors}> */}
        <AppNavigator/>
      {/* </ErrorBoundary> */}
    </SafeAreaProvider>
  );
};
export default App;
