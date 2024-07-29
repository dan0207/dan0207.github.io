import { NavLink } from "react-router-dom"
import { useContext } from 'react'
import Logo from '../../assets/logo.png'
import LogoDark from '../../assets/logo-dark.png'
import ThemeSwitch from '../../components/ThemeSwitch'
import ThemeContext from '../../contexts/ThemeContext'

const pages = [
    { page: 'Home', link: '' },
    { page: 'Books', link: 'books' },
    { page: 'Services', link: 'services' },
    { page: 'Acquisitions', link: 'acquisitions' },
    { page: 'Login', link: 'login' },
]


function Header() {

    const { darkMode } = useContext(ThemeContext)


    const listPages = pages.map((page, index) =>
        <NavLink key={index} className={({ isActive }) =>
            `px-3 py-1 btn rounded-pill border border-0 ${isActive ? 'btn-primary' : ''}`
        } to={page.link}>{page.page}</NavLink>
    )

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow p-0 sticky-top">
                <div className="container-fluid d-flex px-4">

                    <a className="navbar-brand" href="./index.html">
                        <img className='img-fluid img-responsive' src={darkMode ? LogoDark : Logo} alt="Cavite State University Tanza Campus Library" width="180" />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <form className="d-flex me-4 mx-auto w-50" role="search">
                            <input className="form-control rounded-end-0" type="search" placeholder="Search library collection here.." aria-label="Search" />
                            <button className="btn btn-outline-primary rounded-start-0" type="submit">Search</button>
                        </form>

                        <nav className="navbar-nav mb-2 mb-lg-0 ms-auto">
                            {listPages}
                        </nav>

                        <ThemeSwitch />
                    </div>
                </div>
            </nav>
        </>
    )
}



export default Header