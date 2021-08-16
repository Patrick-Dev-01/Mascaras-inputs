import { useField } from '@unform/core';
import { useEffect, useRef } from 'react';

interface InputProps{
    name: string;
}

export default function Input({ name, ...rest }: InputProps){
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, registerField, defaultValue, error, clearError } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])

    return(
        <>
            <input type="text" ref={inputRef} defaultValue={defaultValue} name={name} {...rest} 
            onFocus={clearError}/>
            { error && <span style={{ color: '#f00' }}>{ error }</span> }
        </>
    );
}