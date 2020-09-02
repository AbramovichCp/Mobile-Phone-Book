import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import {Platform} from 'react-native';

import WelcomeScreen from './components/WelcomeScreen';
import ContactList from './components/ContactList';
import NewContactScreen from './components/NewContactScreen';

const isAndroid = Platform.OS === 'android';

const App = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="home" hideNavBar component={WelcomeScreen} initial />
        <Scene
          key="contacts"
          hideNavBar={isAndroid}
          hideBackImage
          component={ContactList}
          title="Contacts"
        />
        <Scene
          key="addContact"
          component={NewContactScreen}
          title="Add Contacts"
          hideNavBar
        />
      </Stack>
    </Router>
  );
};

export default App;
