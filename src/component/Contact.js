import React from 'react';
import { Container, Row ,Col,Form} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
const Contact = () => {
  return (
   <section id='contact' className='mt-5'>
    <div className="text-center my-2 py-3" >
        <h2 className='display-s text-primary'>Contact Us</h2>
    </div>
      <Container>
        <Row className='justify-content-center'>
            <Col md={6}>
                <Form>
                <Form.Label>User Name</Form.Label>
                <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comments</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button type="submit">Submit form</Button>
                </Form>
            </Col>
        </Row>
      </Container>
   </section>
  );
};
export default Contact;