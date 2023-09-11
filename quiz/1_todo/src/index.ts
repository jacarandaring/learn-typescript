// type Todo = {
interface Todo {
  id: number,
  title: string,
  done: boolean,
};

// let todoItems: any;
// let todoItems: Array<object>;
// let todoItems: { id: number, title: string, done: boolean }[];
let todoItems: Todo[];

// api
// function fetchTodoItems(): Array<{ id: number, title: string, done: boolean }> {
function fetchTodoItems(): Array<Todo> {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): Array<object> {
  const todos = fetchTodoItems();
  return todos;
}

// function addTodo(todo: object): void {
// function addTodo(todo: { id: number, title: string, done: boolean }): void {
function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

// function completeTodo(index: number, todo: { done: boolean }): void {
function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted(): Array<object> {
  return todoItems.filter(item => item.done); // [CHECK] object 타입 정의 -> 각 속성까지 명시하는 경우 해결됨
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  addTodo({
    id: 4,
    title: '4',
    done: false,
  });
  addTodo({
    id: 5,
    title: '5',
    done: false,
  });
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
