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

function myFunction() {
  return "hello";
}

function countCalories(a,b){
  return String(a + b);
}

export type Data = Category[];

const data: Data = [
  {
    title: 'Breakfast',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
    calories: 0,
    contentNested: [
      {
        title: 'Chicken',
        content: 'test',
        caloric: 200,
      },
      {
        title: 'Peas',
        content: 'pee',
        caloric: 100,
      },
    ],
    type: 'nested',
  },
  {
    title: 'Lunch',
    content: [],
    contentNested: [
      {
        title: 'Chicken',
        content: '25g',
        caloric: 200,
      },
      {
        title: 'Broccoli',
        content: '10g',
        caloric: 140,
      },
    ],
    calories: 0,
    type: 'nested',
  },
];

export default data;
