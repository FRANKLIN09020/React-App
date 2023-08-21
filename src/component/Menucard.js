import React from 'react';
import {CRow,CCol,CCard,CCardText,CCardTitle,CCardBody,CButton}  from '@coreui/react';
const Menucard = () => {
  return (
    <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
    <CCol xs>
      <CCard className='m-4'>
       <img src={require("../Assets/image4.jpg")} alt="image1"  />
        <CCardBody>
          <CCardTitle>Mutton Biriyani</CCardTitle>
          <CCardText>
          Hurry! Taste it!
          </CCardText>
        </CCardBody>
        <CButton href="#">Add To Cart </CButton>
      </CCard>
    </CCol>
    <CCol xs>
      <CCard className='m-4'> 
         <img src={require("../Assets/image2.jpg")} alt="" />
        <CCardBody>
          <CCardTitle>Pulao Veg</CCardTitle>
          <CCardText>
          Hurry! Taste it!
          </CCardText>
        </CCardBody>
        <CButton href="#">Add To Cart </CButton>
      </CCard>
    </CCol>
    <CCol xs>
      <CCard className='m-4'>
      <img src={require("../Assets/image3.jpg")} alt="" />
        <CCardBody>
          <CCardTitle>Chicken Biriyani</CCardTitle>
          <CCardText>
          Hurry! Taste it!
          </CCardText>
        </CCardBody>
        <CButton href="#">Add To Cart </CButton>
      </CCard>
    </CCol>
    <CCol xs>
      <CCard className='m-4'>
      <img src={require("../Assets/image4.jpg")} alt="" />
        <CCardBody>
          <CCardTitle>Meals</CCardTitle>
          <CCardText>
           Hurry! Taste it!
          </CCardText>
        </CCardBody>
        <CButton href="#">Add To Cart </CButton>
      </CCard>
    </CCol>
  </CRow>
   
  );
}

export default Menucard;