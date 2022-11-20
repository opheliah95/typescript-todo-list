const form = document.querySelector<HTMLFormElement>("#new-task-form") 
const list = document.querySelector("#list") as HTMLUListElement
const input = document.querySelector<HTMLInputElement>("#new-task-title")
console.log(input?.value)