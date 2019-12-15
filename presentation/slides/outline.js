import React from 'react';
import {
  //   Deck,
  Slide,
  Heading,
  //   Text,
  //   BlockQuote,
  //   Cite,
  Image,
  List,
  ListItem,
  //   ListItem,
  //   Quote
} from 'spectacle';
import styled from 'styled-components';

const HeaderFlex = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

export const Outline = () => (
  <Slide>
    <Heading>Dojo Gameplan</Heading>
    <List style={{ color: '#bbbbbb' }}>
      <ListItem>Set up Gatsby for Contentful</ListItem>
      <ListItem>Create Model and Data in Contentful</ListItem>
      <ListItem>Load posts into Gatsby site</ListItem>
      <ListItem>Deploy to Netlify</ListItem>
      <ListItem>Setup webhooks to trigger builds</ListItem>
    </List>
  </Slide>
);
