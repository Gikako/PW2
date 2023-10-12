import React from 'react'
import Table from 'react-bootstrap/Table';

export default function UsersPage() {
  return (
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Pais</th>
        <th>Ciudad</th>
        <th>Usuario</th>
        <th>Transporte</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Paris</td>
        <td>Francia</td>
        <td>karmak</td>
        <td>Avion</td>
      </tr>
      <tr>
      <td>2</td>
        <td>Alex</td>
        <td>Mexico</td>
        <td>Durango</td>
        <td>alxXx</td>
        <td>camion</td>
      </tr>
      <tr>
      <td>3</td>
        <td>Ana</td>
        <td>Mexico</td>
        <td>Veracruz</td>
        <td>Anisth</td>
        <td>Camion</td>
      </tr>
    </tbody>
  </Table>
  )
}
