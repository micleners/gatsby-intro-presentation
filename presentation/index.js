import React from 'react';
import {
  Deck,
  Slide,
  Heading,
  Text,
  BlockQuote,
  Cite,
  Image,
  List,
  ListItem,
  Quote,
} from 'spectacle';
import {
  Opening,
  Benefits,
  GatsbyDetails,
  ContentfulDetails,
  NetlifyDetails,
  Outline,
} from './slides';
import createTheme from 'spectacle/lib/themes/default';

const theme = createTheme(
  {
    primary: '#272C33',
    secondary: '#3D4554',
    tertiary: '#EAEAEA',
    quaternary: '#BBBBBB',
    accentGreen: '#26D9D2',
    accentRed: '#EF5350',
    accentBlue: '#1876D2',
  },
  {
    primary: {
      name: 'Oxygen Mono',
      googleFont: true,
      styles: ['400', '700i'],
    },
    secondary: {
      name: 'Roboto Mono',
      googleFont: true,
      styles: ['400', '700i'],
    },
  }
);

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif'),
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        theme={theme}
        transition={['zoom', 'slide']}
        transitionDuration={500}
      >
        <Opening />
        <Benefits />
        <GatsbyDetails />
        <ContentfulDetails />
        <NetlifyDetails />
        <Outline />
      </Deck>
    );
  }
}
