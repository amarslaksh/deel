import React from 'react';

interface InputProps {
    query: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({query, onChange, onKeyDown}) => {
    return (
        <input type="text" value={query} onChange={onChange} onKeyDown={onKeyDown} placeholder="search" style={{width: "100%", padding: "8px"}} />
    );
}

export default Input;