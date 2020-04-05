import React, { useState } from 'react'

import JSONSchema from '../../JSONSchema/schema.json'
import { Container } from '../components/container'
import { JSONFrom } from '../components/form'
import { JSONViewer } from '../components/JSONViewer'

const schema = JSONSchema

export function FormContainer() {
  const [formData, setFormData] = useState([])

  return (
    <Container>
      <div style={{ flex: 0.7 }}>
        <JSONFrom
          formData={formData}
          schema={schema}
          onChange={event => {
            setFormData(event.formData)
            console.log(event)
          }}
        />
      </div>
      <div style={{ flex: 0.3 }}>
        <JSONViewer object={formData} />
      </div>
    </Container>
  )
}
