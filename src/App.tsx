import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styles from "./App.module.scss";
import DndListElement from "./components/DnDListElement";
import { MainLayout } from "./components/MainLayout";

const ITEMS = Array.from({ length: 10 }, (v, k) => k).map((k) => ({
  id: `item-${k}`,
  content: `item ${k}`,
}));

function App() {
  return (
    <MainLayout>
      <DragDropContext onDragEnd={() => {}}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={styles.list}
            >
              {ITEMS.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={`${item.id}`}
                  index={index}
                >
                  {(provided) => (
                    <li className={styles.listItem}>
                      <DndListElement
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </MainLayout>
  );
}

export default App;
