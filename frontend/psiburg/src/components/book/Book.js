// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { removeData } from '../../redux/books/books';
// import './Book.css';
// import image from './circle.png';

// const Book = (props) => {
//   const {
//     authers_name,age,date_of_birth,book_name,published_date,price,id
//   } = props;
//   const dispatch = useDispatch();
//   const removeBookFromStore = () => {
//     dispatch(removeData(id));
//   };
//   return (
//      <div className="book-container">
//      <div className="book-info-container">
//         <ul className="book-info">
//         <li className="book-title">{id}</li>
//       <li className="book-title">{authers_name}</li>
//     <li className="book-title">{age}</li>
//     <li className="book-title">{date_of_birth}</li>
//     <li className="book-title">{book_name}</li>
//     <li className="book-title">{published_date}</li>
//     <li className="book-title">{price}</li>
    
//         </ul>
//          <div className="buttons">
//            <button className="remove-button" type="button">Comments</button>
//            <span className="vertical-line">|</span>
//            <button className="remove-button" type="button" onClick={removeBookFromStore}>Remove</button>
//            <span className="vertical-line">|</span>
//            <button className="remove-button" type="button">Edit</button>
//          </div>
//        </div>
//        <div className="progress-container">
//          <img className="circle" src={image} alt="progress circle" />
//          <div className="completed-container">
//            <p className="percent-complete">64%</p>
//            <p className="completed">Completed</p>
//          </div>
//        </div>
//        <div className="chapter-container">
//          <p className="current-chapter">CURRENT CHAPTER</p>
//          <p className="chapter-number">Chapter 17</p>
//          <button className="update-progress" type="button">UPDATE PROGRESS</button>
//        </div>
//      </div>
 
//   );
// };

// Book.propTypes = {
//   id: PropTypes.string.isRequired,
//   authers_name: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired,
// };

// export default Book;




import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

 const Book = () => {
const [item,setItem] = useState([])
let { Id } = useParams();

const fetchingitem = () => {
  axios.get("http://localhost:5000/getbooks").then((res)=>{
    console.log(res.data)
    setItem(res.data)
  }).catch((error)=>{
    console.log(error)
  })
}

const deleteBook = (id) => {
   
   
  fetch(`http://localhost:5000/getbooks/delete/${id}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then(data=>alert("Book removed !"))
      fetchingitem();
  
}



useEffect(()=>{
  fetchingitem()
},[])
  return (
   
   <div>{item.map(e=>(
    <div style={{
      "width":"100%",
      "border": "1px solid black",

    }}>
            
            <table key={e.id}  >
        <tr>
           <th>Authers Name</th>
           <th>Books Name</th>
           <th>Creation time</th>
           <th>Authers Date of Bith</th>
           <th>Price</th>
           <th>Published Date</th>
           <th>Authers Age</th>
           

        </tr>
        <tr>
            <td>{e.authers_name}</td>
            <td>{e.book_name}</td>
            <td>{e.createdAt}</td>
            <td>  {e.date_of_birth}</td>
            <td> {e.price}</td>
            <td>{e.published_date}</td>
            <td>{e.age}</td>
            <button onClick={()=>deleteBook(e._id)}>Delete</button>
           
        </tr>
    </table>
          </div>
          
            
        ))}</div>



  )
}

export default Book;