import { memo } from "react";



export const Small = memo(({value} : {value:number})=>{    

    return (
        <div>
            <h1>{value}</h1>
        </div>
    )
});