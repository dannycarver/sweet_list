import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => (
  <div className="row">
    { todos.map( todo => 
        <Todo
          key={todo.id}
          {...todo}
      
        />
      )
    }
  </div>
)

export default TodoList;