import styled from '@emotion/styled';

export const SkipLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 40px;
  background-color: #2ac1bc;
  font-weight: 600;
  color: white;
  overflow: hidden;
  z-index: -999;
  &:focus {
    overflow: visible;
    z-index: 100;
  }
`;
