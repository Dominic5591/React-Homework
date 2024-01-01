import { createContext, useState } from "react";
import sleepy from '../pups/sleepy-pup.jpg';
const PupProvider = (props) => {
  const [puppyType, setPuppyType] = useState(sleepy);

  return (
    <PupContext.Provider>
      {props.children}
    </PupContext.Provider>
  );
};

export const PupContext = createContext();
export default PupProvider;