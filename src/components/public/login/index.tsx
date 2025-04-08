function Login({ setLogin }) {
    const handleLogin = () => {
        setLogin(true);
    }

  return (
    <>
      <p><button type="button" onClick={handleLogin}>Login</button></p>
    </>
  );
}
export default Login;