import React from 'react';
import { Slide, Heading } from 'spectacle';
import styled from 'styled-components';
import { YellowText, PurpleText, DarkText } from '../helpers/text';
import { FaTwitter, FaTwitch, FaGithub } from 'react-icons/fa';

const productInfo = [
  {
    statement: 'Becoming',
    name: 'Contentful',
    url:
      'https://res.cloudinary.com/meta-lark-design/image/upload/c_scale,w_100/v1569985070/mike-portfolio/gatsby-contentful-netlify/contentful-logo.png',
  },
  {
    statement: 'with Your',
    name: 'Gatsby',
    url:
      'https://res.cloudinary.com/meta-lark-design/image/upload/c_scale,w_100/v1569985070/mike-portfolio/gatsby-contentful-netlify/gatsby-logo.png',
  },
  {
    statement: 'Static Site on',
    name: 'Netlify',
    url:
      'https://res.cloudinary.com/meta-lark-design/image/upload/c_scale,w_100/v1569985070/mike-portfolio/gatsby-contentful-netlify/netlify-logo.png',
  },
];

const NameLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const OuterLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-content: center;
  justify-content: center;
  background-color: #1c1b21;
  /* height: 130px; */
  padding: 10px 40px;
  border-radius: 10px;
`;

const Box = styled.div`
  padding-top: 30px;
  padding-bottom: 120px;
`;

const OuterProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const InnerProducts = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  width: 100%;
`;

const Product = ({ url, name, statement, statementStyle, nameStyle }) => (
  <InnerProducts>
    <Heading
      margin="0 0 0 20px"
      size={6}
      textColor="tertiary"
      style={{
        // width: '400px',
        'text-align': 'center',
        // 'margin-right': '30px',
        'white-space': 'nowrap',
      }}
    >
      {statement}
    </Heading>
    <Heading
      margin="0 0 0 20px"
      size={4}
      textColor="quaternary"
      style={{
        // width: '400px',
        'text-align': 'center',
        'margin-right': '50px',
      }}
    >
      {name}
    </Heading>
    <img src={url} />
  </InnerProducts>
);

export class Opening extends React.Component {
  render() {
    return (
      <Slide>
        <OuterLayout>
          <OuterProducts>
            <Product
              url={productInfo[0].url}
              statement={productInfo[0].statement}
              name={productInfo[0].name}
              style={{ width: '100%' }}
            />
            <Product
              url={productInfo[1].url}
              statement={productInfo[1].statement}
              name={productInfo[1].name}
              style={{ width: '100%' }}
            />
            <Product
              url={productInfo[2].url}
              statement={productInfo[2].statement}
              name={productInfo[2].name}
              style={{ width: '100%' }}
            />
          </OuterProducts>
        </OuterLayout>
        <Box>
          <Heading size={6}>
            <NameLayout>
              <div
                style={{
                  'background-color': '#1d2126',
                  height: '130px',
                  padding: '45px',
                  'border-radius': '10px',
                }}
              >
                <DarkText>By</DarkText> <YellowText>Mike Leners </YellowText>
              </div>
              <div
                style={{
                  'background-color': '#1d2126',
                  height: '130px',
                  padding: '20px 40px',
                  'border-radius': '10px',
                }}
              >
                <p style={{ margin: '0' }}>
                  <DarkText>@micLeners</DarkText>
                </p>
                <PurpleText>
                  <FaGithub
                    style={{
                      height: '50px',
                      width: '50px',
                      margin: '5px',
                    }}
                  />
                  <FaTwitch
                    style={{
                      height: '50px',
                      width: '50px',
                      margin: '5px',
                    }}
                  />
                  <FaTwitter
                    style={{
                      height: '50px',
                      width: '50px',
                      margin: '5px',
                    }}
                  />
                </PurpleText>
              </div>
            </NameLayout>
          </Heading>
          <Heading
            size={6}
            textColor="quaternary"
            style={{
              margin: '40px 0',
              'font-size': '36px',
              'background-color': '#1c1b21',
              // height: '130px',
              padding: '20px 10px',
              'border-radius': '10px',
            }}
          >
            github.com/micleners/gatsby-contentful
          </Heading>
        </Box>
      </Slide>
    );
  }
}
