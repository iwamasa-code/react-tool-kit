import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    idCount: 3,
    tasks: [
      {
        id: 1,
        title: "料理をする",
        completed: false,
      },
      {
        id: 2,
        title: "掃除をする",
        completed: false,
      },
      {
        id: 3,
        title: "買い物にいく",
        completed: false,
      },
    ],
  },

  reducers: {
    newTask: (state, action) => {
      //4番目のタスクが作られたら＋1をして新しくTaskを追加
      state.idCount++;
      const newItem = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [newItem, ...state.tasks];
    },

    //completedをtoggleするaction
    completeTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },
  },
});

export const { newTask, completeTask, deleteTask } = taskSlice.actions;

//useSelectorに関係する。Storeの中のStateを参照する為の処理
export const selectTasks = (state) => state.task.tasks;

export default taskSlice.reducer;
