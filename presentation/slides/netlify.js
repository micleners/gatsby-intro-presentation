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

export const NetlifyDetails = () => (
  <Slide>
    <HeaderFlex>
      <Image
        style={{ "float": 'right' }}
        src="https://res.cloudinary.com/meta-lark-design/image/upload/c_scale,w_150/v1569985070/mike-portfolio/gatsby-contentful-netlify/netlify-logo.png"
      />
      <Heading>Netlify</Heading>
    </HeaderFlex>
    <List style={{ color: '#bbbbbb' }}>
      <ListItem>Static site deployment</ListItem>
      <ListItem>Git integration</ListItem>
      <ListItem>Deploy previews</ListItem>

      <ListItem>
        Blazing fast{' '}
        <a
          style={{ color: '#24c4b7' }}
          href="https://www.netlify.com/blog/2017/03/28/why-you-dont-need-cloudflare-with-netlify/"
        >
          CDN
        </a>
      </ListItem>
      <ListItem>
        {' '}
        <a
          style={{ color: '#24c4b7' }}
          href="https://www.netlify.com/docs/custom-domains/"
        >
          Custom domains
        </a>{' '}
        & HTTPS
      </ListItem>
    </List>
  </Slide>
);
