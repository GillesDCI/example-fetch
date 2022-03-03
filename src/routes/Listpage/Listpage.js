import { useNavigate, Link } from 'react-router-dom';
import {useState, useEffect} from 'react';

import { getAll } from '../../services/items-service-mock';

import styles from './Listpage.module.css';
import Spinner from '../../components/common/Spinner';


//function component
export default function Listpage(){

    //create state for the list page
    const[items, setItems] = useState([]);

    //assigining navigation functionality
    const navigate = useNavigate();

    const loadData = async () => {
        const itemsFetched = await getAll();
        setItems(itemsFetched);
    }

    useEffect(() => {
        loadData();
    }, [])
    


    //itemsClicked function
    const itemClicked = (item) => {
        console.log("I got clicked", item);
        //example /list/1
        //Navigating to /list/item using useNavigate
        navigate(`/list/${item.id}`);
    }

    //returns the following elements
    return (
        <div>
            <h1>Welcome to the list page!</h1>
              {/* if there are items disappear */}
             <Spinner isVisible={items.length < 1} /> 

            <ul className="list-group">
                {/* mapping through the list of items */}
                {items.map((item) => {
                    //dynamically routing to the location using navigate
                    return <li key={item.id} className={`list-group-item ${styles.clickable}`} onClick={() => itemClicked(item)}>{item.itemText}</li>

                    // alternative version using Link instead 
                    // return <Link to={`/list/${item.id}`}>{item.itemText}</Link>
                })}
            </ul>
        </div>
    )
}