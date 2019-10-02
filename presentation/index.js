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
import Opening from './slides/opening';
import createTheme from 'spectacle/lib/themes/default';

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
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
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1}>
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" fit bold>
            Open the presentation/index.js file to get started.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Image src={images.formidagon} width={800} />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} caps>
            Typography
          </Heading>
          <Heading size={1} textColor="primary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} caps textColor="secondary">
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Image src={images.goodWork} width={500} />
        </Slide>
      </Deck>
    );
  }
}
