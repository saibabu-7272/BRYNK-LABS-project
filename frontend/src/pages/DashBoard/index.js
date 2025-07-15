import {useState,useEffect} from 'react'
import './index.css'
import {Chrono} from 'react-chrono'
import Header from '../../components/Header'


const DashBoard = () =>{
    const [heading, setHeading] = useState("")
    
    const fetchHeading = async ()=>{
        try{
            const res = await fetch(process.env.REACT_APP_API)
            const data = await res.json()
            if(res.ok){
                setHeading(data.heading)
            }
        }catch(e){
            console.log({error : e.message})
        }
    }
    useEffect(()=>{fetchHeading()} , [])

    return(
              <>
    <Header />
    <div className="bg-container">
      <div className="main-box">
        <h1 className="heading">{heading}</h1>
        <p className="description">Powerful AI solutions that go beyond mere data sorting and exploration.
           Use our array of AI enabled solutions that understand your business and recommend the optimal way forward.
           Powerful AI solutions that go beyond mere data sorting and exploration.
           Use our array of AI enabled solutions that understand your business and recommend the optimal way forward. </p>
        <button className="btn">Get Start</button>
      </div>
      <div>
        <div className="">
          <Chrono>
            <div>box1</div>
            <div>box2</div>
          </Chrono>
            
        </div>
      </div>
  </div>
  </>
    )
} 

export default DashBoard