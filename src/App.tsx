import './App.css'
import {useState} from "react";
import ZonePendu from "./components/ZonePendu.tsx";
import ZoneEnigme from "./components/ZoneEnigme.tsx";
import ZoneProposition from "./components/ZoneProposition.tsx";
import {isLetter} from "./utils/Utils.ts";

const mots = 'manger un sandwitch';

function App() {

  // La proposition courante du joueur
  const [guess, setGuess] = useState<string | null>(null);
  // la liste des propostions effectuées par le joueur
  const [guesses, setGuesses] = useState<string[]>([]);
  console.log({guesses})
  // le nombre de propositions faites par le joueurs qui ne font pas parti de phraseToCharArray(mots)
  const [errors, setErrors] = useState<number>(0);

  const handleGuessValidate = (e: React.KeyboardEvent<HTMLInputElement>) => {
      console.log({e})
      if (!isLetter(e.key) && e.code !== 'Enter') {
          return
      }

    if ( isLetter(e.key) && e.code !== 'Enter'  ) {
      setGuess(e.key);
    }

      if ( e.code === 'Enter' && guess && !guesses.includes(guess)  ) {
        console.log('dans le if enter')
        setGuesses([...guesses, guess]);
        setGuess(null);
      }
  }

  return (
      <div className="playground">
          <ZonePendu />
          <ZoneEnigme mots={mots} guesses={guesses} guess={guess}/>
          <ZoneProposition guess={guess} handleGuessValidate={handleGuessValidate}/>
      </div>
  )
}

export default App
