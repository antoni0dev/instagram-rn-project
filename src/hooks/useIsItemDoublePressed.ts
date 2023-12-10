import {useCallback, useEffect, useRef, useState} from 'react';

const useIsItemDoublePressed = () => {
  const [presses, setPresses] = useState(0);
  const [isDoublePressed, setIsDoublePressed] = useState(false);
  const isWaitingForSecondPressRef = useRef(false);

  function incrementPresses() {
    setPresses(presses + 1);
  }

  const clear = useCallback(() => {
    setPresses(0);
    setIsDoublePressed(false);
  }, []);

  useEffect(() => {
    if (presses === 1) {
      isWaitingForSecondPressRef.current = true;
    }

    if (isWaitingForSecondPressRef.current) {
      const timeoutId = setTimeout(() => {
        if (presses === 2) {
          setIsDoublePressed(true);
        } else {
          isWaitingForSecondPressRef.current = false;
          setPresses(0);
          setIsDoublePressed(false);
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [presses]);

  return {isDoublePressed, incrementPresses, clear};
};

export default useIsItemDoublePressed;
