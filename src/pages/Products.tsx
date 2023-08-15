import React, { useState } from 'react';
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary';

interface ProdutoType {
  nome: string;
  preco: number;
}

const Products: React.FC = () => {
  const [produtos, setProdutos] = useState<ProdutoType[]>([]);
  const [nome, setNome] = useState<string>('');
  const [preco, setPreco] = useState<string>('');

  const handleSubmit = () => {
    setProdutos([...produtos, { nome, preco: Number(preco) }]);
    setNome('');
    setPreco('');
  };

  return (
    <>
      <h1>Produtos</h1>
      <label htmlFor="name">Nome: </label>
      <input name="nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />{' '}
      <label htmlFor="preco">Preço: </label>
      <input name="preco" type="text" value={preco} onChange={(e) => setPreco(e.target.value)} />
      <br />
      <ButtonPrimary label="Cadastrar" type="contained" action={handleSubmit} />
      <br />
      {produtos.map((item) => {
        return (
          <>
            <h2>
              {item.nome}: {item.preco}
            </h2>
          </>
        );
      })}
    </>
  );
};

export default Products;
