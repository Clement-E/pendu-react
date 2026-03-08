import { createContext, useState } from "react";
import { StoreAlike } from "../App";

const StoreAlikeContext = createContext({});

const StoreAlikeProvider = (props) => {

  const [data, setData] = useState<StoreAlike>({age: 12, sexe: 'male'});
  console.log({data})
  const updateData = (newData: StoreAlike) => {
    setData(newData)
  }

  const value = {
    data: data,
    updateData: updateData
  }

  return (
    <StoreAlikeContext.Provider value={value}>
      {props.children}
    </StoreAlikeContext.Provider>
  );
}

export {StoreAlikeContext, StoreAlikeProvider}