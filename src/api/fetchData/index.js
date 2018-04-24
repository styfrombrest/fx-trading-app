// MOCK
import data from './mock.json';

const valueUpgrade = value => {
  // detect floating part of number. In case of INT it will be 3 numbers after point
  const accuracy =
    String(value).indexOf('.') >= 0 ? String(value).split('.')[1].length : 3;
  const offset = value * Math.random() * 0.1;
  return +(value + (Math.random() < 0.5 ? offset : -1 * offset)).toFixed(
    accuracy
  );
};

export default async () =>
  new Promise((resolve, reject) => {
    try {
      // upgrading MOCK's buy & sell values
      resolve(
        data.map(item => ({
          ...item,
          buy: valueUpgrade(item.buy),
          sell: valueUpgrade(item.buy),
        }))
      );
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
