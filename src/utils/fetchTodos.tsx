// fetchTodos.ts
export const fetchTodos = async (): Promise<string[]> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      throw new Error(`Failed to fetch todos: ${response.statusText}`);
    }
    const data = await response.json();
    return data.slice(0, 5).map((todo: { title: string }) => todo.title); // Extract and return titles
  } catch (error) {
    console.error("Error fetching todos:", error);
    return []; // Return an empty array on error to prevent breaking the app
  }
};
