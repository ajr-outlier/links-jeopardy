export type Square = {
  uuid: string;
  question: string;
  answer: string;
  value: number;
};

export type Category = {
  uuid: string;
  title: string;
  squares: Record<number, Square>;
};

export type Board = {
  categories: Category[];
  squareValues: number[];
};
