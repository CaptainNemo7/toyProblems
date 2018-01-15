// Given a number, return that number in Roman Numeral format
const intToRoman = (int) => {
  let result = '';
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romans = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

  for ( let i=0; i<nums.length; i++ ) {
    while ( int % nums[i] < int ) {
      result += romans[i];
      int -= nums[i];
    }
  }
  return result;
}