import './App.css'
import {useState} from "react";
import PenduArea from "./components/PenduArea.tsx";
import ZoneEnigme from "./components/EnigmeArea.tsx";
import PropositionArea from "./components/PropositionArea.tsx";
import {isLetter, phraseToCharArray, removeAccents} from "./utils/Utils.ts";
import {useQuery} from "@tanstack/react-query";
import {fetchRandomWord, RandomWordResponse} from "./api/mots.ts";

function App() {

  // La proposition courante du joueur
  const [guess, setGuess] = useState<string | null>(null);
  // la liste des propostions effectuées par le joueur
  const [guesses, setGuesses] = useState<string[]>([]);
  // le nombre de propositions faites par le joueurs qui ne font pas parti de phraseToCharArray(mots)
  const [errors, setErrors] = useState<string[]>([]);
  console.log("%c 1 --> Line: 18||App.tsx\n errors: ","color:#f0f;", errors);

  const { data } = useQuery<RandomWordResponse[], Error>({
    queryKey: ['motWord'],
    queryFn: fetchRandomWord,
  });

  const mots = removeAccents(data?.[0].name);
  const motsFlat = new Set(phraseToCharArray(mots)?.flatMap(mot => mot));
  const isGameOver = errors.length > 8;
  console.log("%c 2 --> Line: 28||App.tsx\n isLost: ","color:#0f0;", isGameOver);

  const reset = () => {
    console.log('todo');
  }

  const handleGuessValidate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const ENTER_KEY = 'Enter';
    const isEnter = e.code === ENTER_KEY;
    const isLetterKey = isLetter(e.key);

    if (!isLetterKey && !isEnter) {
      return;
    }

    if (isLetterKey) {
      setGuess(e.key);
      return;
    }

    if (!isEnter || !guess) {
      return;
    }

    if (guesses.includes(guess)) {
      return;
    }

    if (motsFlat.has(guess)) {
      setGuesses([...guesses, guess]);
    } else {
      setErrors([...errors, guess]);
    }

    setGuess(null);
  };

  return (
      <div className="playground">
          <PenduArea errors={errors}/>
          <ZoneEnigme mots={mots} guesses={guesses} guess={guess}/>
          <PropositionArea
            guess={guess}
            handleGuessValidate={handleGuessValidate}
            isGameOver={isGameOver}
            reset={reset}
          />
      </div>
  )
}

export default App
