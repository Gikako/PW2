import React from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


function LoginPage() {
  const navigate = useNavigate()
  return (
    <div class="Container mt-5">
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text-center" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
          Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Button onClick={() => navigate('/login')} type='submit'>Ingresar</Button>
        <Button onClick={() => navigate('/register')} type='submit'>Registrar</Button>
      </Form>
    </div>
  )
}
export default LoginPage
