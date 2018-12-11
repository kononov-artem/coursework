import React from 'react';
import ReactDOM from 'react-dom';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';

class Example2 extends React.Component {
  render() {
    return (
      <div>
        <Appbar></Appbar>
        <Container>
          <Button color="primary">button</Button>
        </Container>
      </div>
    );
  }
}

export default Example2;