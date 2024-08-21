import './TodoList.css';

// export function TodoList(props) 
export function TodoList({ 
  loading,
  onLoading,
  error,
  onError,
  isEmpty,
  onIsEmpty,
  filteredTodos,
  searchText, 
  render,
}) 
{
  return (
    <section className="TodoList-container">
    {loading && onLoading}
    {error && onError}
    {(!loading && !isEmpty) && onIsEmpty('There are no TODOS')}
    {(isEmpty && !filteredTodos.length) && onIsEmpty(`There are not results for ${searchText}`)}
    <ul className="TodoList">
      {filteredTodos.map(render)}
    </ul>
    </section>
  );
}