export const fromBase64 = (value) => {
  let buff = Buffer.from(value, 'base64');
  return buff.toString('ascii');
};
