import { useEffect, useState, useCallback } from "react";

function Body(){

    const [Profile, setProfile] = useState([]);
    const [numberOfProfiles, setnumberOfProfiles] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    console.log("from body");

    const generateProfile = useCallback(async (count)=>{
        let ran = Math.floor(Math.random()*10000)+1;
        try{
            const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
            if (response.status === 403)  throw new Error("GitHub API rate limit exceeded. Try again later.");
            if(!response.ok) throw new Error(`Error ${response.status}`);
            const data = await response.json();
            setProfile(data);
            setError("");
        }
        catch(err){
            console.error(err);
            setError("Failed to fetch GitHub profiles. Try again later.");
        }
        
    }, []);

    const searchName = useCallback(async (name)=>{
        if (!name.trim()) {
            setError("Please enter a username");
            return;
        }
        try{
            const response = await fetch(`https://api.github.com/users/${name}`);
            if(!response.ok) throw new Error(`Error ${response.status}`);
            const data = await response.json();
            setProfile([data]);  
            setError("");
        }
        catch(err){
            console.error(err);
            setError("Failed to fetch GitHub profiles. Try again later.");
        }
    },[]);

    
    
    useEffect(()=>{
        generateProfile(10);
    },[generateProfile]);

    return(
        <>

            <div className="search">
                <input type="text" placeholder="Enter a number" value={numberOfProfiles}
                onChange={(e)=>setnumberOfProfiles(e.target.value)} ></input>
                <button onClick={()=>generateProfile(Number(numberOfProfiles))}>Search profile</button>
            </div>

            <div className="search">
                <input type="text" placeholder="Enter a name" value={name}
                onChange={(e)=>setName(e.target.value)}></input>
                <button onClick={()=>searchName(name)}>Search profile</button>
            </div>

            <div className="body">
                {
                    Profile.map((value)=>{
                        return (<div key={value.id} className="card">    
                                <img src={value.avatar_url} alt={value.login}></img>
                                <h2>Username : {value.login}</h2>
                                <a href={value.html_url} target="_blank" >View Profile</a>
                        </div>)
                    })
                }
            </div>
        </>
    )

}

export default Body;