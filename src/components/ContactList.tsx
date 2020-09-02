import React, {useState, ReactElement} from 'react';
import Swipeable from 'react-native-swipeable';
import call from 'react-native-phone-call';
import {Actions} from 'react-native-router-flux';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Platform,
  TextInput,
} from 'react-native';
import ContactItem from './ContactItem';
import PhoneIcon from '../assets/PhoneIcon';
import PlusIcon from '../assets/PlusIcon';

import {Colors, IContact} from '../utils/helper';

const isAndroid: boolean = Platform.OS === 'android';

const ContactList = ({contacts}: {contacts: Array<IContact>}): ReactElement => {
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
  const [searchString, setSearchString] = useState<string>('');

  const search = (contact: IContact): boolean => {
    const fullName = ` ${contact.displayName} ${contact.familyName} ${contact.givenName} ${contact.middleName}`;
    return fullName.includes(searchString) ? true : false;
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        {isAndroid && <Title />}
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder={'Input contact name'}
            onChangeText={(text) => setSearchString(text)}
          />
        </View>
        <ScrollView scrollEnabled={!isSwiping}>
          {contacts.filter(search).map((contact: IContact, index: number) => (
            <Swipeable
              rightButtons={[PhoneButton(contact.phoneNumbers[0].number)]}
              onSwipeStart={() => setIsSwiping(true)}
              onSwipeEnd={() => setIsSwiping(false)}
              rightButtonWidth={90}
              leftButtonWidth={150}
              key={index}>
              <ContactItem contact={contact} />
            </Swipeable>
          ))}
        </ScrollView>
        <TouchableOpacity onPress={() => Actions.push('addContact')}>
          <View style={styles.addContact}>
            <PlusIcon size={24} />
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const Title = () => (
  <View style={styles.titleWrapper}>
    <Text style={styles.title}>Contacts</Text>
  </View>
);

const PhoneButton = (phoneNumber: string): ReactElement => (
  <TouchableOpacity
    onPress={() => {
      call({number: phoneNumber}).catch(console.error);
    }}>
    <View style={[styles.button, styles.phoneButton]}>
      <PhoneIcon />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  titleWrapper: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    height: 50,
    borderColor: Colors.white,
  },
  inputWrapper: {
    borderColor: Colors.lightGray,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderTopWidth: isAndroid ? 1 : 0,
  },
  button: {
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  phoneButton: {
    backgroundColor: Colors.lightGreen,
  },
  addContact: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    borderRadius: 30,
    bottom: 30,
    right: 30,
    backgroundColor: Colors.lightBlue,
  },
  title: {
    fontWeight: '700',
    fontSize: 22,
  },
  container: {
    paddingTop: 24,
    justifyContent: 'space-between',
  },
  mainText: {
    fontWeight: '700',
    fontSize: 36,
    lineHeight: 50,
    color: Colors.darkGray,
    textAlign: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: '700',
  },
});

export default ContactList;
