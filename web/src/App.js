import React, { useEffect, useState } from 'react';
import api from './services/api';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';
import './global.css';
import './App.css';
import './sidebar.css';
import './main.css';

/*
  Componente: Bloco isolado de HTML, CSS e JS, o qualnão interfere no restante da aplicação
  Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)
  Propriedade: Em HTML, corresponde aos atributos.Informações que um componente pai passa para o compoente filho. 
*/

// Isso é um componente

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data){

    const response = await api.post('/devs', data);

    //setGithub_user('');
    //setTechs('');

    setDevs([...devs, response.data]);
  }

  return(
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}

        </ul>
      </main>
    </div>
  );
}

export default App;
