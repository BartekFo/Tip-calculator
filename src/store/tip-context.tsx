import React, {useState} from 'react';

const TipContext = React.createContext({
  inputValues: {
    bill: '',
    selectedTip: '',
    numberOfPeople: '',
    selectedCustomTip: '',
  },
  activeButton: '',
  isBillInvalid: false,
  isNumberOfPeopleInvalid: false,
  updateValues: (name: string, value: string | undefined) => {},
  setIsBillInvalidToTrue: () => {},
  setIsBillInvalidToFalse: () => {},
  setIsNumberOfPeopleInvalidToTrue: () => {},
  setIsNumberOfPeopleInvalidToFalse: () => {},
  resetValues: () => {},
  setActiveButton: (activeButton: string) => {},
});

export const TipContextProvider = ({children}: { children: any }) => {
  const [inputValues, setInputValues] = useState({
    bill: '',
    selectedTip: '',
    numberOfPeople: '',
    selectedCustomTip: '',
  });
  const [
    isNumberOfPeopleInvalid,
    setIsNumberOfPeopleInvalid,
  ] = useState<boolean>(false);
  const [isBillInvalid, setIsBillInvalid] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<string>('');

  const updateValues = (name: string, value: string | undefined) => {
    setInputValues((prevState) => ({...prevState, [name]: value}));
  };

  const resetValues = () => {
    setInputValues({
      bill: '',
      selectedTip: '',
      numberOfPeople: '',
      selectedCustomTip: '',
    });
  };

  const setActiveButtonHandler = (activeButton: string) => {
    setActiveButton(activeButton);
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
      activeButton,
      updateValues,
      setIsBillInvalidToTrue,
      setIsBillInvalidToFalse,
      setIsNumberOfPeopleInvalidToTrue,
      setIsNumberOfPeopleInvalidToFalse,
      resetValues,
      setActiveButton: setActiveButtonHandler,
    }
  } >{children}</TipContext.Provider>;
};

export default TipContext;
