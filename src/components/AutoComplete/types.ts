export interface AutoCompleteProps {
    fetchData: () => Promise<string[]>;
}

export interface SuggestionsListProps {
    suggestions: string[];
    activeIndex: number | null;
    onSuggestionClick: (suggestion: string) => void;
    highlightText: string;
}