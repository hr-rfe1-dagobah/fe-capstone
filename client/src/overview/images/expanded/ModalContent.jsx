import React from 'react';
import { Palette } from '../../../globalStyles';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContentDiv = styled.div`
  position: fixed;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  border: solid 15px ${Palette.foreground};
  border-radius: 1px;
`;

const CloseButton = styled.button`

`;

const ModalContent = (props) => {

  const closeModal = () => {
    props.setExpandedView(false);
  };

  return (
    <ContentDiv>
      <CloseButton onClick={closeModal}>
        Close
      </CloseButton>
      {props.children}
    </ContentDiv>
  );
};

ModalContent.propTypes = {
  children: PropTypes.element,
  setExpandedView: PropTypes.func,
};

export default ModalContent;