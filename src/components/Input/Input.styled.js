import styled, {css} from 'styled-components';

export const Input = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  margin-bottom: 3px;
  display: block;
  font-weight: bold;
  padding: 0;

  ${props => props.error && css`
    color: rgba(240, 87, 108, 0.7);
  `}
`;

export const Field = styled.input`
  display: block;
  box-sizing: border-box;
  border: 1px solid #bebebe;
  padding: 7px;
  margin: 0 0 5px;
  width: 100%;
  outline: none;
  transition: all 0.3s ease-in-out;

  ${props => props.error && css`
    border-color: rgba(240, 87, 108, 0.7);
  `}
`;

export const Error = styled.span`
  color: rgba(240, 87, 108, 0.7);
  font-size: 12px;
  font-weight: bold;
`;
