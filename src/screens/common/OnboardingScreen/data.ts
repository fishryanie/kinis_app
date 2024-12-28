import {ImageSourcePropType} from 'react-native';

export type DataItem = {
  id: number;
  image: ImageSourcePropType;
  title: string;
  text: string;
};

export const data: DataItem[] = [
  {
    id: 1,
    image: require('assets/images/Onboarding1.png'),
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    image: require('assets/images/Onboarding2.png'),
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    image: require('assets/images/Onboarding3.png'),
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
