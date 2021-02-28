import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StyledSlide from './Slide.jsx';


class CarouselWrapper extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Container>
        {this.props.render(this.props.data)}
        {Object.values(this.props.data).map((product) => {
          return <StyledSlide data={product}
            cardButtonClick={this.props.cardButtonClick}
            key={product.id}
            render={onClick => (
              <button onClick={onClick}>x</button>
            )}>
          </StyledSlide>;
        })}
      </Container>
    );
  }

}

CarouselWrapper.propTypes = {
  data: PropTypes.object.isRequired,
  render: PropTypes.func.isRequired,
  cardButtonClick: PropTypes.func.isRequired
};

const Container = styled.div`
  border: 1px solid black;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default CarouselWrapper;