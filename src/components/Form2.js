import React, { useState } from 'react'
import Response from './Response'

//For UI
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const { Configuration, OpenAIApi } = require("openai")

function Form2() {

    const [id, setId] = useState(0);
    const [responses, setResponses] = useState([]);
    const [currentPrompt, setPrompt] = useState('');
    
    let handleSubmit = (event) => {
        event.preventDefault();
    
        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_API_KEY,
          });
          const openai = new OpenAIApi(configuration);
          delete openai["axios"].defaults.headers["User-Agent"];
          
          openai.createCompletion("text-curie-001", {
            prompt: currentPrompt,
            temperature: 0.7,
            max_tokens: 50,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          })
          .then((response) => {
            console.log(response)
            let newResponse = {id: id, prompt: currentPrompt, response: response.data.choices[0].text}
            console.log(newResponse)  
            setResponses(oldResponses => [newResponse, ...oldResponses])
            setId(id + 1)
            console.log(responses)
          })
    }

    let samplePrompts = ['Write a tagline for a ice cream shop', 'Why is the sky blue?', 'Once upon a time on the rolling slopes of Scotland, there was a red dragon. It\'s gleaming skin reflected the sunlight and lit the entire grassy valley with sunshine.', 'Write a tagline for a grocery store', 'Basketball is a beautiful game. A sport built on hard work, athleticism, and finesse.']
    
    function autofillHandler() {
        setPrompt(samplePrompts[Math.floor(Math.random() * samplePrompts.length)])
    }

    
  return (
    <>
        <Form onSubmit={e => {handleSubmit(e)}}>
            <Form.Group className="mb-3" controlId='EnterPromptTextArea'>
                <Form.Label style={{color: "white", fontSize: '30px', paddingLeft: '25%'}}>Enter Prompt</Form.Label>
                <Form.Control
                    as='textarea'
                    rows={3}
                    style={{width: '50%', margin: 'auto'}}
                    value={currentPrompt}
                    onChange={e => setPrompt(e.target.value)} />
            </Form.Group>

            <Button type="submit" style={{marginLeft: '25%', fontSize: '20px'}}>Submit</Button>
            <Button class="btn btn-danger" style={{marginLeft: '1%', fontSize: '20px'}} onClick={autofillHandler}>Autofill</Button>
        </Form>

        <br />
        <br />
        <h2 style={{color: "white", marginLeft: '25%'}}>Responses</h2>
        
        { responses.length > 0 ? responses.map((response) => <Response key={response.id} response={response}/>) : <p style={{color: 'white', marginLeft: '25%'}}> Waiting for you to try submit a prompt! 🥱</p>}


        <br />
    </>
  )
}

export default Form2