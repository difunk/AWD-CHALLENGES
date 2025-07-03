export function isPalindrome(word: string): boolean {
  // alternativ: return word === word.split('').reverse().join('');
  const length = word.length;
  for (let i = 0; i < length / 2; i++){
    if (word[i] !== word[length - 1 - i]){
       return false;
    }
  }

  return true;
}