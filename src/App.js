import './App.css';
import Form2 from './components/Form2';



// Access Key using variable: process.env.REACT_APP_API_KEY

function App() {
  return (
    <>
    <div className="App">
      <h1 style={{color: 'white', fontWeight: 'Bold', textAlign: 'left', marginLeft: '25%', paddingTop: '5%'}}>AI Autocomplete 🧠 </h1>
      <h2 style={{color: 'white', fontSize: '30px', textAlign: 'left', marginLeft: '25%', marginRight: '25%'}}>Stuck on an essay? Need someone to complete your thoughts? You are at the right place! Place your idea, thought, or question in the text box below and let the magic flow! 🪄</h2>
      <h3 style={{color: 'white', fontSize: '20px', textAlign: 'left', marginLeft: '25%', marginRight: '25%'}}> <em>Don't have a Prompt off the top of your head? Try the Autofill Button!</em> </h3>
      <br></br>
      <Form2/>
        
    </div>
    <p style={{color: 'white', textAlign: 'center', width: '100%', padding: '10px', backgroundColor: '#282c34'}}> Made with ❤️ by Aarsh </p>  
    </>
  );
}

export default App;
