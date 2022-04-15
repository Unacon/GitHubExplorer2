import { useState, useEffect } from "react/cjs/react.production.min";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

// https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
  const [repositorios, setRepositorios] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositorios(data));
  }, []);

  return (
    <section className="repositoryList">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositorios.map((repositorio) => {
          console.log(repositorio);
          return (
            <RepositoryItem key={repositorio.name} repositorio={repositorio} />
          );
        })}
      </ul>
    </section>
  );
}
