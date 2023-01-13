import React, {useEffect, useState} from 'react';
import {Image} from "react-bootstrap";
import {useParams} from "react-router-dom";
import axios from "axios";

const PhotoMain = () => {
  const {id} = useParams();
  
  const [url, setUrl] = useState();
  
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    
    axios.get(url).then(response => {
      const photo = response.data.filter(photo => photo.id === +id)[0];
  
      setUrl(photo.url);
    });
  });
  
  return (
    <div>
      <Image src={url}/>
    </div>
  );
};

export default PhotoMain;