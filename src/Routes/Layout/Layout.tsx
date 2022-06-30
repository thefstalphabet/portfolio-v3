import { Outlet } from 'react-router-dom'
import { MenuBar } from '../../Components'

function Layout() {
  return (
    <div>
        <MenuBar/>
        <Outlet/>
    </div>
  )
}

export default Layout