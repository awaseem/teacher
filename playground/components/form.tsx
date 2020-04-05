import React from 'react'
import Form, { IChangeEvent } from 'react-jsonschema-form'

export interface JSONFromProps {
  formData: Object
  schema: Object
  onChange: (event: IChangeEvent) => void
}

const uiSchema = {
  items: {
    content: {
      'ui:widget': 'textarea',
    },
    code: {
      'ui:widget': 'textarea',
    },
    answers: {
      items: {
        correct: {
          'ui:widget': 'select',
        },
      },
    },
  },
}

export function JSONFrom({ schema, onChange, formData }: JSONFromProps) {
  return (
    <Form
      uiSchema={uiSchema}
      formData={formData}
      schema={schema}
      onChange={onChange}
    />
  )
}
