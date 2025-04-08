function Login({ setLogin, setUser }) {
    const handleLogin = () => {
        setUser({
            name: 'Jesus Estrada',
            email: 'jesusdavide@uninorte.edu.co',
          });
        setLogin(true);
    }

  return (
    <>
      <p><button type="button" onClick={handleLogin}>Login</button></p>
    </>
  );
}
export default Login;