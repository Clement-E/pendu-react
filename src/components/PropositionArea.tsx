import {useState} from "react";

interface PropositionAreaProps {
  guess: string | null;
  handleGuessValidate: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  isGameOver: boolean;
  reset: () => void
}
const PropositionArea = ({
  guess,
  handleGuessValidate,
  isGameOver,
  reset
}: PropositionAreaProps) => {

  const [isGuessFocused, setIsGuessFocused] = useState(false);

  const toggleFocus = () => {
    setIsGuessFocused(!isGuessFocused);
  }

  const handleGuessClick = () => {
    toggleFocus();
  }

  const handleReplay = () => {
    reset()
  }

  return (
    <div
      className="guessZone"
    >
      {isGameOver ? (
        <div className="replay" onClick={handleReplay}>Rejouer</div>
      ) : (
        <input
          className={isGuessFocused ? "playerGuess focused" : "playerGuess"}
          value={guess ? guess.toUpperCase() : ''}
          onFocus={toggleFocus}
          onBlur={toggleFocus}
          onClick={handleGuessClick}
          onKeyDown={e => handleGuessValidate(e)}
          disabled={isGameOver}
        />
      )}
    </div>
  )
}

export default PropositionArea;