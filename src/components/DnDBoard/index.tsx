import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import DndListElement from "../DnDListElement";
import styles from "./DnDBoard.module.scss";

interface DnDBoardProps {
  columns: {
    id: string;
    title: string;
    content: string;
  }[][];
}

export const DnDBoard = ({ columns }: DnDBoardProps) => (
  <div className={styles.container}>
    <DragDropContext onDragEnd={() => {}}>
      {columns.map((column, index) => (
        <Droppable key={index} droppableId={`${index}`}>
          {(provided) => (
            <>
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={styles.list}
              >
                {column.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={`${item.id}`}
                    index={index}
                  >
                    {(provided) => (
                      <li className={styles.listItem}>
                        <DndListElement
                          title={item.content}
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
            </>
          )}
        </Droppable>
      ))}
    </DragDropContext>
  </div>
);
