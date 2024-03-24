export type Category = {
  title: string;
  content: string[];
  contentNested: NestedItem[];
  calories: string;
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
    title: 'Category 1',
    content: [],
    calories: myFunction(),
    contentNested: [],
    type: 'regular',
  },
  {
    title: 'Lunch - 800 cal',
    content: ['Grilled Chicken - 6 ounces', 'Content Category 2'],
    calories: myFunction(),
    contentNested: [],
    type: 'regular',
  },
  {
    title: 'Category 3',
    content: ['Content Category 1', 'Content Category 2', 'Content Category 3'],
    calories: myFunction(),
    contentNested: [],
    type: 'regular',
  },
  {
    title: 'Paragraph',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
    calories: myFunction(),
    contentNested: [],
    type: 'regular',
  },
  {
    title: 'Nested Accordion',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
    calories: myFunction(),
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
    title: 'Nested Accordion 2',
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
    calories: "test",
    type: 'nested',
  },
];

export default data;
