import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articulos: [{
                      codigo: 1, 
                      descripcion: 'coca-cola',
                      precio: 2.50
                 },{
                      codigo: 2, 
                      descripcion: 'inka-cola',
                      precio: 2.20
                 },{
                      codigo: 3, 
                      descripcion: 'fanta',
                      precio: 1.70
                 }]
    }
    this.borrar = this.borrar.bind(this);
  }

  render() {
    return (
      
      <div class="table-responsive-sm tabla_general2">
        
        <div class="contenedor">
        <table class="table">
        <thead>
            <tr class="table-danger tabla_general" >
              <th scope="col">Codigo</th>
              <th scope="col">Descripción</th>
              <th scope="col">Precio</th>
              <th scope="col">Borrar</th>
            </tr>
          </thead>
          <tbody>
                {this.state.articulos.map(elemento => {
                return (

                  <tr class="tabla_general table-info" key={elemento.codigo} >
                    <td >
                      {elemento.codigo}  
                    </td>
                    <td>
                      {elemento.descripcion}
                    </td>
                    <td>
                      {elemento.precio}
                    </td>              
                    <td>
                      <button type="button" class="btn btn-danger" onClick={()=>this.borrar(elemento.codigo)}>Borrar</button>
                      
                    </td>
                  </tr>
                )
              })}  
              
            </tbody>
        </table>
        
        </div>
        







        
      </div>
    );
  }

  borrar(cod) {
    var temp = this.state.articulos.filter((el)=>el.codigo !== cod);
    this.setState({
      articulos: temp
    })
}


}
export default App;

