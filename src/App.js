import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'



import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/Cabecalho'
import Inicio from './componentes/Inicio'
import Servicos from './componentes/Servicos'
import Portifolio from './componentes/Portifolio'
import Preco from './componentes/Preco'
import Contato from './componentes/Contado'
//area do admin
import Admin from './admin/Admin';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho></Cabecalho>

          <Route path='/' exact component={Inicio}></Route>
          {/*<Route path='/'  component={Inicio}></Route> abre na mesma pagina  */}
          <Route path='/servicos' component={Servicos}></Route>
          <Route path='/portifolio' component={Portifolio}></Route>
          <Route path='/preco' component={Preco}></Route>
          <Route path='/contato' component={Contato}></Route>
          <Route path='/admin' component={Admin}></Route>
          <Rodape></Rodape>
        </div>
      </BrowserRouter>
    )
  }

}

export default App;
