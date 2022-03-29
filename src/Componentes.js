import React, {useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import './index.css'; 


function Datos() {
  const [producto, setProducto] = useState([])
  const url ='http://scratchya.com.ar/react/datos.php'
  const verData = async ()=>{
    const repuesta = await fetch(url)
    const data = await repuesta.json()
    console.log(data)
    setProducto(data)
  }
  
  useEffect( ()=>{
    verData()
  }, [])
  
  const columnas = [

    {
      name: 'Codigo',
      selector: row =>  row.codigo
    },
    {
      name: 'Descripcion',
      selector: row => row.descripcion
    },
    {
      name: ' Precio',
      selector: row => row.precio
    },
    
	{
		name: ' ¿Borrar?',
		selector: row => <button onClick={ () =>  {
      const index = producto.map(dato => {
        return dato.codigo === row.codigo;
      })

      producto.splice(index, 1);
      var newProducto = [];
      Object.assign(newProducto, producto);
      setProducto(newProducto);
    }}>Borrar</button>
	},
  ] 

  return (
    <div className="Datos">
      <table>
        <tr>
          <td>
            <DataTable
              columns={columnas}
              data={producto}
              />
          </td> 
      </tr>  
      </table>
    </div>
  );
}

export default Datos;