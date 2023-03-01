import React, { useState } from 'react';

function getClassName(selected) {
    if (selected) {
        return 'TodoItemContainer selected';
    } else {
        return 'TodoItemContainer';
    }
}

export default function TodoItem({ todo }) {
    const [selected, setSelected] = useState(false);
    function onclick(){
        setSelected((value) => !value);
    }
    return (

        <div
    )
}