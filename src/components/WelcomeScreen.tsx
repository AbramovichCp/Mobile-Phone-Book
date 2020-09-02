import React, {useEffect, useState} from 'react';
import Contacts from 'react-native-contacts';
import AsyncStorage from '@react-native-community/async-storage';
import {
  check,
  request,
  PERMISSIONS,
  RESULTS,
  Permission,
} from 'react-native-permissions';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Platform,
  Alert,
  Linking,
  Dimensions,
  Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Container from './Container';
import ContactsIcon from '../assets/ContactsIcon';
import {Colors} from '../utils/helper';
import PhoneIcon from '../assets/PhoneIcon';

declare const global: {HermesInternal: null | {}};
const SCREEN_WIDTH = Dimensions.get('window').width;
const svgProportion = 1.32

type PermissionStatus = 'unavailable' | 'denied' | 'blocked' | 'granted' | '';

const WelcomeScreen = () => {
  const [contacts, setContacts] = useState<Array<any>>([]);
  const [redirect, setRedirect] = useState<Boolean>(false);
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [permissionStatus, setPermissionStatus] = useState<PermissionStatus>(
    '',
  );

  const PLATFORM_PERMISSION: Permission =
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.CONTACTS
      : PERMISSIONS.ANDROID.READ_CONTACTS;

  useEffect(() => {
    checkPermission();
  }, []);

  useEffect(() => {
    if (redirect) {
      Actions.replace('contacts', {contacts});
    }
  }, [redirect]);

  const getContacts = () => {
    Contacts.getAll((err, contacts) => {
      if (err === 'denied') {
        throw new Error(err);
      } else {
        setContacts(contacts);
        setRedirect(true);
      }
    });
  };
  const checkPermission = () => {
    check(PLATFORM_PERMISSION)
      .then((result: PermissionStatus) => {
        setPermissionStatus(result);
        switch (result) {
          case RESULTS.GRANTED:
            getContacts();
            break;
          case RESULTS.DENIED:
          case RESULTS.UNAVAILABLE:
          case RESULTS.BLOCKED:
            setLoading(false);
          default:
            break;
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const requestPermission = () => {
    switch (permissionStatus) {
      case RESULTS.UNAVAILABLE:
        Alert.alert(
          'This feature is not available (on this device / in this context)',
        );
        break;
      case RESULTS.DENIED:
        request(PLATFORM_PERMISSION);
      case RESULTS.BLOCKED:
        Linking.openURL('app-settings:');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {isLoading ? <View style={styles.loadingScreenWrapper}>
          <PhoneIcon size={150} color={Colors.blue}/>
          </View> : (
          <Container styles={styles.container}>
            <Text style={styles.mainText}>Provide access to your contacts</Text>
            <Image source={require('../assets/Contacts.png')} style={styles.image}/>
            <TouchableOpacity style={styles.button} onPress={requestPermission}>
              <Text style={styles.buttonText}>Accept</Text>
            </TouchableOpacity>
            <View></View>
          </Container>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  loadingScreenWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    paddingTop: 24,
    justifyContent: 'space-between',
  },
  image: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH/svgProportion,
  },
  mainText: {
    fontWeight: '700',
    fontSize: 36,
    lineHeight: 50,
    color: '#555',
    textAlign: 'center',
  },
  button: {
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    height: 60,
    color: Colors.white,
    borderRadius: 20,
    width: '70%',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: '700',
  },
});

export default WelcomeScreen;
