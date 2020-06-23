function add(...nums: number[]): number {
  return nums.reduce((total: number, num: number) => total + num, 0);
}

function multiply(...nums: number[]): number {
  return nums.reduce((total: number, num: number) => total * num, 1);
}

function factorial(num: number): number {
  return num ? num * factorial(num - 1) : 1;
}

function average(...nums: number[]): number {
  const total = nums.reduce((t: number, num: number) => t + num);
  return total / nums.length;
}

export { add, multiply, factorial, average };
