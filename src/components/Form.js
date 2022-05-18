import React, { Component } from 'react'
import Response from './Response'

const { Configuration, OpenAIApi } = require("openai")

class Form extends Component {

constructor(props) {
  super(props)

  this.state = {
     prompt: '',
     result: '',
     responses: []
  }
}

handlePrompt = (event) => {
    this.setState({
        prompt: event.target.value
    })
}

handleSubmit = (event) => {
    event.preventDefault();
    alert(`${this.state.prompt}`)

    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_API_KEY,
      });
      const openai = new OpenAIApi(configuration);
      delete openai["axios"].defaults.headers["User-Agent"];
      
      openai.createCompletion("text-curie-001", {
        prompt: this.state.prompt,
        temperature: 0.7,
        max_tokens: 50,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((response) => {
        let newResponse = {prompt: this.state.prompt, response: response.data.choices[0].text}  
        this.setState({
            result: response.data.choices[0].text,
            responses: this.state.responses.push(newResponse)
          })
        console.log(this.state.responses)
      })
}

//{this.state.responses.map(response => <Response response={response}/>)}  

render() {
    return (
    <>
        <form onSubmit={this.handleSubmit}>
            <div>
                <h3>Enter Prompt</h3>
                <textarea
                    type='text'
                    value={this.state.prompt}
                    onChange={this.handlePrompt} />
            </div>

            <button type="submit">Submit</button>
        </form>
        <h1> {this.state.result} </h1>
    </>
    )
  }
}

export default Form

