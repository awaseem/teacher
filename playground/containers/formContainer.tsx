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
      <div style={{ flex: 1 }}>
        <JSONFrom
          formData={formData}
          schema={schema}
          onChange={({ formData }) => setFormData(formData)}
        />
      </div>
      <div style={{ flex: 1, overflow: 'hidden', overflowX: 'scroll' }}>
        <JSONViewer object={formData} />
      </div>
    </Container>
  )
}
