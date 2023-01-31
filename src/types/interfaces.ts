export interface Flag {
  isocode: String;
  name: String;
}

export interface Round {
  // represents six flags, one of which is correct
  answer: Flag;
  choices: Flag[];
}

export interface GameData {
  // represent state of game
  roundNumber: Number;
  rounds: Round[];
  score: Number;
}