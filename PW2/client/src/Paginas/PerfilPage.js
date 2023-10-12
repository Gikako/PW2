import React from 'react'
import { Col, Row, Button, Image, Card } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

export default function PerfilPage() {
  const navigate = useNavigate()
  return (
    <div>
      <Col xs={9} md={9} className='text-center'>
          <Image src={require('./../Imagenes/1361728.png')} roundedCircle />
        </Col>
        <Col>
        <Card className='mt-4'>
          <p className='text-center'><b>Usuario:</b></p>
          <p className='text-center'><b>Nombre:</b></p>

          <Button className='text-center' onClick={() => navigate('/historialcompra')}  type='submit'>historial de compra</Button>
        </Card>
        </Col>
       
    </div>
  )
}
