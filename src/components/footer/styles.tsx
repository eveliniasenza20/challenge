import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px; /* Altura del footer */
  background-color: #007bff; /* Color de fondo */
  color: white;
  position: relative; /* Permitir posicionamiento en el pie de página */
  bottom: 0;
  width: 100%;
  margin-top: auto; /* Mantener el footer en la parte inferior */
`;

export const FooterText = styled.p`
  margin: 0; /* Eliminar margenes */
  font-size: 0.9em; /* Tamaño de fuente más pequeño */
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none; /* Sin subrayado */
  margin-left: 5px; /* Espaciado entre enlaces */

  &:hover {
    text-decoration: underline; /* Subrayar al pasar el mouse */
  }
`;
