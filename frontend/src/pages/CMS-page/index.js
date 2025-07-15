import {useState, useEffect} from 'react'

const CMSpage = () => {
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
    useEffect(()=> {fetchHeading()}, [])

    const onSave = async () =>{
        try{
            const options = {
                method : "POST",
                headers :{
                    'Content-Type' : "application/json",
                    "Accept" : "application/json"
                },
                body : JSON.stringify({heading : heading})
            }
            const res = await fetch(`${process.env.REACT_APP_API}/add-heading`, options)
            if(res.ok){
                alert("Heading Updated!")
                fetchHeading()
            }
        }catch(e){
            console.log({error : e.message})
        }
    }

    

    const onTypeHeading = (e) => setHeading(e.target.value)
    return(
        <div className="cms-page">
            <h1>Content Management System</h1>
            <textarea className="input-box" cols="50" rows="5" value={heading} onChange={onTypeHeading} type="text" />
            <button className="btn" onClick={onSave}>Save</button>
        </div>
    )
}


export default CMSpage