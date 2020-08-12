import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        HOME
      </a>
      <a href="/services">
        SERVICES
      </a>
      <a href="">
        CV
      </a>
      <a href="/publications">
        PUBLICATIONS
      </a>
      <a href="/contact">
        CONTACT
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
