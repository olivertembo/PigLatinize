
const letters = (word) =>{
  return word.split('')
}

const startsWithVowel = (word) => {
  const vowelRegex = /^[aeiou]/;
  return vowelRegex.test(word[0]);
}

const pigLatinizeWord = (input) => {
  const chars = letters(input);
  if (startsWithVowel(chars)) {
    return input + '-way';
  }

  return chars.slice(1).join('') + '-' + chars[0] + 'ay';
}

const pigLatinize = (input) => { 
  return input.replace(/\w+/g, pigLatinizeWord);
}


console.log(pigLatinize('pig'));
console.log(pigLatinize('pig latin'));
console.log(pigLatinize('eig latin'));