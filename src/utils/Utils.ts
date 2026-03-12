export const phraseToCharArray = (phrase?: string): string[][] | undefined => {
  return phrase?.split(' ').map(mot => mot.split(''));
}

export const isLetter = (key: string) => {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return letters.includes(key)
}

export const removeAccents = (str?: string): string | undefined => {
  return str?.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};