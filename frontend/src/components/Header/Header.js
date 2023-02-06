import React, { useState } from 'react'
import { Container } from './Header.styles'
import { FaBars } from 'react-icons/fa'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <Container>
      <FaBars onClick={showSiderbar} />
    </Container>
  )
}

export default Header