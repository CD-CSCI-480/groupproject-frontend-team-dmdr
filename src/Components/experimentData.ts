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

const data: Data = [
  {
    title: 'Breakfast',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
    calories: 0,
    contentNested: [
      {
        title: 'Bacon',
        content: '200g',
        caloric: 270,
      },
      {
        title: 'Eggs',
        content: '1 Large Egg',
        caloric: 180,
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
  {
    title: 'Lunch Part 2',
    content: [],
    contentNested: [
      {
        title: 'Alfredo',
        content: '500g',
        caloric: 550,
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
  {
    title: 'After Lunch Snack',
    content: [],
    contentNested: [
      {
        title: 'Grapes',
        content: '25g',
        caloric: 150,
      },
    ],
    calories: 0,
    type: 'nested',
  },
];

export default data;
