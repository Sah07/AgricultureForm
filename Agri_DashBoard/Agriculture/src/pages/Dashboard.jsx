import { useState } from 'react'

import {
  CContainer,
  CRow,
  CCol,
} from '@coreui/react'

import AppSidebar from '../components/AppSidebar'
import AppHeader from '../components/AppHeader'
import DashboardCards from '../components/DashboardCards'
import FarmerForm from '../components/FarmerForm'
import FarmerTable from '../components/FarmerTable'


export default function Dashboard() {

  const [farmers, setFarmers] = useState([
    {
      id: 1,
      name: 'Ram Sharma',
      phone: '9812345678',
      crop: 'Rice',
      location: 'Kathmandu',
      land: '2.5',
      status: 'Active',
     
    },
    {
      id: 2,
      name: 'Sita Rai',
      phone: '9823456789',
      crop: 'Vegetables',
      location: 'Pokhara',
      land: '1.2',
      status: 'Pending',
    
    },
     {
      id: 3,
      name: 'Sarita Neupane',
      phone: '9823456789',
      crop: 'Vegetables',
      location: 'Pokhara',
      land: '1.7',
      status: 'Active',
    
    },
  ])

  // AJAX REQUEST
  const addFarmer = async (farmerData) => {

    try {

      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(farmerData),
        }
      )

      const data = await response.json()

      console.log(data)

      const newFarmer = {
        ...farmerData,
        id: farmers.length + 1,
        status: 'Active',
        date: new Date().toISOString().split('T')[0],
      }

      setFarmers([...farmers, newFarmer])

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="d-flex">

      <AppSidebar />

      <div className="main-wrapper">

        <AppHeader />

        <CContainer fluid className="p-4">

          <DashboardCards totalFarmers={farmers.length} />

          <CRow className="mt-4">

            <CCol lg={4}>
              <FarmerForm addFarmer={addFarmer} />
            </CCol>

            <CCol lg={8}>
              <FarmerTable farmers={farmers} />
            </CCol>

          </CRow>

        </CContainer>
      </div>
    </div>
  )
}