import React, { useState, useEffect } from 'react'
import Axios from 'axios'


export default function FreeDetailContent() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');



  useEffect(() => {
    Axios.get('http://localhost:7456/freelists/:id')
      .then(async (response) => {
        setTitle(response.title);
        setDescription(response.description);
      }).catch(() => {
        console.log("Error");
      });
  }, [])


  return (
    <div>
      <div>
        {title}
      </div>
      <div>
        {description}
      </div>
    </div>
  )
}
