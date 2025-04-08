import Login from './login';

function Public({ setLogin, setUser }) {

  return (
    <>
      <h1>Public</h1>
      <Login setLogin={setLogin} setUser={setUser} />
    </>
  );
}
export default Public;