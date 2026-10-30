export function useDebounce(value,delay) {
    const[debounceValue,setDebounceValue]=useState(value);
    useEffect(()=>{
        const handler=setTimeout(()=>{
        setDebounceValue(value)
    },delay);
    return()=>clearTimeout(handler)
},[value,delay]);
return debounceValue;
}

export const useDebounced = (value,delay)=>{
const [debouncedValue,setDebouncedValue]=useState(value);
useEffect(()=>{
const handler=setTimeout(()=>{
    setDebouncedValue(value)
},delay);
return clearTimeout(handler)
},[value,delay])
return debouncedValue;
}