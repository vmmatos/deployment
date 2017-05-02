/* ENCRYPTION functions */

'use strict';

import { encode, decode } from 'react-native-simple-encryption';

export function encrypt(obj) {

  // encode('key','data_to_be_encrypt'); 
  return encode('key123', obj);

}

export function encrypted(obj) {
  
  // decode('key','encrypted_data'); 
  return decode('key123', obj);

}