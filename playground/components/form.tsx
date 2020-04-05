import React from 'react'
import Form, { IChangeEvent } from 'react-jsonschema-form'

export interface JSONFromProps {
  schema: Object
  onChange: (event: IChangeEvent) => void
}

export function JSONFrom({ schema, onChange }: JSONFromProps) {
  return <Form schema={schema} onChange={onChange} />
}
