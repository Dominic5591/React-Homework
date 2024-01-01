import { createContext, useState, useContext } from "react";
// import sleepy from '../pups/sleepy-pup.jpg';
import banana from '../pups/banana-pup.jpg';
const PupProvider = (props) => {
  const [puppyType, setPuppyType] = useState(banana);

  return (
    <PupContext.Provider value={{ puppyType, setPuppyType }}>
      {props.children}
    </PupContext.Provider>
  );
};

export const PupContext = createContext();
export default PupProvider;

export function usePuppyType() {
  return useContext(PupContext);
}