document.addEventListener('DOMContentLoaded', () => {
  let form = document.getElementById('create-task-form');
  form.addEventListener('submit', (e) => {
    let formInput = document.getElementById('new-task-description');
    e.preventDefault();
    createToDoItem(formInput.value);
  });
});

const createToDoItem = (toDoText) => {
  let toDoList = document.querySelector('#tasks');
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'x';
  li.innerText = `${toDoText} `;
  li.appendChild(btn);
  toDoList.appendChild(li);
};

const handleDelete = (e) => {
  e.target.parentNode.remove();
};
