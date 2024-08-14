const apiUrl = "http://localhost:3000/todos/";
const headerOptions = {
  "Content-Type": "application/json",
};
let todos = [];

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// GET!!!!!!!!!!!!!!!!!!!!!!!!!
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

getAllTodos();
async function getAllTodos() {
  const response = await fetch(apiUrl);
  const data = await response.json();

  todos = data;
  console.log(todos);

  updateTodo();
}
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// POST REQUEST!!!!!!!!!!!!!!!
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// postNewTodo();
async function postNewTodo() {
  const newTodo = {
    description: "Learn Fetch Methods",
    done: false,
  };

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: headerOptions,
    body: JSON.stringify(newTodo),
  });
  const data = await response.json();

  console.log(data);
}
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// PUT!!!!!!!!!!!!!!!!!!!!!!!!
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

async function updateTodo() {
  const todo = todos[0];
  todo.description = "Ich wurde verändert";

  const response = await fetch(apiUrl + todo.id, {
    method: "PUT",
    headers: headerOptions,
    body: JSON.stringify(todo),
  });
  const data = await response.json();

  console.log(data);
}
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// DELETE!!!!!!!!!!!!!!!!!!!!!!
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// deleteNewTodo();
async function deleteNewTodo() {
  await fetch(apiUrl + 9, {
    method: "DELETE",
  });
}
