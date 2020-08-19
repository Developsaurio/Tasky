import React from 'react';

const App = (props)=>{
  return (
    <form action="/api/lead" method="POST">
      <div className="p">
        <label>
          <span className="ui-label">
            Nombre
          </span>
          <br/>
          <input type="text" className="inputtext full" placeholder="Nombre y apellidos" name="nombre" required autofocus/>
        </label>
      </div>
      <div className="p">
        <label>
          <span className="ui-label">
            Email
          </span>
          <br/>
          <input type="email" className="inputtext full" placeholder="ejemplo@empresa.com" name="email" required/>
        </label>
      </div>
      <div className="p">
        <label>
          <span className="ui-label">
            Teléfono
          </span>
          <br/>
          <input type="tel" className="inputtext full" placeholder="10 dígitos" name="telefono" required max="10" min="10"/>
        </label>
      </div>
      <div className="p">
        <button type="submit" className="button">Enviar</button>
      </div>
    </form>
  );
}

export default App;
