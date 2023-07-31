import { useState } from "react";
import TodoTopArea from "./TodoTopArea";
import TodoHomeTodoRender from "./TodoHomeTodoRender";

const TodoHome = () => {
  const [TodoStage, setTodoStage] = useState("all");
  return (
    <div className=" flex-1 w-full h-full">
      <TodoTopArea setTodoStage={setTodoStage} TodoStage={TodoStage} />
      <TodoHomeTodoRender setTodoStage={setTodoStage} TodoStage={TodoStage} />
    </div>
  );
};

export default TodoHome;
