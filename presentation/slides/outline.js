import React from 'react';
import { Slide, Heading, List, ListItem } from 'spectacle';

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
