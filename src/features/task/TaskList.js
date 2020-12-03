import React from "react";
import { TaskItem } from "./TaskItem";

//useSelectorをimportしてtaskSliceで定義したselectTasksをimportする
import { useSelector } from "react-redux";
import { selectTasks } from "./taskSlice";

export const TaskList = () => {
  //tasks(ローカル変数)にuseSelector(selectTasks)をするとStore(slice)の中で保持されている状態をコンポーネント側で使える。
  const tasks = useSelector(selectTasks);
  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};
