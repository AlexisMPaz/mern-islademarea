import Link from "next/link"


export function Header() {

  return (
    <header className="container-fluid navContainer">
      <nav className="container navbar navbar-expand justify-content-around nav">
        <Link className="navbar-brand" href="/">
          <img className="logo" src="/logo.png" alt="Logo Isla de marea, guías para Path of Exile" width="224" />
        </Link>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav menu text-center">

            <li className="nav-item">
              <Link className="nav-link link" href="/products">Productos</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link link" href="/chat">Chat</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link link" href="/login">Login</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link link" href="/cart"><i className="bi bi-cart"></i></Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link link" href="/logout"><i className="bi bi-box-arrow-right"></i></Link>
            </li>
          </ul>
        </div>
      </nav>

    </header>
  )
}