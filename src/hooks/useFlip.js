import { useState } from "react";

/** Hook to toggle */
function useFlip(initialVal = true) {
  const [state, setState] = useState(initialVal);
  const flip = () => {
    setState(state => !state)
  }
  return [state, flip]
}

export default useFlip;
