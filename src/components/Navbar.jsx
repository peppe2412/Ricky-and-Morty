export default function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar bg-base-100 shadow-sm">
          <div className="flex-1 p-2">
            <object
              className="w-32"
              data="public/ricky and morty.svg"
              type="image/svg+xml"
            >
              Ricky and Morty
            </object>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Link</a>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li>
                      <a>Link 1</a>
                    </li>
                    <li>
                      <a>Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
