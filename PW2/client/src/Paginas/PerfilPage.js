import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

export default function PerfilPage() {
  const navigate = useNavigate()
  return (
    <div>PerfilPage

      <Button onClick={() => navigate('/historialcompra')} type='submit'>historial de compra</Button>
    </div>
  )
}
