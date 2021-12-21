import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

import '../index.css';

const Content = ({ items, handleDelete, handleCheck }) => {
  return (
    <main className="main">
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked} />
              <label
                onClick={() => handleCheck(item.id)}
                style={item.checked ? { textDecoration: 'line-through' } : null}>
                {item.item}
              </label>
              <FaTrashAlt role="button" onClick={() => handleDelete(item.id)} tabIndex="0" />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ margin: '3rem 0' }}>List is empty</p>
      )}
    </main>
  );
};

export default Content;
