import { useAtom } from "jotai";
import { globalNameState } from "../states/globalNameState";

export function useNameAtom() {
  const [nameAtom, setNameAtom] = useAtom(globalNameState);
  return { nameAtom, setNameAtom };
}

// Criei um hook que está consumindo um estado global, e esse hook será distribuído no projeto, o hook sempre começa com use, e ele está atrelado com o re-render da tela.
