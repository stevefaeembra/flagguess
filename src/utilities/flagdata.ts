import { ISOCODES } from "../data/isocodes";
import { shuffleArray } from "./utilities";

export const getRandomFlag = () => {
  // get a random isocode + country from list
  const isocodes = Object.keys(ISOCODES);
  const pick = parseInt(Math.random() * parseFloat(isocodes.length));
  const options = Object.entries(ISOCODES);
  const [code,name] = options[pick];
  return(
    {
      isocode : code,
      name: name
    }
  )
}

export const getOptions = (answer) => {
  // generate a random set of possibilites
  // which includes the answer
  let choices =[answer];
  const isocodes = Object.keys(ISOCODES);
  const options = Object.entries(ISOCODES);
  while (choices.length<=5) {
    const pick = parseInt(Math.random() * parseFloat(isocodes.length));
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