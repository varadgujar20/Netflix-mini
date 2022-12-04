import React from 'react'
import Appbar from './Components/Appbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './Components/Appbar';
import './index.css';
import Cards from './Components/Cards';
import movie_data from './Resources/data'
import UncontrolledExample from './Components/Slider';


export default function App() {
  return (
   <>
   <NavScrollExample/>
   <h1 className='text-center  text-underline text-white bg-danger'>Welcome to <span className='text-black'>Netflix-Mini</span></h1>
   <UncontrolledExample/>
   <br></br>
   <div className="container grids">
   {
   movie_data.map((val)=>{
    return (
    <Cards name={val.movie_name} img={val.img_link} desc={val.desc}/>
    )
   })
   } 
   </div>   
   </>

  )
}
{/* <center><Cards/></center> */}
   {/* <center><Cards name="3 idiots" img="https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/3idiots.jpg/220px-3idiots.jpg"/></center>
   <Cards name="Avatar" img="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg"/>
   <Cards name="KGF" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSsbm9m1Zr0wzep6sI5jfOpWnwRc8F18ZLmA&usqp=CAU"/>
   <Cards name="Drishyam 2" img="https://m.media-amazon.com/images/M/MV5BYmY2ZDUxNzUtYWZlYy00MThhLWI5NjktZDhjZTU3MDY5YTM3XkEyXkFqcGdeQXVyNTYxMDgzODI@._V1_FMjpg_UX1000_.jpg"/>
   <Cards name="Black Panther" img="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/04/black-panther-2-social-featured.jpg"/> */}