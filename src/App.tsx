import { useState } from 'react';

import Private from "./components/private";
import Public from "./components/public";

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({
    name: 'Jesus Estrada',
    email: 'jesusdavide@uninorte.edu.co',
  });
  
  return (
    <>
      { login ? 
        <Private user={user} setLogin={setLogin} />
      :
        <Public setLogin={setLogin} />
    }
    </>
  )
}

export default App;
