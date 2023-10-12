import React from 'react'
import Table from 'react-bootstrap/Table';

export default function HistorialCompraPage() {
  return (
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>#</th>
        <th>Usuario</th>
        <th>Pais</th>
        <th>Ciudad</th>
        <th>Costo</th>
        <th>Transporte</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Paris</td>
        <td>Francia</td>
        <td>1872$</td>
        <td>Avion</td>
      </tr>
      <tr>
      <td>2</td>
        <td>Alex</td>
        <td>Grecia</td>
        <td>Athenas</td>
        <td>2015$</td>
        <td>Avion</td>
      </tr>
      <tr>
      <td>3</td>
        <td>Ana</td>
        <td>Mexico</td>
        <td>Veracruz</td>
        <td>1272$</td>
        <td>Camion</td>
      </tr>
    </tbody>
  </Table>
  )
}
