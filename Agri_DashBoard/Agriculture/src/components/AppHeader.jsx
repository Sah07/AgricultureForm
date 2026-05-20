import {
  CHeader,
  CHeaderBrand,
} from '@coreui/react'

export default function AppHeader() {

  return (
    <CHeader className="top-header px-4 text-white">

      <CHeaderBrand className="text-white fw-bold">
        Dashboard
      </CHeaderBrand>

      <div className="ms-auto d-flex align-items-center gap-4">

        <i className="cil-bell fs-5"></i>
    </div>

    </CHeader>
  )
}