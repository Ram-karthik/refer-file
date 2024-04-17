import React, { useState } from 'react'

const ListKey = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: 'Gym'
        },
        {
            id: 2,
            checked: false,
            item: 'Work'
        },
        {
            id: 3,
            checked: false,
            item: 'Sleep'
        }
    ])

    const checkItem = (id, isCheck) => {
        const findIndex = items.findIndex(e => e.id === id);
        if (findIndex === -1) return;
        let tempItems = [...items] //Array.from(items)
        tempItems[findIndex] = { ...tempItems[findIndex], checked: isCheck }
        setItems(tempItems);
    }
    return (
        <div style={{ maxWidth: "fit-content", margin: "auto" }}>
            <ul>
                {items.map((it) => (
                    <li style={{ marginBottom: "20px", listStyle: "none" }} key={it.id}>
                        <input type='checkbox' onClick={(e) => checkItem(it.id, e.target.checked)} className={`check-box ${it.checked ? 'active' : ''}`} />
                        <label style={{ marginLeft: "15px", marginRight: "15px" }}>{it.item}</label>
                        <button>Delete</button>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default ListKey