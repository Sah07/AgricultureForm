import {
  CCard,
  CCardBody,
  CCardTitle,
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CBadge,
} from '@coreui/react'

export default function FarmerTable({
  farmers,
}) {

  return (
    <CCard className="card-shadow">

      <CCardBody>

        <div className="d-flex justify-content-between align-items-center mb-4">

          <CCardTitle className="text-success fw-bold">
            Registered Farmers Report
          </CCardTitle>

          <CButton color="success">
            Export
          </CButton>

        </div>

        <CTable hover responsive bordered>

          <CTableHead color="light">

            <CTableRow>

              <CTableHeaderCell>#</CTableHeaderCell>
              <CTableHeaderCell>Farmer Name</CTableHeaderCell>
              <CTableHeaderCell>Phone Number</CTableHeaderCell>
              <CTableHeaderCell>Crop</CTableHeaderCell>
              <CTableHeaderCell>Location</CTableHeaderCell>
              <CTableHeaderCell>Land Size</CTableHeaderCell>
              <CTableHeaderCell>Status</CTableHeaderCell>
             

            </CTableRow>

          </CTableHead>

          <CTableBody>

            {farmers.map((farmer, index) => (

              <CTableRow key={index}>

                <CTableDataCell>
                  {farmer.id}
                </CTableDataCell>

                <CTableDataCell>
                  {farmer.name}
                </CTableDataCell>

                <CTableDataCell>
                  {farmer.phone}
                </CTableDataCell>

                <CTableDataCell>
                  {farmer.crop}
                </CTableDataCell>

                <CTableDataCell>
                  {farmer.location}
                </CTableDataCell>

                <CTableDataCell>
                  {farmer.land}
                </CTableDataCell>

                <CTableDataCell>

                  <CBadge color="success">
                    {farmer.status}
                  </CBadge>

                </CTableDataCell>


              </CTableRow>

            ))}

          </CTableBody>

        </CTable>

      </CCardBody>

    </CCard>
  )
}