import { Button,Modal } from 'antd'
import React from 'react'
import axios from 'axios';
import { useState } from 'react';
const Pract = () => {
    const [quote,setQuote]=useState('')
    const[modal,setModal]=useState(false)
    function handleClick(){
axios.get('https://api.quotable.io/random').then((res)=>{
setQuote(res.data.content)
}).catch((err)=>{
console.log(err)
})
setModal(true)
    }
  return (
    <div>
      <Button onClick={handleClick} style={{margin:'auto',height:60}}>Click Me to  Get A Advice</Button>
      <Modal
        title="My Quotes to you....."
        centered
        open={modal}
        onOk={() => setModal(false)}
      onCancel={()=>setModal(false)}
      
      >
        <p>{quote}</p>
        
      </Modal>
    </div>
  )
}

export default Pract
