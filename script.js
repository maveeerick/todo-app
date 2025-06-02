function addTodo() {
  const input = document.getElementById('todo-input');
  const todoText = input.value.trim();

  if (todoText === '') return;

  const li = document.createElement('li');
  li.textContent = todoText;

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖';
  deleteBtn.style.marginLeft = '10px';
  deleteBtn.style.background = 'transparent';
  deleteBtn.style.border = 'none';
  deleteBtn.style.color = 'red';
  deleteBtn.style.cursor = 'pointer';
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);

  document.getElementById('todo-list').appendChild(li);
  input.value = '';
}
