import React from 'react'
import Card from 'react-bootstrap/Card';

function Response({response}) {
  return (
    <Card style={{width: '50%', margin: 'auto', marginTop: '2em', marginBottom: '2em', backgroundColor: '#DCDCDC'}}>
        <Card.Body>
            <Card.Title>Prompt: </Card.Title>
            <Card.Text> {response.prompt} </Card.Text>
            <Card.Title>Response: </Card.Title>
            <Card.Text> {response.response} </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Response
