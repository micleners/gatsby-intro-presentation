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

export const ContentfulDetails = () => (
  <Slide>
    <HeaderFlex>
      <Image
        style={{ "float": 'right' }}
        src="https://res.cloudinary.com/meta-lark-design/image/upload/c_scale,w_150/v1569985070/mike-portfolio/gatsby-contentful-netlify/contentful-logo.png"
      />
      <Heading>Contentful</Heading>
    </HeaderFlex>
    <List style={{ color: '#bbbbbb' }}>
      <ListItem>Headless CMS w/ intuitive UX</ListItem>
      <ListItem>Traditional model & content paradigm</ListItem>
      <ListItem>Generous free tier</ListItem>
      <ListItem>
        {' '}
        <a
          style={{ color: '#fded07' }}
          href="https://www.contentful.com/developers/docs/tutorials/cli/"
        >
          CLI
        </a>{' '}
        for JSON import/export
      </ListItem>
      <ListItem>
        Gatsby{' '}
        <a
          style={{ color: '#fded07' }}
          href="https://www.gatsbyjs.org/packages/gatsby-source-contentful/?=contenful"
        >
          plugin
        </a>{' '}
        for quick integration
      </ListItem>
    </List>
  </Slide>
);
