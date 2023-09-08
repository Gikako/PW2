import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

export default function ReservacionesCamionPage() {
  const navigate = useNavigate()
  return (
    <div>ReservacionesCamionPage
      <Button onClick={() => navigate('/cobro')} type='submit'>Pagar</Button>
    </div>
  )
}
