import React from 'react'
import { Container, Wrapper, Row, Column, Link, Title } from '../Styles/FooterStyle';
import Icon from '../Styles/IconStyle'

export const FooterF = () => {
    return (
      <Footer>
      <Footer.Wrapper>
      <Footer.Row>

          <Footer.Column>
          <Footer.Title>Sobre AR</Footer.Title>
              <Footer.Link href="#">Visión</Footer.Link>
              <Footer.Link href="#">Misión</Footer.Link>
              <Footer.Link href="#">Historia</Footer.Link>
          </Footer.Column>   

          <Footer.Column>
          <Footer.Title>Contactanos</Footer.Title>
              <Footer.Link href="#">Profesores</Footer.Link>
              <Footer.Link href="#">Alumnos</Footer.Link>
          </Footer.Column>


          <Footer.Column>
          <Footer.Title>Redes Sociales</Footer.Title>
              <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
              <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
              <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
              <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
          </Footer.Column>

      </Footer.Row>
      </Footer.Wrapper>
  </Footer>
    )
}

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Wrapper = function FooterWrapper({children, ...restProps}) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
