import { ISOCODES } from "../data/isocodes";

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
