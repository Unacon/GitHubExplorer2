export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repositorio?.nome ?? "Default"}</strong>
      <p>{props.repositorio?.descricao ?? "Formulário Padrão"}</p>
      <a href={props.repositorio?.link ?? ""}>Acessar repostório</a>
    </li>
  );
}
