import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar navbar-expand border-bottom mb-4">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Biblio
        </Link>
        <div className="d-flex gap-2">
          <Link className="btn btn-sm btn-outline-secondary" href="/login">
            Se connecter
          </Link>
          <Link className="btn btn-sm btn-dark" href="/inscription">
            Créer un compte
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
