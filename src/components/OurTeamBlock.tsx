import React from 'react'
import styled from '@emotion/styled'
import Block from '@/components/Block'

const Team = styled.ul`
  padding: 0;
  margin-top: 58px;
  display: flex;
`

const Member = styled.li`
  margin-left: 80px;
  list-style-type: none;

  &:first-child {
    margin-left: 0;
  }
`

const Name = styled.header`
  margin-top: 12px;
  font-size: 24px;
  font-weight: 800;
`

const Avatar = styled.div`
  width: 280px;
  height: 280px;
  list-style-type: none;
  background-color: #f1d63f;
`

const OurTeamBlock = () => (
  <Block header={'Our team'}>
    <Team>
      <Member>
        <Avatar />
        <Name>
          John Richards
        </Name>
      </Member>
      <Member>
        <Avatar />
        <Name>
          John Richards
        </Name>
      </Member>
      <Member>
        <Avatar />
        <Name>
          John Richards
        </Name>
      </Member>
    </Team>
  </Block>
)

export default OurTeamBlock
