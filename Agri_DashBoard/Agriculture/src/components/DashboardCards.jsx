import{
  CRow,
  CCol,
  CCard,
  CCardBody,
  CProgress,
}from '@coreui/react'

import CIcon from '@coreui/icons-react'

import{
  cilPeople,
  cilLeaf,
  cilClock,
  cilWarning,
} from '@coreui/icons'

export default function DashboardCards({
  totalFarmers,
})
{
  const cards = [
    {
      title:'Total Farmers',
      value:totalFarmers,
      color:'success',
      icon:cilPeople,
    },
    {
      title:'Active Crops',
      value: 52,
      color:'primary',
      icon:cilLeaf,
    },
    {
      title:'Pending requests',
      value: 18,
      color:'warning',
      icon:cilClock,
    },
    {
      title:'Under Review',
      value:'10',
      color:'danger',
      icon:cilWarning,
    },
  ]
   return(
    <CRow>
    {cards.map((card,index)=>(
      <CCol lg={3} md={6} key={index}>
      <CCard className="card-shadow mb-4">
        <CCardBody>
          <div classname= "d-flex justify-content-between align-items-center">
          <div>
          <div className="text-medium-emphasis">
          {card.title}
          </div>
          <h2 className="fw-bold mt-2">
          {card.value}
          </h2>
          </div>
          <div className={`starts-icon bg-${card.color}`}>
          <CIcon icon={card.icon} size="xl"
          />
          </div>
          </div>
          <div className="mt-3 text-success small"> +12% from last month</div>
          <CProgress value={75}
                     color={card.color}
                     className="progress-custom mt-3"
            />
                     
          </CCardBody>
      </CCard>
      </CCol>
    ))}
    </CRow>

  
)}