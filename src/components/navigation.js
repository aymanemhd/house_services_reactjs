import Login from "./Login";



function Navigation() {
  

    return (
        <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' path='/'>
            House Services
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a path='/CARACTÉRISTIQUES' className='page-scroll'>
                CARACTÉRISTIQUES
              </a>
            </li>
            <li>
              <a href='/apropos' className='page-scroll'>
              À PROPOS
              </a>
            </li>
            <li>
              <a href='/services' className='page-scroll'>
                SERVICES
              </a>
            </li>
            <li>
              <a href='/TÉMOIGNAGE' className='page-scroll'>
              TÉMOIGNAGE
              </a>
            </li>
            <li>
              <a href='/contact' className='page-scroll'>
                CONTACTS
              </a>
            </li>
            <li>
            <Login/>
            </li>
            <li>
            <button type="button" className="btn btn-outline-info" id="singup">Sing Up</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>



    )
}

export default Navigation
