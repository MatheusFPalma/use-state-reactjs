import React, { useState } from 'react';
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary';
import Modal from '../components/Modal';

const Home: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (op: string) => {
    if (op === 'adicionar') {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <h1>Home</h1>
      <h3>Contador: {counter}</h3>
      <ButtonPrimary action={() => handleClick('diminuir')} label="Diminuir" type="outlined" />{' '}
      <ButtonPrimary action={() => handleClick('adicionar')} label="Adicionar" type="contained" />{' '}
      <ButtonPrimary action={handleOpen} label="Abrir Modal" type="contained" />{' '}
      <Modal actionClose={handleClose} openModal={open}>
        <h1>Lorem ipsum</h1>
      </Modal>
    </>
  );
};

export default Home;
