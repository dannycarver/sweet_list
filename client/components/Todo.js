import React from 'react';

const styles = {
  complete: {
    color: 'purple'
  },
  pointer: { cursor: 'pointer' }
}

const Todo = ({ id, complete, name}) => (
  <div className="col s12">
    <div className="col m8">
      <div style={ complete ? styles.complete : {} } className="center">
        {name}
      </div>
    </div>
    <div className="col m2">
      <input
        id={`item-${id}`}
        type="checkbox"
        defaultChecked={complete}
        onClick={() => updateTodo(id)}
      />
      <label htmlFor={`item-${id}`}>Complete?</label>
    </div>
    <div style={ styles.pointer } className="col m1" onClick={() => deleteTodo(id)}>
      X
    </div>
  </div>
)


export default Todo;