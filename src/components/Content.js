import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

import '../index.css';

const Content = () => {
  const [items, setItems] = useState([
    { id: 1, checked: true, item: 'Item 1' },
    { id: 2, checked: false, item: 'Item 2' },
    { id: 3, checked: false, item: 'Item 3' },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item,
    );
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  };
  return (
    <main className="main">
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked} />
              <label>{item.item}</label>
              <FaTrashAlt role="button" onClick={() => handleDelete(item.id)} tabIndex="0" />
            </li>
          ))}
        </ul>
      ) : (
        <p>List is empty</p>
      )}
    </main>
  );
};

export default Content;
