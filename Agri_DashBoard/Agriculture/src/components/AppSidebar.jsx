import {
  CSidebar,
  CSidebarNav,
  CSidebarBrand,
  CNavItem,
  CNavTitle,
  CNavLink,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

import {
  cilSpeedometer,
  cilPeople,
  cilLeaf,
  cilStorage,
  cilDescription,
  cilChart,
  cilSettings,
  cilUser,
  cilLockLocked,
  cilAccountLogout,
} from '@coreui/icons'

export default function AppSidebar() {

  return (
    <CSidebar visible className="sidebar-custom bg-green">

    <div className='bg-success text-white p-3 d-flex align-items-center gap-2'>
      <h2 className='text-white fw-bold fs-4'>Agriculture System</h2>
    </div>
     

      <CSidebarNav>

        <CNavItem>
          <CNavLink active>
            <CIcon icon={cilSpeedometer} className="me-2" />
            Dashboard
          </CNavLink>
        </CNavItem>

        <CNavTitle>MANAGEMENT</CNavTitle>

        <CNavItem>
          <CNavLink>
            <CIcon icon={cilPeople} className="me-2" />
            Farmers
          </CNavLink>
        </CNavItem>

        <CNavItem>
          <CNavLink>
            <CIcon icon={cilLeaf} className="me-2" />
            Crops
          </CNavLink>
        </CNavItem>

        <CNavItem>
          <CNavLink>
            <CIcon icon={cilStorage} className="me-2" />
            Inventory
          </CNavLink>
        </CNavItem>

        <CNavItem>
          <CNavLink>
            <CIcon icon={cilDescription} className="me-2" />
            Requests
          </CNavLink>
        </CNavItem>

        <CNavItem>
          <CNavLink>
            <CIcon icon={cilChart} className="me-2" />
            Reports
          </CNavLink>
        </CNavItem>

        <CNavTitle>SYSTEM</CNavTitle>

        <CNavItem>
          <CNavLink>
            <CIcon icon={cilUser} className="me-2" />
            Users
          </CNavLink>
        </CNavItem>

        <CNavItem>
          <CNavLink>
            <CIcon icon={cilLockLocked} className="me-2" />
            Roles & Permissions
          </CNavLink>
        </CNavItem>

        <CNavItem>
          <CNavLink>
            <CIcon icon={cilSettings} className="me-2" />
            Settings
          </CNavLink>
        </CNavItem>



      </CSidebarNav>
    </CSidebar>
  )
}