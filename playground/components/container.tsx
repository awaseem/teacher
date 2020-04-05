import React from 'react'
import styled from 'styled-components'

export interface ContainerProps {
  children: React.ReactNode
}

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3rem;
`

export function Container({ children }: ContainerProps) {
  return <ContainerDiv>{children}</ContainerDiv>
}
