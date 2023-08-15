import React from 'react';

interface FooterProps {
  property: string;
}

[].map((item) => console.log(item));

const Footer: React.FC<FooterProps> = () => {
  return <h1>Growdev</h1>;
};

export default Footer;
