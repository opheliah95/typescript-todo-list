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
  createNewTask(task);
});

const createNewTask = (task: Task) => {
  const item = document.createElement('li');
  // html label
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  // add extra item
  label.append(task.title, checkbox);
  item.append(label);
  list?.append(item);
};
