import React, { useState } from "react";
import { useAtom } from "jotai";
import { valueAtom, dataAtom } from "./states";

import { Container } from "./styles";
import { useNameAtom } from "../hooks/useNameAtom";
import { useInfoInputAtom } from "../hooks/useInfoInputAtom";

export function Page() {
  const [state, setState] = useState("");
  const [stateInput, setStateInput] = useState("");
  const [data, setData] = useAtom(dataAtom); // utilizando o meu jotai da pasta Page
  const [value, setValue] = useAtom(valueAtom); // utilizando o meu jotai da pasta Page
  const { nameAtom, setNameAtom } = useNameAtom(); // estou utilizando meu hook.
  const { inputAtom, setInputAtom } = useInfoInputAtom(); // estou utilizando meu hook.

  const handleData = () => {
    setData(state); // essa função serve para passar para o clique do botão para executar a ação de adicionar o elemento comentado no input.
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value); // essa função serve pro input acessar a informação
  };

  const handleValue = () => {
    setValue({ name: "Gabriel", surname: "Fratelli" }); // aqui estou passando os valores que essa função irá executar
  };

  const handleNameState = () => {
    setNameAtom("Gabriel Cassiano"); // essa função ta acessando as informações do meu estado global e está executando no botão e na tag p
  };

  const handleInput = () => {
    setInputAtom(stateInput); // essa função serve para passar para o clique do botão para executar a ação de adicionar o elemento comentado no input.
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateInput(event.target.value); // essa função serve pro input acessar a informação
  };

  return (
    <Container>
      <div className="one">
        <button className="button" onClick={handleValue}>
          Adicionar
        </button>
        <p>
          Resultado: {value.name} {value.surname}
        </p>
      </div>

      <div className="two">
        <button className="button" onClick={handleNameState}>
          Adicionar
        </button>
        <p>Resultado: {nameAtom}</p>
      </div>

      <div className="three">
        <input
          type="text"
          value={state}
          onChange={handleChange}
          placeholder="Digite aqui"
        />
        <button className="button" onClick={handleData}>
          Adicionar
        </button>
        <p>Resultado: {data}</p>
      </div>

      <div className="four">
        <input
          type="text"
          value={stateInput}
          onChange={handleChangeInput}
          placeholder="Digite aqui"
        />
        <button className="button" onClick={handleInput}>
          Adicionar
        </button>
        <p>Resultado: {inputAtom}</p>
      </div>
    </Container>
  );
}
