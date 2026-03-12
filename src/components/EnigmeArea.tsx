import {phraseToCharArray} from "../utils/Utils.ts";

interface EnigmeAreaProps {
  mots?: string;
  guesses: string[];
  guess: string | null;
}

const EnigmeArea = ({mots, guesses} : EnigmeAreaProps) => {

  const motsArray = phraseToCharArray(mots);

  return (
    <div className="summary">
      {motsArray?.map((mot, i) => (
            <div className="mot" key={i}>
              {mot.map((letter, j) => {
                const isGuessed = guesses.includes(letter);
                const ponctuation = letter === ("'" || ",");
                const isRevealed = isGuessed || ponctuation;
                return (
                  <div
                      // className={isRevealed? "letter" : "unknown"}
                      key={j}
                  >
                    <div className={isRevealed ? "card revealed" : "card"}>
                      <div className="content">
                        <div className="front">

                        </div>
                        <div className="back">
                          {letter.toUpperCase()}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )
      )}
    </div>
  )

}

export default EnigmeArea;