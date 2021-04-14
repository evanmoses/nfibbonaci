import React from 'react';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RangeSlider from 'react-bootstrap-range-slider';

function NumberInput(props) {
  return (
    <Form>
      <Row className="justify-content-center">
        <Form.Group as={Col} xs={11} sm={10} md={8} lg={6} xl={4}>
          <Row>
            <Col>
              <label>Enter the number of values you'd like in the sequence:</label>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <Form.Control
                value={props.numOfValues}
                onChange={(e) => props.validateTextInput(e)}
                isInvalid={!!props.inputError}
              />
              <FormControl.Feedback type="invalid" style={{ whiteSpace: 'nowrap' }}>
                Please enter an integer between 1 and 500.
              </FormControl.Feedback>
            </Col>
            <Col xs={9}>
              <RangeSlider
                value={props.numOfValues}
                onChange={(e) => props.handleSliderChange(e)}
                min={1}
                max={500}
              />
            </Col>
          </Row>
        </Form.Group>
      </Row>
    </Form>
  );
}

export default NumberInput;
