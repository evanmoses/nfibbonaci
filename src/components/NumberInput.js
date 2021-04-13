import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RangeSlider from 'react-bootstrap-range-slider';

function NumberInput(props) {
  return (
    <Form>
      <Form.Group as={Row}>
        <Col>
          <RangeSlider
            value={props.numOfValues}
            onChange={(e) => props.handleNumChange(e)}
            min={1}
            max={500}
          />
        </Col>
        <Col>
          <Form.Control
            value={props.numOfValues}
            onChange={(e) => props.handleNumChange(e)}
            min={1}
            max={500}
          />
        </Col>
      </Form.Group>
    </Form>
  );
}

export default NumberInput;
