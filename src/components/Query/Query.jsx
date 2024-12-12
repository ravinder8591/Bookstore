import React, { useState } from 'react'
import axios from 'axios'
import './Query.css'
export default function Query() {
    const [example,setExample] = useState([])
    const [question,setQuestion] = useState();
    const [answer,setAnswer] = useState();

    const muplitpleEvent = async function(que){
        setAnswer('')
        setExample([])
        setQuestion(que);
        try{
        const response = await axios.post(`http://localhost:4001/example/${que}`,{})
        if(response.data.examples){
            setExample(response.data.examples);
        }}
        catch(error){
            console.log(error)
        }
    }

    const GetSingleAnswer = async function(event){
        event.preventDefault();
        const response = await axios.post('http://localhost:4001/query',{
            Question:question
        })
        if(response.data.answer == "Sorry! I am unable to get your answer. Please go to the Contact Form."){
            // Redirect to a new URL without keeping the current page in the history
window.location.replace('http://localhost:5173/contact');

        }
    
        if(response.data.answer){
            setAnswer(response.data.answer);
        }
    }
  return (
    <div className = 'Query-outerBox'>
        <form onSubmit={GetSingleAnswer}>
            <h2>Query </h2>
            <br/>
            <label>Question : </label>
            <input type='text' onChange={(event)=>{muplitpleEvent(event.target.value)}}></input>
            <br/><br/>
            <div >
                {example.map((ex)=>(
                    <div onClick={(event)=>{muplitpleEvent(ex.Question)}}>{ex.Question}</div>
                ))}
            </div>
            <br/>
            <div style={{color:'green'}}>
                {answer}
            </div>
            <br/>
            <div className='query-button'>
            <button type='submit'>Get</button>
            </div>
        </form>
    </div>
  )
}
