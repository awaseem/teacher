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
  const JSONString = object ? JSON.stringify(object, null, 2) : '[]'

  return (
    <ViewerDiv>
      <div>
        <button
          onClick={() => copyToClipboard(JSONString)}
          className="btn btn-info btn-add col-xs-12"
        >
          Copy to clipboard
        </button>
      </div>
      <div>{JSONString}</div>
    </ViewerDiv>
  )
}

async function copyToClipboard(value: string) {
  await navigator.clipboard.writeText(value)
}
