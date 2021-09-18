import React, {useState} from 'react';

const TipContext = React.createContext({
  inputValues: {
    bill: '',
    selectedTip: '',
    numberOfPeople: '',
    selectedCustomTip: '',
  },
  isBillInvalid: false,
  isNumberOfPeopleInvalid: false,
  updateValues: (name: string, value: number) => {},
  setIsBillInvalidToTrue: () => {},
  setIsBillInvalidToFalse: () => {},
  setIsNumberOfPeopleInvalidToTrue: () => {},
  setIsNumberOfPeopleInvalidToFalse: () => {},
});

export const TipContextProvider = ({children}: { children: any }) => {
  const [inputValues, setInputValues] = useState({
    bill: '',
    selectedTip: '',
    numberOfPeople: '',
    selectedCustomTip: '',
  });
  const [isNumberOfPeopleInvalid, setIsNumberOfPeopleInvalid] = useState(false);
  const [isBillInvalid, setIsBillInvalid] = useState(false);

  const updateValues = (name: string, value: number) => {
    setInputValues((prevState) => ({...prevState, [name]: value}));
  };

  const setIsBillInvalidToTrue = () => {
    setIsBillInvalid(true);
  };

  const setIsBillInvalidToFalse = () => {
    setIsBillInvalid(false);
  };

  const setIsNumberOfPeopleInvalidToTrue = () => {
    setIsNumberOfPeopleInvalid(true);
  };

  const setIsNumberOfPeopleInvalidToFalse = () => {
    setIsNumberOfPeopleInvalid(false);
  };

  return <TipContext.Provider value={
    {
      inputValues,
      isBillInvalid,
      isNumberOfPeopleInvalid,
      updateValues,
      setIsBillInvalidToTrue,
      setIsBillInvalidToFalse,
      setIsNumberOfPeopleInvalidToTrue,
      setIsNumberOfPeopleInvalidToFalse,
    }
  } >{children}</TipContext.Provider>;
};

export default TipContext;
