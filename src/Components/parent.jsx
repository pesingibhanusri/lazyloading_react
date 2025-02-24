import React,{Suspense} from "react";
// import Child from "./child";

const Lazy_comp=React.lazy(()=>import("./child.jsx"))

const Parent=()=>{
    return(
        <div>
            parent
           <Suspense fallback={<p>component still loading..............</p>}>
           <Lazy_comp></Lazy_comp>
           </Suspense>
        </div>
    )
}
export default Parent