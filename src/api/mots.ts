export interface RandomWordResponse {
  name: string;
  categorie: string;
}

export const fetchRandomWord = async (): Promise<RandomWordResponse[]> => {
  const response = await fetch('https://trouve-mot.fr/api/random');

  if (!response.ok) {
    throw new Error('Erreur lors de la récupération du mot');
  }

  const data = await response.json();
  return data;
};