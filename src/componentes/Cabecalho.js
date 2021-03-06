import React from 'react'

import {Link} from 'react-router-dom'

const Cabecalho = props => {
    return (
        <div>
            <nav className='navbar navbar-default navbar-fixed-top'>
                <div className='container'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        <a className='navbar-br /and' href='#myPage'>Logo</a>
                    </div>
                    <div className='collapse navbar-collapse' id='myNavbar'>
                        <ul className='nav navbar-nav navbar-right'>
                            <li><Link to='/'>Inicio</Link></li>
                            <li><Link to='/servicos'>Servico</Link></li>
                            <li><Link to='/portifolio'>PORTFOLIO</Link></li>
                            <li><Link to='/preco'>Preços</Link></li>
                            <li><Link to='/contato'>Contato</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='jumbotron text-center'>
                <h1>Company</h1>
                <p>We specialize in blablabla</p>
                <form>
                    <div className='input-group'>
                        <input type='email' className='form-control' size='50' placeholder='Email Address' required />
                        <div className='input-group-btn'>
                            <button type='button' className='btn btn-danger'>Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Cabecalho