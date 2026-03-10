import {useState} from "react";

interface ZonePropositionProps {
  guess: string | null;
  handleGuessValidate: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
const ZoneProposition = ({guess, handleGuessValidate}: ZonePropositionProps) => {

  const [isGuessFocused, setIsGuessFocused] = useState(false);

  const toggleFocus = () => {
    setIsGuessFocused(!isGuessFocused);
  }

  const handleGuessClick = () => {
    toggleFocus();
  }

  return (
    <div
      className="guessZone"
    >
      <input
        className={ isGuessFocused ? "playerGuess focused" : "playerGuess"}
        value={guess ? guess.toUpperCase() : ''}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        onClick={handleGuessClick}
        onKeyDown={e => handleGuessValidate(e)}
      />
    </div>
  )
}

export default ZoneProposition;