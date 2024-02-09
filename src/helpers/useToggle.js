import { useState } from "react";

/**Custom hook function used to toggle hidden/visible components of JSX */
const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);
    const toggler = () => { setToggleValue(!toggleValue) };
    return [toggleValue, toggler]
  };

  export default useToggle