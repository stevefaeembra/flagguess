export interface Flag {
  isocode: string;
  name: string;
}

export interface Round {
  // represents six flags, one of which is correct
  answer: Flag;
  choices: Flag[];
}

export interface GameData {
  // represent state of game
  roundNumber: number;
  rounds: Round[];
  score: number;
}

export interface UserAnswer {
  // represents what the user selected
  correctAnswer : Flag;
  incorrectAnswer : Flag;
}

export interface Guess {
  // user guess
  userGuessed: Flag,
  correct: boolean,
  correctAnswer: Flag,
}