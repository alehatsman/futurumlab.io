import React from 'react'
import styled from '@emotion/styled'
import Block from '@/components/Block'

const Points = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 58px;
  width: 58.5%;
`

const Point = styled.li`
  flex: 1 0 35%;
  list-style-type: none;

  &:nth-child(even) {
    margin-left: 180px;
  }

  &:nth-child(3) {
    margin-top: 37px;
  }

  &:nth-child(4) {
    margin-top: 37px;
  }
`

const PointHeader = styled.header`
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: 800;

  svg {
    margin-right: 17px;
  }    
`

const PointDescription = styled.p`
  margin: 17px 30px 0 0;
  font-size: 20px;
  line-height: 28px;
  color: #666;
  max-width: 392px;
`

const AnalysisIcon = () => (
  <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.09.667h21.82c1.338 0 2.423 1.326 2.423 2.963V24.37c0 1.637-1.085 2.963-2.424 2.963H3.091c-1.339 0-2.424-1.326-2.424-2.963V3.63C.667 1.993 1.752.667 3.09.667zm21.577 12V3.333H3.333v9.334h4.553l2.998 2.998 4.132-9.643L20 12.667h4.667zM3.333 15.333h3.448l5.002 5.002 3.867-9.023 3.017 4.021h6v9.334H3.333v-9.334z" fill="#000"></path></svg>
)

const DevelopmentIcon = () => (
  <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28 4H4a2.667 2.667 0 00-2.667 2.667v18.666A2.667 2.667 0 004 28h24a2.667 2.667 0 002.667-2.667V6.667A2.667 2.667 0 0028 4zM4 25.333V6.667h24v18.666H4zM11.111 16L7.2 13.067l1.6-2.134L15.555 16 8.8 21.067l-1.6-2.134L11.111 16zM16 18.667v2.666h6.667v-2.666H16z" fill="#000"></path></svg>
)

const PlanningIcon = () => (
  <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.667 8H8V6.667H5.333v4h21.334v-4H24V8h-2.667V6.667H10.667V8zm16 5.333H5.333v13.334h21.334V13.333zM21.333 4H10.667V2.667H8V4H5.333a2.667 2.667 0 00-2.666 2.667v20a2.667 2.667 0 002.666 2.666h21.334a2.667 2.667 0 002.666-2.666v-20A2.667 2.667 0 0026.667 4H24V2.667h-2.667V4zM12 18.667H9.333V16H12v2.667zm2.667 0h2.666V16h-2.666v2.667zm5.333 0V16h2.667v2.667H20zM9.333 24H12v-2.667H9.333V24zm8 0h-2.666v-2.667h2.666V24z" fill="#000"></path></svg>
)

const DeliveryIcon = () => (
  <svg alt="Delivery" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.843 9.333l2.456 4.913L28 16.714v4.62h-1.561a4.002 4.002 0 00-7.545 0h-5.788a4.002 4.002 0 00-7.545 0H4v-12h17.843zM28 24h-1.561a4.002 4.002 0 01-7.545 0h-5.788a4.002 4.002 0 01-7.545 0H4a2.667 2.667 0 01-2.667-2.667v-12A2.667 2.667 0 014 6.667h17.843c1.01 0 1.933.57 2.385 1.474l2.14 4.28 4.299 2.865v6.047A2.667 2.667 0 0128 24zm-17.333-1.333a1.333 1.333 0 11-2.667 0 1.333 1.333 0 012.667 0zm13.333 0a1.333 1.333 0 11-2.667 0 1.333 1.333 0 012.667 0z" fill="#000"></path></svg>
)

const PointsBlock = () => {
  return (
    <Block header={'What we do'}>
      <Points>
        <Point>
          <PointHeader>
            <AnalysisIcon/>
            Analysis
          </PointHeader>
          <PointDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
          </PointDescription>
        </Point>
        <Point>
          <PointHeader>
            <DevelopmentIcon/>
            Development
          </PointHeader>
          <PointDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
          </PointDescription>
        </Point>
        <Point>
          <PointHeader>
            <PlanningIcon/>
            Planning 
          </PointHeader>
          <PointDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
          </PointDescription>
        </Point>
        <Point>
          <PointHeader>
            <DeliveryIcon/>
            Delivery
          </PointHeader>
          <PointDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
          </PointDescription>
        </Point>
      </Points>
    </Block>
  )
}

export default PointsBlock
