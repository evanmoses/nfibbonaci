import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import sequence from '../lib/sequence';

function ValueDisplay(props) {
  const sequenceToIndex = sequence.slice(0, (props.numOfValues));
  return (
    props.inputError ? null
      : (
        <Row className="mt-4 justify-content-center">
          <Col xs={11} sm={10} md={8} lg={6} xl={4}>{sequenceToIndex.join(', ')}</Col>
        </Row>
      )
  );
}

export default ValueDisplay;
