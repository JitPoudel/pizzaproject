import { useState } from "react";
export function useQuantity(defaultQuantity)
{
 const [value, setvalue] = useState(defaultQuantity || 1);
 function onChange(e)
{
    if(! (+e.target.value >=1))
    {
        setvalue (1);
        return;
    }

 setvalue (+e.target.value);
 }
 return{
      value, 
      setvalue,
      onChange}
}