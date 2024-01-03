import './App.css';
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import {useState} from "react";

const initialItems = [
    {id: 1, description: "Passports", quantity: 2, packed: false},
    {id: 2, description: "Socks", quantity: 4, packed: false},
];

function App() {
    const [items, setItems] = useState(initialItems);

    function handleAddItems(item) {
        setItems((items) => [...items, item])
    }

    function handleDeleteItem(id) {
        setItems((items) => items.filter(item => item.id !== id))
    }

    function handleToggleItems(id) {
        setItems((items) => items.map(
                item => item.id === id ? {...item, packed: !item.packed} : item
            )
        )
    }

    return (
        <div className='app'>
            <Logo/>
            <Form onAddItems={handleAddItems}/>
            <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItems={handleToggleItems}/>
            <Stats item={items}/>
        </div>
    );
}

export default App;
