import React from 'react';
import { FooterContainer, FooterLink, FooterText } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © 2024 Evelin Iasenza. Todos los derechos reservados.
        <FooterLink href="/privacy-policy">Política de privacidad</FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
