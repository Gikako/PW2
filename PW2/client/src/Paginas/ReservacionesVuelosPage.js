import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'



export default function ReservacionesVuelosPage() {
 
  return (
    <div>
      <div class="container mt-5">
        <Form>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Aereolinea</Form.Label>
              <Form.Select defaultValue="Aereolinea...">
                <option>Viva Aerobus.</option>
                <option>Aeromexico</option>
                <option>American Airlines</option>
                <option>Volaris</option>
                <option>United</option>
                <option>Delta</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Pais</Form.Label>
              <Form.Control type="text" placeholder="Pais de destino" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridText">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control type="password" placeholder="Ciudad de destino" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Fecha de Salida</Form.Label>
              <Form.Control type="text" placeholder="Fecha de Salida"/>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Fecha de Retorno</Form.Label>
            <Form.Control type="text" placeholder="Fecha de Retorno"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Costo</Form.Label>
            <Form.Control type="text" placeholder="Costo del vuelo"/>
          </Form.Group>
          
      <Button type='submit'>Pagar</Button>
      </Form>
      </div>
    </div>
  )
}
