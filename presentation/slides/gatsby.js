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

export const GatsbyDetails = () => (
  <Slide>
    <HeaderFlex>
      <Image
        style={{ "float": 'right' }}
        src="https://res.cloudinary.com/meta-lark-design/image/upload/c_scale,w_150/v1569985070/mike-portfolio/gatsby-contentful-netlify/gatsby-logo.png"
      />
      <Heading>GatsbyJS</Heading>
    </HeaderFlex>
    <List style={{ color: '#bbbbbb' }}>
      <ListItem>Static site generator</ListItem>
      <ListItem>Data on GraphQL Layer</ListItem>
      <ListItem>Built with React</ListItem>
      <ListItem>Strong community</ListItem>
      <ListItem>
        Large{' '}
        <a
          style={{ color: '#663399' }}
          href="https://www.gatsbyjs.org/plugins/"
        >
          plugin
        </a>{' '}
        ecosystem
      </ListItem>
      <ListItem>
        Hundreds of{' '}
        <a
          style={{ color: '#663399' }}
          href="https://www.gatsbyjs.org/starters/?v=2"
        >
          Starters
        </a>
      </ListItem>
    </List>
  </Slide>
);
