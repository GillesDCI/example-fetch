import {useEffect, useState} from 'react'

//function component
export default function Profilepage(){
    //declaring the state
    const [profileInfo, setProfileInfo] = useState(null);

    //component is rendering make call to api
    useEffect(() => {
        fetch('https://randomuser.me/api/')
        .then((res) => res.json())
        .then((data) => {
            console.log("the data is ", data)

            //set the state
           setProfileInfo(data.results[0])
        })


    },[])

    //returns the following elements
    return (
        profileInfo != null ? 
                ( 
             <div className="row d-flex justify-content-center">
                <div className="col-md-7">
                    <div className="card p-3 py-4">
                        <div className="text-center"> <img src={profileInfo.picture.medium} width="100" className="rounded-circle"/> </div>
                        <div className="text-center mt-3"> <span className="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                            <h5 className="mt-2 mb-0">{profileInfo.name.first} {profileInfo.name.last}</h5> <span>UI/UX Designer</span>
                            <div className="px-4 mt-1">
                                <p className="fonts">
                          
                                  <b>Location:</b> {profileInfo.location.city}, {profileInfo.location.country}
                        
                                </p>
                                <p>
                                <b>Email:</b> {profileInfo.email}
                                </p>
                            </div>
                  
                            <div className="buttons"> 
                            <button className="btn btn-outline-primary px-4">Message</button> 
                            <button className="btn btn-primary px-4 ms-3">Contact</button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>) :(
                null
            )
        ) 
}