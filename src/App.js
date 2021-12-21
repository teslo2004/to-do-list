import './index.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Headers from './components/Headers';
import { useState } from 'react';

function App() {
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
    <div className="App">
      <Headers title="To Do List" />
      <Content items={items} handleDelete={handleDelete} handleCheck={handleCheck} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
