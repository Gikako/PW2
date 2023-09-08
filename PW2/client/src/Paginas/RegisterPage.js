import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate()
  return (
    <div class="container mt-5">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="name" placeholder="Usario" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Confirmar Contraseña" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Correo</Form.Label>
            <Form.Control  type='email' placeholder="Correo" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Genero</Form.Label>
              <Form.Select defaultValue="Genero...">
                <option>Hombre</option>
                <option>Mujer</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Rol</Form.Label>
              <Form.Select defaultValue="Genero...">
                <option>Cliente</option>
                <option>Proveedor</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Agencia</Form.Label>
              <Form.Control type="name" placeholder="Agencia de vuelo" />
            </Form.Group>
          </Row>

          <Button onClick={() => navigate('/login')} variant="primary" type="submit">
            Registrar
          </Button>
      </Form>
    </div>
  )
}
