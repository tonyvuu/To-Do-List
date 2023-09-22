import React, { useState } from 'react';
import './Todos.css';
import todoImage from './cartoonpencil.png';


const Todos = () => {
  const [value, setValue] = useState('');
  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleClick = () => {
    if (value.trim() !== '') {
      setTodo([...todo, { text: value, color: 'white' }]);
      setValue('');
    }
  };

  const handleDelete = (index) => {
    const newList = [...todo]
    newList.splice(index, 1)
    setTodo(newList)
  };

  const handleUpdate = (index, updatedValue) => {
    const updatedList = [...todo]
    updatedList[index].text = updatedValue
    updatedList[index].color = 'white'
    setTodo(updatedList)
    setEditIndex(null)
  };

  const handleColorChange = (index) => {
    const updatedList = [...todo]
    updatedList[index].color = 'green'
    setTodo(updatedList)
  };

  return (
    
    <div className='title'>
      <h1>
        TO DO LIST <img src={todoImage} alt='pencil' className='todo-icon' />
      </h1>
      <div className='title-box'>
        <input
          maxLength={26}
          placeholder='Input Here'
          className='input-box'
          value={value}
          style={{color:'white'}}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick}>Add to list</button>
      </div>
      <div className='box-container'>
        <div>
          <ol>
            {todo.map((todoItem, index) => (
              <div key={index} className='delete-container'>
                <li>
                  <input  
                    maxLength={26}
                    type='text'
                    value={editIndex === index ? value : todoItem.text}
                    style={{ color: todoItem.color, fontSize: "large" }}
                    readOnly={editIndex !== index}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </li>
                <div className='button-container'>
                  {editIndex === index ? (
                    <button style={{ width: '90px', textAlign: 'center' }} onClick={() => handleUpdate(index, value)}>Update</button>
                  ) : (
                    <button style={{ width:'90px'}} onClick={() => setEditIndex(index)}>Edit</button>
                  )}
                    <button style={{ width: '80px'}} onClick={() => handleColorChange(index)}>Done</button>
                </div>
                <div className='delete-box'>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Todos;