export interface RepositoryItemProps {
  repositorio: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repositorio.name ?? "Default"}</strong>
      <p>{props.repositorio.description ?? "Formulário Padrão"}</p>
      <a href={props.repositorio.html_url ?? ""}>Acessar repostório</a>
    </li>
  );
}
