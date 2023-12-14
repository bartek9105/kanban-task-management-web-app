import { MainLayout } from "./components/MainLayout";
import { DnDBoard } from "./components/DnDBoard";

const ITEMS = Array.from({ length: 10 }, (v, k) => k).map((k) => ({
  id: `item-${Math.random()}`,
  title: "TODO",
  content: `item ${k}`,
}));

const ITEMS_2 = Array.from({ length: 10 }, (v, k) => k).map((k) => ({
  id: `item-${Math.random()}`,
  title: "IN PROGRESS",
  content: `item for second column ${k}`,
}));

const columns = [ITEMS, ITEMS_2];

function App() {
  return (
    <MainLayout>
      <DnDBoard columns={columns} />
    </MainLayout>
  );
}

export default App;
