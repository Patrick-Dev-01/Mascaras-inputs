import { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import Input from './components/Input';
import InputMask from './components/InputMask';
import { cleanMask } from './utils/cleanMasks';
import maskImg from './assets/masks.svg';

import './App.css';

interface FormData{
  rg: string;
  cpf: string;
  cnpj: string;
  phone: string;
  data: string;
  cep: string;
}

function App() {
  const formRef = useRef(null);

  const handleSubmit = useCallback(async (data: FormData) => {
    console.table([cleanMask(data.rg),cleanMask(data.cep),cleanMask(data.cnpj),cleanMask(data.data),
    cleanMask(data.phone),cleanMask(data.data)]);
  }, [])

  return (
    <div className="container">
      <img src={maskImg} alt="Mascaras" />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h2>Máscaras para Formulários</h2>
        <label htmlFor="name">Nome</label>
        <Input name="name" />

        <label htmlFor="rg">RG</label>
        <InputMask mask="99.999.999-9" name="rg" />

        <label htmlFor="cpf">CPF</label>
        <InputMask mask="999.999.999-99" name="cpfcnpj" />

        <label htmlFor="cnpj">CNPJ</label>
        <InputMask mask="99.999.999/9999-99" name="cnpj" />
       
        <label htmlFor="phone">Celular</label>
        <InputMask mask="(99)99999-9999" name="phone" />

        <label htmlFor="data">Data</label>
        <InputMask mask="99/99/9999" name="data" />

        <label htmlFor="cep">CEP</label>
        <InputMask mask="99999-999" name="cep" />

        <button type="submit">Enviar formulário</button>
      </Form>

      {/* <div className="resultados">
        <h1>Valores</h1>
      </div> */}
    </div>
  );
}

export default App;
