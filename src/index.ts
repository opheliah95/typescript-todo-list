import { v4 as uuidv4 } from 'uuid'; // intergrate uuid

const form = document.querySelector<HTMLFormElement>('#new-task-form');
const list = document.querySelector('#list') as HTMLUListElement;
const input = document.querySelector<HTMLInputElement>('#new-task-title');

// custom type
type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

// load previous tasks
const loadTasks = (): Task[] => {
  const tasks_all = localStorage.getItem('TASKS');
  const tasks_arr: Task[] = tasks_all !== null ? JSON.parse(tasks_all) : [];
  return tasks_arr;
};

// function to create new task
const createNewTask = (task: Task) => {
  const item = document.createElement('li');
  // html label
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;

  // update check
  checkbox?.addEventListener('change', (e) => {
    task.completed = checkbox.checked;
    console.log(`${task.title} has been completed ${task.completed}`);
    saveTasks(tasks);
  });
  // add extra item
  label.append(task.title, checkbox);
  item.append(label);
  list?.append(item);

  // add task to array
  tasks.push(task);
};

// function to save and load task locally
const tasks: Task[] = loadTasks();
console.log(`tasks are ${tasks}`);
tasks.forEach(createNewTask);

// listens to input event
form?.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent how by default click is handled

  // handle null input
  if (input?.value == null || input?.value?.trim() == '') {
    console.log('empty output');
    return;
  }

  // create a task to do list
  const task: Task = {
    id: uuidv4(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };

  console.log(task);
  // create and save the task
  createNewTask(task);
  saveTasks(tasks);
  // set input to empty
  input.value = '';
});

// function to save task locally
const saveTasks = (tasks: Task[]) => {
  localStorage.setItem('TASKS', JSON.stringify(tasks));
};
