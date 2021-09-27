import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";

function App() {
  return (
    <>
      <h1>
        Test with React <br /> (CRUD)
      </h1>
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  );
}

export default App;
