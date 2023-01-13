import React from "react";
import {Image} from "react-bootstrap";

function PhotoItem(props) {
  return (
    <div className="list-group-item d-flex align-items-center p-2">
      <div style={{cursor: 'pointer'}} className="mx-2">
        <Image
          onClick={()=>window.open(`/image/${props.item.id}`,'_blank')}
          roundedCircle={true}
          src={props.item.thumbnailUrl}  />
      </div>
      
      <div className="mx-2">
        <p><b>Title: </b>{props.item.title}</p>
        <p><b>Album: </b>{props.item.albumId}</p>
      </div>
      
    </div>
  );
}

export default PhotoItem;