import React from 'react';
import { Slide, Heading, List, ListItem } from 'spectacle';
import styled from 'styled-components';

export const RepoText = styled.a`
  color: #fded07;
  text-decoration: none;
  font-size: 42px;
  line-height: 80px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Outline = () => (
  <Slide>
    <Heading>Dojo Gameplan</Heading>
    <RepoText href="github.com/micleners/gatsby-contentful">
      github.com/micleners/gatsby-contentful
    </RepoText>
    <List style={{ color: '#bbbbbb' }}>
      <ListItem>Set up Gatsby for Contentful</ListItem>
      <ListItem>Create Model and Data in Contentful</ListItem>
      <ListItem>Load posts into Gatsby site</ListItem>
      <ListItem>Deploy to Netlify</ListItem>
      <ListItem>Setup webhooks to trigger builds</ListItem>
    </List>
  </Slide>
);
