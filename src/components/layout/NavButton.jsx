import '../styles/button.scoped.scss'

import { Link } from 'react-router-dom'

export const NavButton = ({ url, label, ...props }) => {
  return (
    <Link to={url} className="button" {...props}>
      {label}
    </Link>
  )
}
