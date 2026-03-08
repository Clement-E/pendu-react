import './App.css'
import {useState} from "react";

const isLetter = (key: string) => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return letters.includes(key)
}
const mots = 'manger un sandwitch';

function App() {

    const phraseToCharArray = (phrase: string): string[][] => {
        return phrase.split(' ').map(mot => mot.split(''));
    }
    console.log(phraseToCharArray(mots))

    const [guess, setGuess] = useState(null);
    const [isGuessFocused, setIsGuessFocused] = useState(false);
    const toggleFocus = () => {
        setIsGuessFocused(!isGuessFocused);
    }
    const handleGuessClick = () => {
        toggleFocus();
    }
    const handleGuessValidate = (e: any) => {
        console.log(e)
        if (e.code === 'Enter') {
            console.log('to check');
            setGuess(null)
        }
        else if (isLetter(e.key)) {
            setGuess(e.key)
        }
    }

  return (
      <div className="playground">
          <div className="penduZone"></div>
          <div className="summary">
              {phraseToCharArray(mots).map((mot, index) => (
                  <div className="mot" key={index}>
                      {mot.map((letter, i) => (
                          <div className="letter" key={i}>{letter}</div>
                      ))}
                  </div>
                  )
              )}
          </div>
          <div
              className="guessZone"
          >
              <input
                  className={ isGuessFocused ? "playerGuess focused" : "playerGuess"}
                  value={guess ?? '_'}
                  onFocus={toggleFocus}
                  onBlur={toggleFocus}
                  onClick={handleGuessClick}
                  onKeyDown={e => handleGuessValidate(e)}
              />
          </div>
      </div>
  )
}

export default App
