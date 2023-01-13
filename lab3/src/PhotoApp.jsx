import React, {useState, useEffect} from "react";
import PhotoItem from "./PhotoItem";
import axios from "axios";
import {Row, Container} from "react-bootstrap";

function PhotoApp() {
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState(false);
  const [img, setImg] = useState('');
  const [list, setList] = useState([]);
  const [height, setHeight] = useState(420);
  const [limit, setLimit] = useState(5000);
  const [count, setCount] = useState(10);
  const [page, setPage] = useState(0);
  const [pDisable, setPDisable] = useState(false);
  const [mDisable, setMDisable] = useState(true);
  const [sort, setSort] = useState(true);
  const [myTitle, setMyTitle] = useState('');
  const [myAlbum, setMyAlbum] = useState('');
  const [titleArrow, setTitleArrow] = useState('UP');
  const [albumArrow, setAlbumArrow] = useState('UP');
  
  function myFilter(){
    setPage(0);
    
    if(myAlbum === '' && myTitle === '')
      setFiltered(list);
    else if(myAlbum === '' && myTitle !=='')
      setFiltered( list.filter( item => item.title.includes(myTitle) ) )
    else if(myAlbum !=='' && myTitle === '')
      setFiltered( list.filter( item => item.albumId === myAlbum ) );
    else
      setFiltered( list.filter( item => item.title.includes(myTitle) && item.albumId === myAlbum ) );
  }
  
  async function fetchInfo(limit){
    const response = await(
      await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=" + limit)
    ).data;
    
    let arr = [];
    for(let i = 0; i < response.length; i++) {
      if(response[i].title.split(' ').length - 1 <= 7) {
        arr.push(response[i]);
      }
    }
    
    setLimit(limit);
    setList(arr);
    setFiltered(arr);
    setPDisable(false);
    setMDisable(true);
    setPage(0);
    setTitleArrow('UP');
  }
  
  useEffect(() => {
    myFilter();
  }, [myTitle, myAlbum]);
  
  function titleSort() {
    setAlbumArrow('UP');
    
    if (sort) {
      setList( filtered.sort((a, b) => a.title > b.title ? 1 : -1) );
      setSort(!sort);
      
      setTitleArrow('DOWN');
    }
    else {
      setList( filtered.sort((a, b) => a.title > b.title ? -1 : 1) );
      setSort(!sort);
      
      setTitleArrow('UP');
    }
  }
  
  function albumSort(){
    setTitleArrow('UP');
    
    if (sort) {
      setList( filtered.sort( (a, b) => a.albumId > b.albumId ? 1 : -1 ) );
      setSort(!sort);
      
      setAlbumArrow('DOWN');
    }
    else {
      setList(filtered.sort((a, b) => a.albumId > b.albumId ? -1 : 1));
      setSort(!sort);
      
      setAlbumArrow('UP');
    }
  }
  
  function pagePlus() {
    setPage(page + 1);
    
    if( filtered.slice((page + 2) * count, (page + 2) * count + count).length === 0 ) {
      setPDisable(!pDisable);
    }
    
    setMDisable(false);
  }
  
  function pageMinus() {
    setPage(page - 1);

    if( filtered.slice((page - 2) * count, (page - 2) * count + count).length === 0 ){
      setMDisable(!mDisable);
    }
    setPDisable(false);
  }
  
  useEffect(() =>{
    fetchInfo(limit);
  }, []);
  
  useEffect(() => {
    setPage(0);
    setMDisable(true);
    setPDisable(false);
  }, [count]);
  
  return (
    <Container>
      <h1>virtualized list</h1>
      
      <Row>
        <p>
          <label>All items: </label>
          <input className="input-numbers" value={limit} type="number" min={1} max={5000}
                 onChange={(e) => fetchInfo(Number(e.target.value))}
          />
          
          <label>Height list: </label>
          <input className="input-numbers" value={height} type="number"
                 onChange={(e) => setHeight(Number(e.target.value))}
          />
          
          <label>Items on one page: </label>
          <input className="input-numbers" value={count} type="number"
                 onChange={(e) => setCount(Number(e.target.value))}
          />
        </p>
      </Row>
      
      <Row>
        <h2>Sorting</h2>
        
        <p>
          <label>Name: </label>
          <input type="button" className="input-numbers" value={titleArrow} onClick = {() => titleSort()}/>
          
          <label>Album: </label>
          <input type="button" className="input-numbers" value={albumArrow} onClick = {() => albumSort()}/>
        </p>
      </Row>
      
      <Row>
        <h2>Filtration</h2>
  
        <p>
          <label>Name: </label>
          <input type="text" value={myTitle}
                 onChange={(e) => setMyTitle(e.target.value)}
          />
  
          <label>Album: </label>
          <input type="number"
                 onChange={(e) => setMyAlbum( Number(e.target.value) )}
          />
        </p>
      </Row>
      
      <Row>
        <h2>List:</h2>
        
        <div style={{height: height, border: '2px solid #ff4411'}} className='overflow-scroll'>
          <table className='w-full'>
            {filtered.slice(page * count, page * count + count)
              .map(el =>
                <PhotoItem item = {el} setActive = {setActive} setImg={setImg}/>)
            }
          </table>
        </div>
      </Row>
      
      <Row style={{marginTop: '20px'}}>
        <h2>Pagination</h2>
  
        <p>
          <input type="button" disabled={mDisable} onClick={() => pageMinus()} value={"<"}/>
          <label style={{marginTop: '6px', marginRight: '20px'}}> {page + 1} / {Math.floor(filtered.length / count) + 1}</label>
          <input type="button" disabled={pDisable} onClick={() => pagePlus()} value=">"/>
        </p>
      </Row>
    </Container>
  );
}

export default PhotoApp;