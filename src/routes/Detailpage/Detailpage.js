import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react'
import { getById } from './../../services/items-service-mock';

//function component
export default function Detailpage(){
  
    //declare the state
    const [item, setItem] = useState([])

    //extract id from the useParams hook here: 
    let { id } = useParams();

    //loading the data 
    const loadData = async () => {
        const item = await getById(id);
        setItem(item);
    }
    //loading the data as effect when component renders
    useEffect(() => {
       loadData();
    },[])



    //returns the following elements 
    return (
        <div>
            <h1>Welcome to the detail page!</h1>
            <p>You have selected item : {id}</p>
            <p>the text we have is: {item.itemText} </p>
        </div>
    )
}