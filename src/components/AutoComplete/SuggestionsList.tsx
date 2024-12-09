import React from 'react';
import { SuggestionsListProps } from './types';

const SuggestionsList: React.FC<SuggestionsListProps> = ({
    suggestions,
    activeIndex,
    onSuggestionClick,
    highlightText,
}) => {
    const renderHighlightText = (text: string, highlight: string) => {
        const regex = new RegExp(`(${highlight})`, "i");
        const parts = text.split(regex);
        return parts.map((part,index) => 
            regex.test(part)  ? (
                <strong key={index} style={{ color: "blue"}}>
                    {part}
                </strong>
            ) : (
                part
            )
        )
    };

    return (
        <ul style={{
            listStyle: "none",
            margin: 0,
            padding: "8px",
            border: "1px solid #ccc",
            background: "#fff",
            position: "absolute",
            top: "100%",
            width: "100%",
          }}>

            {suggestions.map((suggestion, index) => (
                <li key={suggestion} style={{
                    padding: "8px",
                    background:
                      index === activeIndex ? "rgba(0, 0, 0, 0.1)" : "transparent",
                    cursor: "pointer",
                  }} onMouseDown = {() => onSuggestionClick(suggestion)}>
                {renderHighlightText(suggestion, highlightText)}
                </li>
            ))}
          </ul>
    )
}

export default SuggestionsList;