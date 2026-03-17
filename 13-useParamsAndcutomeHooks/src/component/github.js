import { useEffect, useState } from "react";
import { useParams, Link } from "react-router"
export default function Github(){

    const {name} = useParams();
    const [user, setUser] = useState(null);

    async function fetchUser(){
       const response = await fetch(`https://api.github.com/users/${name}`);
       const data = await response.json();
       setUser(data);
    }

    useEffect(()=>{
        fetchUser();
    },[])

    return(
        <>
            <h1> My Github Profile </h1>
             <nav>
             <Link to="/">Home</Link>
             </nav>

            {/*Display the user data */}
           <div className="profile">
                <img src={user?.avatar_url} />
                <h2>Username : {user?.login}</h2>
                <a href={user?.html_url} target="_blank">View Profile</a>
          </div>


        </>
    )
}