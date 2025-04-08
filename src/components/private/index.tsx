import Counter from "./counter";

function Private({ user, setLogin }) {
    const handleLogout = () => {
        setLogin(false);
    }

  return (
    <>
      <h1>Private</h1>
      <p>Welcome {user.name}</p>
      <Counter />
      <p><button type="button" onClick={handleLogout}>Logout</button></p>
    </>
  );
}
export default Private;