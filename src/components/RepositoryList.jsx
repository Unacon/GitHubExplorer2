import { RepositoryItem } from "./RepositoryItem";

const repositorio = {
  nome: "repositorio1",
  descricao: "Formulário React",
  link: "https://github.com/",
};

export function RepositoryList() {
  return (
    <section className="repositoryList">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repositorio={repositorio} />
        <RepositoryItem repository="repositorio2" />
        <RepositoryItem repository="repositorio3" />
        <RepositoryItem repository="repositorio4" />
        <RepositoryItem />
      </ul>
    </section>
  );
}
