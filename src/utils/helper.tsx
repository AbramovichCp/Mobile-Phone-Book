export const CONTACT_PERMISSION_GRANTED = 'CONTACT_PERMISSION_GRANTED'

export const toHex = (string: string) : string => {
  let hash = 0;
    if (string.length === 0) return '#666';
    for (let i = 0; i < string.length; i++) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
    }
    let color = '#';
    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 255;
        color += ('00' + value.toString(16)).substr(-2);
    }
    return color;
}

export const nameToInitials = ( name: string ): string => {
  return name
  .split(' ')
  .map((word) => word.substr(0, 1))
  .join('')
  .substr(0, 2);
}

export const Colors = {
  white: '#fff',
  black: '#000',
  darkGray: '#555',
  lightGray: '#c9c9c9',
  lightBlue: '#9EBAE3',
  blue: '#008ae6',
  lightGreen: '#B8DFAF',
  backgroundGray: '#f8f8f8',
  gray: '#777'
}

let id : string | number
type IdType =  typeof id


export type IContact = {
  company?: string;
  department: string;
  displayName: string;
  emailAddresses: Array<string>;
  familyName: string;
  givenName: string;
  hasThumbnail: boolean;
  imAddresse: Array<IImAddresse>;
  jobTitle: string;
  middleName: string;
  note: string;
  phoneNumbers: Array<IPhoneNumber>;
  postallAddresses: Array<IPostalAddress>;
  prefix?: string;
  rawContactId: string;
  recordID: string;
  suffix?: string;
  thumbnailPath: string;
  urlAddresses: Array<IUrlAddress>; 
}

export type IPhoneNumber = {
  id?: IdType;
  label: string;
  number: string;
}

export type IUrlAddress = {
  label: string;
  user: string;
}

export type IPostalAddress = {
  label: string;
  formattedAddress: string;
  street: string;
  pobox: string;
  neighborhood: string;
  city: string;
  region: string;
  state: string;
  postCode: string;
  country: string;
}

export type IEmailAddresses = {
  email: string;
  id?: IdType;
  label: string;
}
export type IImAddresse = {
  username: string;
  service: string;
}

export type ISVGIconProps = {
  size?: number;
  color?: string;
};



