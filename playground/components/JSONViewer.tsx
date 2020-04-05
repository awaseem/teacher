import React from 'react'
import styled from 'styled-components'

const ViewerDiv = styled.div`
  margin-left: 2rem;
  white-space: pre;
`

export interface JSONViewerProps {
  object?: Object
}

export function JSONViewer({ object }: JSONViewerProps) {
  const JSONString = object ? JSON.stringify(object, null, 2) : []
  return <ViewerDiv>{JSONString}</ViewerDiv>
}
