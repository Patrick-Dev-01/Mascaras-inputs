import { useRef, useCallback } from 'react';
import { Form } from '@unform/web'
import Input from './components/Input';


function App() {
  const formRef = useRef(null);

  const handleSubmit = useCallback(() => {
    console.log('data')
  }, [])

  return (
    <div className="App">
      <h1>Mascaras para formulário</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="cpfcnpj">CPF / CNPJ</label>
        <Input name="cpfcnpj" />
        <label htmlFor="celular">Celular</label>
        <Input name="celular" />
        <label htmlFor="data">Data</label>
        <Input name="data" />
      </Form>
    </div>
  );
}

export default App;
