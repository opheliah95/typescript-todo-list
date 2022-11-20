import { v4 as uuidv4 } from 'uuid';// intergrate uuid

const form = document.querySelector<HTMLFormElement>('#new-task-form');
const list = document.querySelector('#list') as HTMLUListElement;
const input = document.querySelector<HTMLInputElement>('#new-task-title');

// listens to input event
input?.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent how by default click is handled

  // handle null input
  if (input.value == null || input.value?.trim() == '') {
    console.log('empty output');
    return;
  }

  // create a task to do list
  const task = {
    id: uuidv4(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };

  console.log(task);
});
