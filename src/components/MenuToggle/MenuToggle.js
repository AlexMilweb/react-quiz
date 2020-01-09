import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { MenuToggle, Icon } from './MenuToggle.styled';

export default ({ isOpen, onToggle }) => (
  <MenuToggle onClick={onToggle} isOpen={isOpen}>
    <Icon as={props => <FontAwesomeIcon icon={isOpen ? faTimes : faBars} {...props} />} />
  </MenuToggle>
);
