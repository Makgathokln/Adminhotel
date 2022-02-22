import React,{useState,useEffect} from 'react'
import ImageUploading from 'react-images-uploading';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth,db } from '../firebase';
import {Link,useParams} from 'react-router-dom'
function Dashboard() {
  const [Firstname,setFirstname]=useState('')
  const user = auth.currentUser.uid
  let currentId = useParams();
    const uid=currentId;
  useEffect(()=>{
    
    db.ref(`/admin/`+ user).on('value',snap=>{
      
      setFirstname(snap.val() && snap.val().Firstname);
    })
    
  },[])
  const [hotels,setHotels]=useState([])
  useEffect(()=>{
    db.ref('hotels').on('value',snap=>{
      
      setHotels({...snap.val(),});
    })
    
  },[uid])

 
    return (<>
      <div className="col-md-7 mx-auto col-8 card shadow-lg border-0 p-4">
           <h4 className="fw-bold p-4 text-secondary header">WELCOME BACK</h4>
        <h6 className="fw-bold  name">{Firstname}</h6>
        <div className='container ' >
        <div className='row' style={{marginBottom:350, marginLeft:250}}>
        {
          Object.keys(hotels).map((id,items)=>
          
          
            <div className='col-md-6  row align-items-center' >
              <div className='card shadow-md '>
                <img src={hotels[id].url}/>
                <div className='card-body row align-items-center'>
                  <h3>{hotels[id].name}</h3>
                <Link to={`/update/${id}`}>
                                <button className="btn btn-info" style={{borderRadius:10}}>Update</button>
                                   </Link>
                  {/* <button className='btn btn-dark btn-sm'>Edit</button> */}
                </div>

              </div>
            </div>

         
      
          )
        }
         </div>
     </div>
      </div>
      </>
     )
}

export default Dashboard
