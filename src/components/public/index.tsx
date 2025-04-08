import Login from './login';

function Public({ setLogin }) {

  return (
    <>
      <h1>Public</h1>
      <Login setLogin={setLogin} />
    </>
  );
}
export default Public;