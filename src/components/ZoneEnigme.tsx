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
                const ponctuation = letter === ("'" || ",");
                return (
                  <div
                      className={(isGuessed || ponctuation)? "letter" : "unknown"}
                      key={j}
                  >
                    {(isGuessed || ponctuation) ? letter.toUpperCase() : ""}
                  </div>
                )
              })}
            </div>
          )
      )}
    </div>
  )

}

export default ZoneEnigme;