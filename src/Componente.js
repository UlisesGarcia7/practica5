import React, { useEffect, useState } from "react"
import './index.css'; 

const Datos = () => {
  const [producto, setProducto] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://scratchya.com.ar/react/datos.php")
    const data = await response.json()
    setProducto(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
      <table>
          <thead>
              <tr>
              <td>Código</td>
              <td>Descripción</td>
              <td>Precio</td>
              </tr>
        </thead>
        <tbody>
          {producto.map(producto => (
            <tr>
              <td>{producto.codigo}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

// Todo El Contenido De La Constante 'Datos' Es Exportada Al Archivo 'App.js'
export default Datos;