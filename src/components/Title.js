import React from 'react';

import Container from 'react-bootstrap/Container';

function Title() {
  return (
    <Container className="p-3 text-center">
      <h1 className="header">The Fibonacci Machine</h1>
      <p>
        Tell us how much Fibonnaci you'd like and we'll get for you.
        <br />
        Not too big, not too small, juuust right.
      </p>

    </Container>
  );
}

export default Title;
