function hasher(value: string, encrypt: boolean): string {
  const key = "secretKey"; // Replace with your own secret key
  let result = "";

  if (encrypt) {
    // Encrypt the value
    for (let i = 0; i < value.length; i++) {
      const charCode = value.charCodeAt(i) ^ key.charCodeAt(i % key.length);
      result += String.fromCharCode(charCode);
    }
  } else {
    // Decrypt the value
    for (let i = 0; i < value.length; i++) {
      const charCode = value.charCodeAt(i) ^ key.charCodeAt(i % key.length);
      result += String.fromCharCode(charCode);
    }
  }

  return result;
}
export default hasher;
