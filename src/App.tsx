import { useState } from 'react';

import Private from "./components/private";
import Public from "./components/public";

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});
  
  return (
    <>
      { login ? 
        <Private user={user} setLogin={setLogin} />
      :
        <Public setLogin={setLogin} setUser={setUser} />
    }
    </>
  )
}

export default App;
