import { Counter } from "./components/Counter";
import { RepositoryList } from "./components/RepositoryList";
import "react";
import "./styles/global.scss";

export function App() {
  return (
    <div>
      <RepositoryList />
      {/* <Counter /> */}
    </div>
  );
}
