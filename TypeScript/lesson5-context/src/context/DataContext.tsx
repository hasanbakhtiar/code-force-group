import { createContext, useState } from "react";

type productType = {
    id:number,
    title:string,
    price:number
}

export const DataContext = createContext<any | null>(null);

export const DataProvider = ({children}:any)=>{
    const [data,setData] = useState<productType[]>([
        {
            id:1,
            title:"BMW X5",
            price:30000
        }
    ]);
return <DataContext.Provider value={[data,setData]}>{children}</DataContext.Provider>
}