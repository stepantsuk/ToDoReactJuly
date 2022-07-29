export const sortTodos = (selectedSort, todos) => {
  switch (selectedSort) {
    case "value":
      return [...todos].sort((a, b) => {
        return a[selectedSort].localeCompare(b[selectedSort]);
      });
    case "id":
      return [...todos].sort((a, b) => {
        return a[selectedSort] - b[selectedSort];
      });
    case "complete":
      return [
        ...todos.filter((item) => item.complete === false),
        ...todos.filter((item) => item.complete === true),
      ];
    default:
      return todos;
  }
};
