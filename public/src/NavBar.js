import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Home Printer
      </a>

      <ul>
        <CustomLink href="/print">Print</CustomLink>
        <CustomLink href="/scan">Scan</CustomLink>
        <CustomLink href="/copy">Copy</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname
  return (
    <li className={path === href ? "active": ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  )
}
