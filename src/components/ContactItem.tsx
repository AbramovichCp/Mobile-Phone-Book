import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';

import {toHex, nameToInitials, Colors, IContact} from '../utils/helper';
import ArrowsIcon from '../assets/ArrowsIcon';

const ContactItem = ({contact} : {contact: IContact}) => {
  const name = `${contact.givenName} ${contact.familyName}`;
  return (
    <View style={styles.item}>
      <View style={styles.wrapper}>
        <Avatar src={contact.thumbnailPath} name={name} />
        <View style={styles.infoBlock}>
          <Text numberOfLines={1} style={styles.contactName}>{name}</Text>
          <Text numberOfLines={1} style={styles.phoneNumber}> {contact.phoneNumbers[0].number}</Text>
        </View>
      </View>
      <ArrowsIcon size={16}/>
    </View>
  );
};

type IAvatarProps = {
  src?: string;
  name: string;
};

const Avatar = ({src, name}: IAvatarProps): any => {
  if (src) {
    return <Image source={{uri: src}} style={styles.avatar} />;
  } else if (name) {
    const initials = nameToInitials(name)
    return (
      <View style={[styles.avatar, {backgroundColor: toHex(name)}]}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  item: {
    height: 80,
    backgroundColor: Colors.backgroundGray,
    marginVertical: 2,
    borderRadius: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoBlock: {
    marginLeft: 12,
    justifyContent: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: '700',
  },
  contactName: {
    fontSize: 18,
    width: Dimensions.get('screen').width*0.5,
    overflow: 'hidden',
    fontWeight: '700',
  },
  phoneNumber: {
    marginTop: 5,
    fontSize: 14,
    color: Colors.gray,
  },
});

export default ContactItem;
