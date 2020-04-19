import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  return isDesktop ? children : null
}

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 })
  return isTablet ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  return isMobile ? children : null
}

const NotMobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 768 })
  return isMobile ? children : null
}

const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ maxWidth: 1024 })
  return isNotMobile ? children : null
}

export {Default, Tablet, Mobile, NotMobile, Desktop};