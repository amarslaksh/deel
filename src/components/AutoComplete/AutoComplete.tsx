import React, { useState, useEffect, useMemo } from "react";

interface AutoCompleteProps {
  fetchData: () => Promise<string[]>;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({ fetchData }) => {
  const [todos, setTodos] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  // Fetch the data once on component mount
  useEffect(() => {
    const getTodos = async () => {
      const data = await fetchData();
      setTodos(data);
    };
    getTodos();
  }, [fetchData]); // Dependency on fetchData

  // Memoize filtered suggestions based on query
  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    return todos.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, todos]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setFilteredSuggestions(suggestions); // Update filtered suggestions
  };

  const handleSuggestionClick = (value: string) => {
    setQuery(value);
    setFilteredSuggestions([]);
  };

  return (
    <div style={{ width: "300px", margin: "0 auto" }}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Type to search..."
        style={{
          width: "100%",
          padding: "8px",
          boxSizing: "border-box",
        }}
      />
      {filteredSuggestions.length > 0 && (
        <ul style={{ listStyle: "none", padding: "0", margin: "8px 0" }}>
          {filteredSuggestions.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(item)}
              style={{
                padding: "8px",
                border: "1px solid #ccc",
                marginBottom: "4px",
                cursor: "pointer",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
