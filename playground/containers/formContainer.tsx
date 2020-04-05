import React from 'react'

import JSONSchema from '../../JSONSchema/schema.json'
import { Container } from '../components/container'
import { JSONFrom } from '../components/form'

const schema = JSONSchema

export function FormContainer() {
  return (
    <Container>
      <JSONFrom
        schema={schema}
        onChange={event => console.log(event.formData)}
      />
    </Container>
  )
}
