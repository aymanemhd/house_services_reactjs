import { Link } from "react-router-dom";

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
          <Link className='navbar-brand page-scroll' path='/Home'>
            House Services
          </Link>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                CARACTÉRISTIQUES
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
              À PROPOS
              </a>
            </li>
            <li>
              <a href='#gallery' className='page-scroll'>
                SERVICES
              </a>
            </li>
            <li>
              <a href='#Testimonials' className='page-scroll'>
              TÉMOIGNAGE
              </a>
            </li>
            <li>
              <a href='#Offres' className='page-scroll'>
              Offres
              </a>
            </li>
            <li>
            <Link className="btn btn-outline-info " id="singup" class="btn btn-primary" type="submit" to="/Pagelogin">Log In</Link>
            </li>
            <li>
            <Link type="button" className="btn btn-outline-info" id="singup" to="/singup">Sing Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>



    )
}

export default Navigation
