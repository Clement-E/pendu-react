import {indexesOf, phraseToCharArray} from "../utils/Utils.ts";

interface ZoneEnigmeProps {
  mots: string;
  guesses: string[];
  guess: string | null;
}

const ZoneEnigme = ({mots, guesses, guess} : ZoneEnigmeProps) => {
const motsArray = phraseToCharArray(mots);

  return (
    <div className="summary">
      {motsArray.map((mot, index) => (
          <div className="mot" key={index}>
            {mot.map((letter, i) => {
              const guessIds = (guess && indexesOf(motsArray.flatMap(mot => mot), guess)) as number[];
              const isGuessed = guessIds?.includes(i);
              console.log({guessIds})
              return (
                <div className={isGuessed ? "letter" : "unknown"} key={i}>{isGuessed ? letter : ""}</div>
              )
            })}
          </div>
        )
      )}
    </div>
  )

}

export default ZoneEnigme;