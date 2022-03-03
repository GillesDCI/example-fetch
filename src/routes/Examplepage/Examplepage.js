import { useEffect, useState } from "react"
import axios from 'axios';

//function component
export default function Examplepage(){

    const[randomDogData, setRandomDogData] = useState(null);
    const[randomActivityData, setRandomActivityData] = useState(null);
    const[inputValue, setInputValue] = useState("");
    const[counter, setCounter] = useState(0);



    const loadRandomDogData = async () => {
        const res = await axios.get('https://dog.ceo/api/breeds/image/random');
        console.log("the response is ", res);
        setRandomDogData(res.data);
    }

    const loadRandomActivity = async () => {
        const res = await axios.get('https://www.boredapi.com/api/activity');
        setRandomActivityData(res.data);
    }

    //only on render of component (first time)
    useEffect(() => {
        console.log("The component has rendered");
        loadRandomDogData();
        loadRandomActivity();
    },[])

    //when the inputValue dependency changes
    useEffect(() => {
        console.log("the input value has changed")
    }, [inputValue])

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("I'm running every second");
            setCounter((counter) => counter + 1);
        }, 1000)
        

        //responsible for unsetting the interval when component unloads
        return () => clearInterval(interval);
    }, [])

  
    
    

    //returns the following elements
    return (
        <div>
            <input type="text" onChange={(e) => setInputValue(e.target.value)} />
            <h1>Welcome to the example page!</h1>
            <h3>The count is: {counter}</h3>
            <p>Here we will take a look at useEffect</p>
             
             <h1>This is a Acitvity suggestion: {randomActivityData ? randomActivityData.activity : '' }</h1>

            <img  src={randomDogData != null ? randomDogData.message : ''} />
        </div>
    )
}