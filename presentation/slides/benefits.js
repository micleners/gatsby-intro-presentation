import React from 'react';
import { Slide, Heading, Image } from 'spectacle';
import styled from 'styled-components';
import { FaTachometerAlt, FaShieldAlt, FaAccessibleIcon } from 'react-icons/fa';

const Descriptor = styled.span`
  font-size: 56px;
  width: 230px;
  color: ${props => props.color || '#eaeaea'};
`;

const Features = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  padding-top: 50px;
`;

const Column = styled.div`
  padding: 20px;
  border-radius: 10px;
  background: #1f2227;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ProductRows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
  width: 70%;
  margin: auto;
`;

const Products = () => (
  <ProductRows>
    <Image src="https://res.cloudinary.com/meta-lark-design/image/upload/c_scale,w_150/v1569985070/mike-portfolio/gatsby-contentful-netlify/gatsby-logo.png" />
    <Image src="https://res.cloudinary.com/meta-lark-design/image/upload/c_scale,w_150/v1569985070/mike-portfolio/gatsby-contentful-netlify/netlify-logo.png" />
    <Image src="https://res.cloudinary.com/meta-lark-design/image/upload/c_scale,w_150/v1569985070/mike-portfolio/gatsby-contentful-netlify/contentful-logo.png" />
  </ProductRows>
);

const Feature = ({ children, text, color }) => (
  <Column>
    {children}
    <Descriptor style={{ color }}>{text}</Descriptor>
  </Column>
);

const Security = styled(FaShieldAlt)`
  height: 170px;
  width: 170px;
  color: #24c4b7;
`;

const Easy = styled(FaAccessibleIcon)`
  height: 170px;
  width: 170px;
  color: #663399;
`;

const Speed = styled(FaTachometerAlt)`
  height: 170px;
  width: 170px;
  color: #fded07;
`;

export class Benefits extends React.Component {
  render() {
    return (
      <Slide>
        <Heading size={2} textColor="tertiary">
          Stack Benefits
        </Heading>
        <Features>
          <Feature text="Easy" color="#EAEAEA">
            <Easy />
          </Feature>
          <Feature text="Secure" color="#EAEAEA">
            <Security />
          </Feature>
          <Feature text="Fast" color="#EAEAEA">
            <Speed />
          </Feature>
        </Features>
        <Products width="100" />
      </Slide>
    );
  }
}
