import React, { useState, useEffect, useRef } from 'react';

export interface IEditableCellProps {
    value: string;
    onChange: Function;
  }

export const EditableCell = (props: IEditableCellProps) => {
    const { value, onChange } = props; 
    const [editing, setEditing] = useState(false);
    const [updatedValue, setUpdatedValue] = useState();
    const textInput = useRef(null);

    

    useEffect(() => {
        if(editing){
            textInput.current.focus();
        }
    }, [editing]);

    const onFocus = ()=> {
        setEditing(true);
    }
    const onUpdate = e => {
        setEditing(false)
        setUpdatedValue(e.target.value);
        onChange(e.target.value);
    }
    const onKeyUpHandle = e => {
        if (e.keyCode === 13 && !e.shiftKey) {
            onUpdate(e);
        } else if(e.keyCode === 27 ){
            setEditing(false)
        }
    }

    return (
        editing ?
        <textarea ref={textInput} defaultValue={updatedValue||value} 
            onBlur={e => onUpdate(e)} 
            onKeyDown={e => onKeyUpHandle(e)} /> : 
        <div onClick={() => onFocus()}>
        <p style={{whiteSpace: "pre-wrap",fontSize:"12px"}} >
        {value? value: "    "}</p>
        </div>
    )
}