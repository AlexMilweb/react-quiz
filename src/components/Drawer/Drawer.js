import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import { Drawer, LinkList, LinkWrapper, Link } from './Drawer.styled';

const links = [1, 2, 3];

export default ({ isOpen, onClose }) => (
  <>
    <Drawer isOpen={isOpen}>
      <LinkList>
        {links.map((link, index) => (
          <LinkWrapper key={index}>
            <Link>Link {link}</Link>
          </LinkWrapper>
        ))}
      </LinkList>
    </Drawer>
    {isOpen && <Backdrop onClick={onClose} />}
  </>
);
