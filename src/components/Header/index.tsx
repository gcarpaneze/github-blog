import { Outlet } from 'react-router-dom'
import { Head } from './styles'

import HeaderImage from '../../assets/Cover.svg'

export function Header() {
  return (
    <>
      <Head>
        <img alt="" src={HeaderImage} />
      </Head>
      <Outlet />
    </>
  )
}
