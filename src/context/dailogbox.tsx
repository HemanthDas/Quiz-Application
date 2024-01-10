import React, { createContext, useCallback } from "react";
interface DailogBoxContextProps {
  state: boolean;
  type: number;
  setState: (state: boolean) => void;
  setType: (type: number) => void;
}
export const DialogBoxContext = createContext<DailogBoxContextProps>({
  state: false,
  type: 0,
  setState: () => {},
  setType: () => {},
});
const DialogBoxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dailogState, setDailogState] = React.useState({
    state: false,
    type: 0,
  });
  const setState = useCallback((state: boolean) => {
    setDailogState((prevState) => ({ ...prevState, state }));
  }, []);
  const setType = useCallback((type: number) => {
    setDailogState((prevType) => ({ ...prevType, type }));
  }, []);
  const value = React.useMemo(
    () => ({
      state: dailogState.state,
      type: dailogState.type,
      setState,
      setType,
    }),
    [dailogState, setState, setType]
  );
  return (
    <DialogBoxContext.Provider value={value}>
      {children}
    </DialogBoxContext.Provider>
  );
};

export default DialogBoxProvider;
