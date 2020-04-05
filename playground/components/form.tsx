import React from 'react'
import Form, { IChangeEvent } from 'react-jsonschema-form'

export interface JSONFromProps {
  formData: Object
  schema: Object
  onChange: (event: IChangeEvent) => void
}

export function JSONFrom({ schema, onChange, formData }: JSONFromProps) {
  return <Form formData={formData} schema={schema} onChange={onChange} />
}
