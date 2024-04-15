import all from 'src/(Nutrition)/(data)/stuff.json';

export type Category = {
  title: string;
  content: string[];
  contentNested: NestedItem[];
  calories: number;
  type: string;
};

export type NestedItem = {
  title: string;
  content: string;
  caloric: number;

};

export type Data = Category[];

const data: Data = JSON.parse(all);

export default data;
