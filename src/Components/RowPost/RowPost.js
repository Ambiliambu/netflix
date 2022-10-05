import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import "./RowPost.css"
import {API_KEY, imgUrl} from '../../constants/constants'
import axios from '../../axios'
function RowPost(props) {
  const [movies,setMovies]=useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(()=>{
      axios.get(props.url).then((response)=>{
         console.log(response.data);
         setMovies(response.data.results)
      }).catch((err)=>{
          // alert("NetworkError")
      })
  },[])

  const handleMovie=((id)=>{
      axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data);
        if(response.data.results.length!==0){
          setUrlId(response.data.results[0])
        }else{
          console.log("Trailer not available");
        }
      })
  })
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className='row'>
      <h1>{props.title}</h1>
      <div className='posters'>
        {movies.map((obj)=>
                <img onClick={()=>{handleMovie(obj.id)}} className={props.isSmall ? 'smallPoster':'poster'} src={`${imgUrl+obj.backdrop_path}`} alt="poster" />

        )}

      
                
      </div>
    { urlId && <Youtube opts={opts} videoId={urlId.key}/> }
      
    </div>
  )
}

export default RowPost
