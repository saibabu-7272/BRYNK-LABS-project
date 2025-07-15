import {useState,useEffect} from 'react'
import {Chrono} from 'react-chrono'
import Header from '../../components/Header'

import frame1 from '../../assets/Frame-source.png'
import frame2 from '../../assets/Frame-bag.png'
import frame3 from '../../assets/Frame-dimond.png'
import frame4 from '../../assets/Frame-reload.png'
import frame5 from '../../assets/Frame-ready-logo.png'

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
      <div className="crono-container">
        <div className="">
          <Chrono  disableToolbar="true" showAllCardsHorizontal={true} mode="HORIZONTAL" showOverallSlideshowProgress={true}>
            <div cardPositionHorizontal="BOTTOM">
                <img src={frame1} alt="frame-1" />
                <h1>Multi-source data</h1>
                <p>Our solutions work with old, new, or incomplete datasets, in different formats, and from varied sources.</p>
            </div>
            <div cardPositionHorizontal="TOP">
                <img src={frame5} alt="frame-2" />
                <h1>Ready to Go Algos</h1>
                <p>We have ready accelerators embedded with learnings from hundreds of past
                  projects, generating actionable results.</p>
            </div >
            <div cardPositionHorizontal="BOTTOM">
                <img src={frame2} alt="frame-3" />
                <h1>Stakeholder alignment</h1>
                <p>No black boxes. Stakeholders understand the “how”, “so what” and “now what”, leading to clear decision-making trade offs.</p>
            </div>
            <div cardPositionHorizontal="TOP">
                <img src={frame3} alt="frame-4" />
                <h1>Internal capability building</h1>
                <p>We productize all our work, enhance them with the latest AI technology, and train your internal teams to leverage them.</p>
            </div>
            <div cardPositionHorizontal="BOTTOM">
                <img src={frame4} alt="frame-5" />
                <h1>Continuous engagement</h1>
                <p>We engage in the long-term to enhance, course-correct, and adopt new models to
                  continuously refine your work.</p>
            </div>
          </Chrono>
            
        </div>
      </div>
  </div>
  </>
    )
} 

export default DashBoard