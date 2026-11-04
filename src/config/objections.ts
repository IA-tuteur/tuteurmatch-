export type Objection = {
  id: string;
  question: string;
  videoId: string;
};

export const objections: Objection[] = [
  {
    id: "motivation",
    question: "Mon enfant n'est pas motivé à prendre du tutorat. Que faire ?",
    videoId: "sZFDGiTABgs",
  },
  {
    id: "conditions",
    question: "Et si les conditions ne sont pas parfaites pour mon enfant ?",
    videoId: "ZXYGCU2tb6c",
  },
  {
    id: "different",
    question: "Qu'est-ce qui vous rend différent des autres services de tutorat ?",
    videoId: "3y_BqnGxcMk",
  },
  {
    id: "cost",
    question: "Combien ça coûte ?",
    videoId: "4kxXT4iKNr0",
  },
];
