import { useRef, useCallback } from 'react';
import { Form } from '@unform/web'
import Input from './components/Input';
import InputMask from './components/InputMask';
import { useState } from 'react';
import { cleanMask } from './utils/cleanMasks';

interface FormData{
  cpfcnpj: string;
  phone: string;
  data: string;
}

function App() {
  const formRef = useRef(null);
  const [digits, setDigits] = useState('');

  const checkDigits = useCallback((value: string) => {
    setDigits(cleanMask(value));
  }, [])

  const handleSubmit = useCallback((data: FormData) => {
    console.log(cleanMask(data.cpfcnpj))
  }, [])

  return (
    <div className="App">
      <h1>Mascaras para formulário</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="name">Nome: </label>
        <Input name="name" />

        <label htmlFor="cpfcnpj">CPF / CNPJ: </label>
        { digits.length <= 11 ? (
          <InputMask mask="999.999.999-999" name="cpfcnpj" onChange={(e) => checkDigits(e.target.value)}/>
        ) : (
          <InputMask mask="99.999.999/9999-99" name="cpfcnpj" onChange={(e) => checkDigits(e.target.value)}/>
        )}

        <label htmlFor="celular">Celular: </label>
        <InputMask mask="(99) 99999-9999" name="phone" />

        <label htmlFor="data">Data: </label>
        <InputMask mask="99/99/9999" name="data" />

        <button type="submit">Enviar formulário</button>
      </Form>
    </div>
  );
}

export default App;
