import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import './header.css'

// const Header = () => {
//     const [click, setClick] = React.useState(false);

//   const handleClick = () => setClick(!click);
//   const Close = () => setClick(false);
//   return (
//     <div>
//     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
//     <nav className="nav" onClick={e => e.stopPropagation()}>
//     <div className="nav-icon" onClick={handleClick}>
//             <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
//       </div>
//       <Link to="/">
//         <h3>WAT</h3>
//       </Link>
//       <div className='navbar-collapse collapse'>
//         <ul className={click ? "nav-menu active" : "navbar-nav"}>
//             <li className="nav-item"><Link to="/">Home </Link></li>
//             <li className="nav-item"><Link to="/dns">DNS</Link></li>
//             <li className="nav-item"><Link to="/lookup">IP Lookup</Link></li>
//             <li className="nav-item"><Link to="/advanced">Advanced</Link></li>
//             <li className="nav-item"><Link to="/csf">CSF</Link></li>
//             <li className="nav-item"><Link to="/restore">RsyncRestore</Link></li>
//             <li className="nav-item"><Link to="/">Readme</Link></li>
//             <li className="nav-item"><Link to="/">About</Link></li>
//         </ul>
//       </div>
//       </nav>
//       </div>
  
//   )
// }

// export default Header

function Header() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
        <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
          <Link exact to="/" className="nav-logo">
            WAT
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
            <Link to="/"  className="nav-links">Home </Link>
            </li>
            <li className="nav-item">
            <Link to="/dns"  className="nav-links">DNS</Link>
            </li>
            <li className="nav-item">
            <Link to="/lookup"  className="nav-links">IP Lookup</Link>
            </li>
            <li className="nav-item">
            <Link to="/advanced" className="nav-links">Advanced</Link>
            </li>
            <li className="nav-item">
            <Link to="/csf"  className="nav-links">CSF</Link>
            </li>
            <li className="nav-item" >
            <Link to="/restore"  className="nav-links">RsyncRestore</Link>
            </li>
            <li className="nav-item">
            <a href="https://wizardassistant.app/README.md" className="nav-links">Readme</a>
            </li>
            <li className="nav-item">
            <a href="https://wizardassistant.com" className="nav-links">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </ div>
  );
}

export default Header