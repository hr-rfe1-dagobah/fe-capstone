import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const StyledStarRow = styled.div`

  display: inline-block;
  font-size: 50px;
  font-family: Times;

  &::before {
    content: '★★★★★';
    letter-spacing: 3px;
   background: linear-gradient(90deg, #fc0 ${props => props.rating}%, #D8DCD6 ${props => props.rating}%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const StarRow = (props) => {
  return (
    <div>
      <StyledStarRow rating={props.rating || 50}></StyledStarRow>
    </div>
  );
};

StarRow.propTypes = {
  rating: PropTypes.number
};

export default StarRow;