import { useState } from "react";
import styles from "./index.module.css";
import SQLlogo from "./assets/sql.png";

function App() {
  const [queryDesc, setQueryDesc] = useState("");
  const [sqlQuery, setSqlQuery] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const generatedQuery = await generateQuery();
    setSqlQuery(generatedQuery);
  };

  const generateQuery = async () => {
    const res = await fetch("http://localhost:3000/generate", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ queryDesc }),
    });

    const data = await res.json();
    return data.response;
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
        <pre>{sqlQuery}</pre>
      </form>
    </main>
  );
}

export default App;
