
import CryptoJS from 'crypto-js'

// https://blog.csdn.net/qq_41619796/article/details/123000333
/**
 * AES encrypy
 * @param word: text to be encrypted
 * KEY: // Need to be consistent between front and back end
 * mode: ECB // Need to be consistent between front and back end
 * pad: Pkcs7 //Front-end Pkcs7 corresponds to back-end Pkcs5
 */
const KEY = CryptoJS.enc.Utf8.parse('d7b85f6e214abcde')

export const AES_Encrypt = (plaintext) => {
  let ciphertext = CryptoJS.AES.encrypt(plaintext, KEY, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString()
  return ciphertext
}

/**
 * AES decrypy
 * @param jsonStr
 */
export const AES_Decrypt = (jsonStr) => {
  let plaintext = CryptoJS.AES.decrypt(jsonStr, KEY, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString(CryptoJS.enc.Utf8)

  return plaintext
}