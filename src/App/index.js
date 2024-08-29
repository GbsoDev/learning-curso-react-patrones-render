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
import { ChangeAlert } from '../Todo/ChangeAlert';

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
    addTodo,
    sincronuzeTodos,
  } = useTodo();
  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
      <TodoList
        loading={loading}
        onLoading={<TodosLoading />}
        error={error}
        onError={<TodosError />}
        isEmpty={!!todos.length}
        searchText={searchValue}
        onIsEmpty={(message) => <EmptyTodos message={message} />}
        filteredTodos={filteredTodos}
      >
          {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>
      <CreateTodoButton onClick={() => setModalState(state => !state)} />
      {modalState &&
        <Modal>
          <TodoForm addTodo={addTodo} setModalState={setModalState} />
        </Modal>
      }
      <ChangeAlert sincronize={sincronuzeTodos}/>
      </>
  );
}
export default App;