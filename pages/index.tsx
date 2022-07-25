import type { NextPage } from "next";
import { Header } from "../components/Header";
import { TaskList } from "../components/TaskList";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <TaskList />
      <span style={{ display: 'flex', justifyContent: 'center', marginTop: 15, fontSize: 12, fontWeight: 'bold'}}>
        Feito exclusivamente para Anna Leticia Bitencourt Vasconcellos
      </span>
    </>
  );
};

export default Home;
