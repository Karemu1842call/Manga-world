import React,{useState} from 'react';
function SearchBox(){
     
   const [query,setQuery]=useState('');
   const [animes, setAnimes] =useState([])

    const searchAnime= async (e)=>{
        e.preventDefault();
        console.log("submitting")
        const url ='https://my-json-server.typicode.com/Karemu1842call/project-json-server/results';
    
        
        try {
            const res=await fetch(url);
            const data=await res.json();
            console.log(data);
            setAnimes(data)
        }catch(err){
            console.log(err)
        }
    }
    return(
       <>
       <form className="form" onSubmit={searchAnime}>
         <div id="search" className="bar">
             <input value={query} name="query" className="tafuta" placeholder='Enter anime name ie Naruto' onChange={(e) => setQuery(e.target.value)} ></input>
                <button type="submit" className='btn'>SEARCH...</button>
        </div>
       </form>
       <div className='card-list'>
        {animes.map(item =>(
            <div>
                <hi>{item.name}</hi>
                <img className='card--image'
              s  src={item.image}/>
            </div>
        ))}
       </div>
       </>
    ) }
export default SearchBox;