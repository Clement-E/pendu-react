import {phraseToCharArray} from "../utils/Utils.ts";

interface ZoneEnigmeProps {
  mots: string;
  guesses: string[];
  guess: string | null;
}

const ZoneEnigme = ({mots, guesses} : ZoneEnigmeProps) => {
const motsArray = phraseToCharArray(mots);

  return (
    <div className="summary">
      {motsArray.map((mot, i) => (
            <div className="mot" key={i}>
              {mot.map((letter, j) => {
                const isGuessed = guesses.includes(letter);
                return (
                  <div className={isGuessed ? "letter" : "unknown"} key={j}>{isGuessed ? letter : ""}</div>
                )
              })}
            </div>
          )
      )}
    </div>
  )

}

export default ZoneEnigme;