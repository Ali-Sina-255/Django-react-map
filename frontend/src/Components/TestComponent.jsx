import { useState } from "react"
// import data from "../data"
import  Result  from "./Result"

 const data = [
   { id: 1, name: "Apple", color: "red" },
   { id: 2, name: "Orange", color: "orange" },
   { id: 3, name: "Banana", color: "yellow" },
   { id: 4, name: "Kiwi", color: "green" },
   { id: 5, name: "Mango", color: "red" },
   { id: 6, name: "Avocado", color: "green" },
 ];

function Test(){
    function disPaly(n){
        if(n=== 0 || n === 1){
            return `Ali has ${n} apple`
        } else if (n > 1){
            return `Ali has ${n} apples`
        } else{
            return `Ali woes us ${Math.abs(n)}`
        }
    }
     
    return (
      <>
      
        <h1> {disPaly(4)}</h1>
        <div>
        {data.map((e) =>(
           
            <Result key={e.id}  apple={e}/>
        ))}
       
        </div>
      
      </>
    );
}

export default Test