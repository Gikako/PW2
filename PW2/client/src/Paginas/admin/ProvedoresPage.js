import React from 'react'
import Table from 'react-bootstrap/Table';

export default function ProvedoresPage() {
  return (
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>#</th>
        <th>Proveedor</th>
        <th>Aereolinea</th>
        <th>Aviones Rentados</th>
        <th>Costo</th>
        <th>Camiones Rentados</th>
        <th>Costo</th>
        <th>Materiales</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Volaris</td>
        <td>18</td>
        <td>18072$</td>
        <td>Pacifico</td>
        <td>6</td>
        <td>Gasolina, herramientas, refacciones</td>
      </tr>
      <tr>
      <td>2</td>
        <td>Alex</td>
        <td>x</td>
        <td>x</td>
        <td>0$</td>
        <td>Senda</td>
        <td>7</td>
        <td>Gasolina, refacciones</td>
      </tr>
      <tr>
      <td>3</td>
        <td>Ana</td>
        <td>Mexicana de Aviasion</td>
        <td>4</td>
        <td>12072$</td>
        <td>x</td>
        <td>0</td>
        <td>Gasolina, herramientas, refacciones</td>
      </tr>
    </tbody>
  </Table>
  )
}
