import { useState } from "react";

export function useInputValue(initial: any) {
    const [value, setValue] = useState(initial);
    const handleChangeValue = (e: any) => setValue(e.target.value);
    return [value, handleChangeValue];
}
