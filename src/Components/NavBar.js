import React from 'react'
import { Link } from "react-router-dom"
// import PropTypes from 'prop-types'

const NavBar = (props) => {


    // static propTypes = {

    // }


    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg" data-base-theme="light" style={{ backgroundColor: "#002e5b", color: "white" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{ color: "white" }}>NewsMonkey</a>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                    <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon "></span>
                    </button>

                    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                    <div className="offcanvas offcanvas-end justify-content-center " style={{ backgroundColor: "#002e5b", color: "white" }} tabIndex="-1"
                        id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title " to="/" id="offcanvasDarkNavbarLabel">NewsMonkey</h5>
                            <button type="button" className="btn-close btn-close-white " data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end align-items-center" style={{ color: "white" }}>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/" style={{ color: "white" }}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/general" style={{ color: "white" }}>General</Link>
                                </li>

                                <li className="nav-item"><Link to="/business" aria-current="page" className="nav-link" style={{ color: "white" }}>Business</Link></li>
                                <li className="nav-item"><Link to="/entertainment" aria-current="page" className="nav-link" style={{ color: "white" }}>Entertainment</Link></li>
                                <li className="nav-item"><Link to="/health" aria-current="page" className="nav-link" style={{ color: "white" }}>Health</Link></li>
                                <li className="nav-item"><Link to="/science" aria-current="page" className="nav-link" style={{ color: "white" }}>Science</Link></li>
                                <li className="nav-item"><Link to="/sports" aria-current="page" className="nav-link" style={{ color: "white" }}>Sports</Link></li>
                                <li className="nav-item"><Link to="/technology" aria-current="page" className="nav-link" style={{ color: "white" }}>Technology</Link></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default NavBar
