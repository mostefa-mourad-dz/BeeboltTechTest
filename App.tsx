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
import {QueryClient, QueryClientProvider} from 'react-query';
import {UserContext, UserProvider} from './app/contexts/UserContext';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <QueryClientProvider client={queryClient}>
          <UserProvider>
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
              {/* <ErrorBoundary catchErrors={Config.catchErrors}> */}
              <UserContext.Consumer>
                {userContext => {
                  if (userContext.initialCheckCompleted) {
                    return <AppNavigator />;
                  } else {
                    return null;
                  }
                }}
              </UserContext.Consumer>
              {/* </ErrorBoundary> */}
            </SafeAreaProvider>
          </UserProvider>
        </QueryClientProvider>
      </ApplicationProvider>
    </>
  );
};
export default App;
