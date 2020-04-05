import React from 'react'
import styled from 'styled-components'

export interface ContainerProps {
  children: React.ReactNode
}

const ContainerDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`

export function Container({ children }: ContainerProps) {
  return <ContainerDiv>{children}</ContainerDiv>
}
