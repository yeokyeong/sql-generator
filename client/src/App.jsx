import { useState } from "react";
import styles from "./index.module.css";
import SQLlogo from "./assets/sql.png";

function App() {
  const [queryDesc, setQueryDesc] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(queryDesc, 111, "");
  };

  return (
    <main className={styles.main}>
      <img src={SQLlogo} alt="" className={styles.icon}></img>
      <h3>Generate SQL with AI</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query-descriptio"
          placeholder="Describe your query"
          onChange={(e) => setQueryDesc(e.target.value)}
        />
        <input type="submit" value="Generate query" />
      </form>
    </main>
  );
}

export default App;
