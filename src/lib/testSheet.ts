const value: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type A = {
  first: string;
  second: string;
  third: string;
};
const objectValue: A[] = [
  { first: 'a', second: 'b', third: 'c' },
  { first: 'd', second: 'e', third: 'f' },
  { first: 'g', second: 'h', third: 'i' },
];

export async function getData() {
  return await value;
}

export async function getDataTime() {
  const result: number[] = [];
  setInterval(() => {
    result.push(Math.floor(Math.random() * 9 + 1));
  }, 1000);
  if (result.length > 10) {
    clearInterval();
  }
  return result;
}
