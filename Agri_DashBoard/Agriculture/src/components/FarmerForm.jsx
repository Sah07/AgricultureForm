import { useState } from 'react'

import {
  CCard,
  CCardBody,
  CCardTitle,
  CForm,
  CFormInput,
  CFormSelect,
  CButton,
  CAlert,
  CRow,
  CCol,
} from '@coreui/react'

export default function FarmerForm({
  addFarmer,
}) {

  const [success, setSuccess] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    crop: '',
    location: '',
    land: '',
    notes: '',
  })

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    addFarmer(formData)

    setSuccess(true)

    setFormData({
      name: '',
      phone: '',
      crop: '',
      location: '',
      land: '',
      notes: '',
    })
  }

  return (
    <CCard className="card-shadow">

      <CCardBody>

        <CCardTitle className="text-success fw-bold mb-4">
          Farmer Registration Form
        </CCardTitle>

        <CForm onSubmit={handleSubmit}>

          <CRow>

            <CCol md={6}>
              <div className="mb-3">
                <label>Farmer Name</label>

                <CFormInput
                  placeholder="Enter farmer name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </CCol>

            <CCol md={6}>
              <div className="mb-3">
                <label>Phone Number</label>

                <CFormInput
                  placeholder="Enter phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </CCol>

          </CRow>

          <div className="mb-3">

            <label>Farm Location</label>

            <CFormInput
              placeholder="Enter farm location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />

          </div>

          <div className="mb-3">

            <label>Crop Type</label>

            <CFormSelect
              name="crop"
              value={formData.crop}
              onChange={handleChange}
            >
              <option>Select crop type</option>
              <option>Rice</option>
              <option>Vegetables</option>
              <option>Maize</option>
              <option>Wheat</option>
            </CFormSelect>

          </div>

          <CRow>

            <CCol md={6}>
              <div className="mb-3">

                <label>Land Size</label>

                <CFormInput
                  placeholder="Enter land size"
                  name="land"
                  value={formData.land}
                  onChange={handleChange}
                />

              </div>
            </CCol>

            <CCol md={6}>
              <div className="mb-3">

                <label>Additional Notes</label>

                <CFormInput
                  placeholder="Enter notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                />

              </div>
            </CCol>

          </CRow>

          <CButton
            type="submit"
            color="success"
            className="mt-2"
          >
            Submit Form
          </CButton>

          {success && (
            <CAlert
              color="success"
              className="mt-4"
            >
              Farmer details submitted successfully!
            </CAlert>
          )}

        </CForm>

      </CCardBody>

    </CCard>
  )
}