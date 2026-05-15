import './App.css';
import { useState } from "react";
import emailjs from '@emailjs/browser'

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const isFormInvalid = name.trim() === '' || email.trim() === '' || message.trim() === '';

  function handdleSubmit(event){
    event.preventDefault();

    if(name.trim() === '' || email.trim() === '' || message.trim() === ''){
      alert("Preencha TODOS os campo!")
    }

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      const templateParams = {
      from_name: name,
      email: email,
      message: message
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) =>{
      alert("MENSAGEM ENVIADA COM SUCESSO!");
      console.log("EMAIL ENVIADO!", response.status, response.text)
      setName('');
      setEmail('');
      setMessage('');
    })
}


  return (
    <div className="App">

      <h1 className="title">Contato-Email</h1>

      <form className="form" onSubmit={handdleSubmit}>

        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" disabled={isFormInvalid} />
      </form> 
    </div>
  );
}

export default App;
