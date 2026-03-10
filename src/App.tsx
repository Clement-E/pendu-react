import './App.css'
import {useState} from "react";
import ZonePendu from "./components/ZonePendu.tsx";
import ZoneEnigme from "./components/ZoneEnigme.tsx";
import ZoneProposition from "./components/ZoneProposition.tsx";
import {isLetter, phraseToCharArray} from "./utils/Utils.ts";

const mots = "voiture de course";
// TODO https://trouve-mot.fr/

function App() {

  // La proposition courante du joueur
  const [guess, setGuess] = useState<string | null>(null);
  console.log({guess})
  // la liste des propostions effectuées par le joueur
  const [guesses, setGuesses] = useState<string[]>([]);
  console.log({guesses})
  // le nombre de propositions faites par le joueurs qui ne font pas parti de phraseToCharArray(mots)
  const [errors, setErrors] = useState<string[]>([]);

  const motsFlat = new Set(phraseToCharArray(mots).flatMap(mot => mot));

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
      if (errors.includes(guess)) {
        return;
      }
      setErrors([...errors, guess]);
    }

    setGuess(null);
  };

  return (
      <div className="playground">
          <ZonePendu errors={errors}/>
          <ZoneEnigme mots={mots} guesses={guesses} guess={guess}/>
          <ZoneProposition guess={guess} handleGuessValidate={handleGuessValidate}/>
      </div>
  )
}

export default App
