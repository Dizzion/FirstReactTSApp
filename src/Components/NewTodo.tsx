import React, { useRef } from 'react';

import './NewTodo.css';

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler =  async (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = await textInputRef.current!.value;
        await props.onAddTodo(enteredText);
        textInputRef.current!.value = '';
    };

    return (
        <form onSubmit={todoSubmitHandler}>
            <div className="form-control">
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default NewTodo;