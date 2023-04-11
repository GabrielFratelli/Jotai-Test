import { useAtom } from "jotai";
import { globalState } from "../states/globalState";

export function useInfoInputAtom() {
  const [inputAtom, setInputAtom] = useAtom(globalState);
  return { inputAtom, setInputAtom };
}

// Criei um hook que está consumindo um estado global, e esse hook será distribuído no projeto, o hook sempre começa com use, e ele está atrelado com o re-render da tela.
