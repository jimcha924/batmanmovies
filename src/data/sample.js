import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from "react-bootstrap";



const Batman = () => {
  const [Title, setTitle] = useState([]); //[{}, {}, {}]
  const [Poster, setPoster] = useState(""); //[{}, {}, {}]
  const [Year, setYear] = useState(""); //[{}, {}, {}]

  //componentDidMount
  useEffect(()=>{

      const batData = async() => {
          let response = await fetch('http://www.omdbapi.com/?s=batman&apikey=46ed4d89');
          let data = await response.json();

          // console.log(data);

          //set state
          setTitle(Title => data.Title)

          console.log(Title); //this is our state
      }
      
      batData();

  }, [])

  const handleClick = (index) => {
    console.log(index)

    let title = Title[index];

    setTitle(Title.title);

    setYear(title.year);
  }

return (
  <>
  {data.map(movieObj =>{
        return <>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movieObj.Poster} />
            <Card.Body>
              <Card.Title>{movieObj.Title}</Card.Title>
              <Card.Text>
                {movieObj.Year}
              </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
  </>
)
}



// const Batman = ({data}) => {
//   return <>
//     {data.map(movieObj =>{
//         return <>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={movieObj.Poster} />
//             <Card.Body>
//               <Card.Title>{movieObj.Title}</Card.Title>
//               <Card.Text>
//                 {movieObj.Year}
//               </Card.Text>
//           {/* <Button variant="primary">Go somewhere</Button> */}
//             </Card.Body>
//           </Card>
//           </>;
// })}
// </>;
//     };