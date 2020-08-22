import React, { useState } from 'react';

const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexPhone = /^[0-9]{1,9}$/ 

const App = (props)=>{

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [phone, setPhone] = useState("")

const [errors, setErrors] = useState({
  name: false,
  email: false,
  phone: false
})

const setField = (e) => {

  const fieldName = e.target.name
  const fieldValue = e.target.value

  switch (fieldName) {
    case "name":
    fieldValue.split(" ").every(w => w.length > 0)
    && fieldValue.split(" ").length > 1
      ? setErrors({...errors, name: false})
      : setErrors({...errors, name: true})
      setName(fieldValue)
      break
    case "email":
      regexEmail.test(fieldValue.toLowerCase())
      ? setErrors({...errors, email: false})
      : setErrors({...errors, email: true})
      setEmail(fieldValue)
      break
    case "phone":
      regexPhone.test(fieldValue) 
       ? setErrors({...errors, phone: true})
       : setErrors({...errors, phone: false})
      setPhone(fieldValue)
      break
  }
}

return (
    <form action="/api/lead" method="POST">
      <div className="p">
        <label>
          <span className="ui-label">
            Nombre 
          </span>
          {
            errors.name && <span className="text-error"> Error! debes incluir nombre y apellido :(</span>
          }
          <br/>
          <input type="text" 
            className="inputtext full" 
            placeholder="Nombre y apellidos"
            name="name" value={name} 
            onChange={setField}
            required autofocus/>
        </label>
      </div>
      <div className="p">
        <label>
          <span className="ui-label">
            Email 
          </span>
          {
            errors.email && <span className="text-error"> Introduzca un correo válido :(</span>
          }
          <br/>
          <input type="email" 
          className="inputtext full" 
          placeholder="ejemplo@empresa.com" 
          name="email" 
          value={email} 
          onChange={setField}
          required/>
        </label>
      </div>
      <div className="p">
        <label>
          <span className="ui-label">
            Teléfono 
          </span>
          {
            errors.phone && <span className="text-error"> Introduzca un número válido(10 dígitos)</span>
          }
          <br/>
          <input type="tel" 
          className="inputtext full" 
          placeholder="10 dígitos" 
          name="phone" 
          value={phone} 
          required max="10" 
          onChange={setField}
          min="10"/>
        </label>
      </div>
      <div className="p">
        <button type="submit" className="button">Enviar</button>
      </div>
    </form>
  );
}
 
export default App;
