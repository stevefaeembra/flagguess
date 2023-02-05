import { ISOCODES } from "../data/isocodes";
import { shuffleArray } from "./utilities";
import { Flag, Round, GameData } from "../types/interfaces";

const getRandomFlag = () : Flag => {
  // get a random isocode + country from list
  const isocodes = Object.keys(ISOCODES);
  const pick = parseInt((Math.random() * isocodes.length).toString());
  const options = Object.entries(ISOCODES);
  const [code,name] = options[pick];
  return(
    {
      isocode : code,
      name: name
    }
  )
}

const getChoices = (answer:Flag) : Flag[] => {
  // generate a random set of possibilites
  // which includes the answer passed in
  let choices =[answer];
  const isocodes = Object.keys(ISOCODES);
  const options = Object.entries(ISOCODES);
  while (choices.length<=5) {
    const pick = parseInt((Math.random() * isocodes.length).toString());
    const [code,name] = options[pick];
    // prevent duplicates!
    if (!choices.find(existing => existing.isocode === code)) {
      choices.push(
        {
          isocode : code,
          name: name
        }
      )
    }
  };
  return shuffleArray(choices);
}

const getRound = () : Round => {
  const answer = getRandomFlag();
  const newRound = getChoices(answer);
  return {
    answer,
    choices: newRound,
  }
}

export const checkAnswer  = (round: Round, isoCode: string) : boolean => {
  // return true if it's correct
  const matchy = round?.choices?.find((flag) => flag.isocode === isoCode);
  const rightGuess = matchy?.isocode === round?.answer?.isocode;
  return rightGuess;
}

export const getGame = (numberRounds: Number) : GameData => {
  let gameRounds : Round[] = [];
  while (gameRounds.length < numberRounds) {
    // prevent same flag appearing more than once in a game
    const candidateRound = getRound();
    const isDuplicated = gameRounds.find(flag => flag?.answer?.isocode === candidateRound?.answer?.isocode);
    if (!isDuplicated) {
      gameRounds = [...gameRounds, candidateRound];
    }
  }
  return {
    roundNumber: 0,
    rounds: gameRounds,
    score: 0,
  }
}