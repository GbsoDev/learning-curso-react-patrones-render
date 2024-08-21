import './App.css';
import React from 'react';
import { CreateTodoButton } from '../Todo/CreateTodoButton';
import { TodoCounter } from '../Todo/TodoCounter';
import { TodoItem } from '../Todo/TodoItem';
import { TodoList } from '../Todo/TodoList';
import { TodoSearch } from '../Todo/TodoSearch';
import { TodosLoading } from '../Todo/TodosLoading';
import { TodosError } from '../Todo/TodosError';
import { EmptyTodos } from '../Todo/EmptyTodos';
import { Modal } from '../Modal';
import { TodoForm } from '../Todo/TodoForm';
import { TodoHeader } from '../Todo/TodoHeder';
import { useTodo } from './useTodo';

function App() {
  const {
    todos,
    totalTodos,
    completedTodos,
    filteredTodos,
    loading,
    error,
    completeTodo,
    deleteTodo,
    modalState,
    searchValue,
    setSearchValue,
    setModalState,
    addTodo
  } = useTodo();
  return (
    <>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      <TodoList>
        {loading && <><TodosLoading /><TodosLoading /><TodosLoading /></>}
        {error && <TodosError />}
        {(!loading && !error && todos.length === 0) && <EmptyTodos />}
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton onClick={() => setModalState(state => !state)} />
      {modalState &&
        <Modal>
          <TodoForm addTodo={addTodo} setModalState={setModalState} />
        </Modal>
      }
    </>
  );
}
export default App;