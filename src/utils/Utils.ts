export const phraseToCharArray = (phrase: string): string[][] => {
  return phrase.split(' ').map(mot => mot.split(''));
}

export const isLetter = (key: string) => {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return letters.includes(key)
}