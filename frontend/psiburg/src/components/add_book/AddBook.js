/* eslint-disable react/forbid-prop-types */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addData } from '../../redux/books/books';
import './AddBook.css';
import Book from '../book/Book';

const AddBook = (props) => {
  // const { categories } = props;
  const dispatch = useDispatch();
  const [authers_name, setAuthers_name] = useState('');
  const [age, setAge] = useState('');
  const [date_of_birth, setDate_of_birth] = useState('');
  const [book_name, setBook_name] = useState('');
  const [ published_date, setPublished_date] = useState('');
  const [price, setPrice] = useState('');
 


  const submitBookToStore = (event) => {
   alert("book is added")
  
    const newBook = {
       item_id: uuidv4(),
      authers_name,
      age,
      date_of_birth ,
     book_name,
     published_date,
    price,

    };
  
    dispatch(addData(newBook));
  };
  return (
    
    <div className="add-book-container">
   
      <h3 className="add-book-title">ADD NEW BOOK</h3>
      <div className="add-book-form-container">
  
    <input className="book-title-input" type="text" placeholder="Authers Name" onChange={(e) => setAuthers_name(e.target.value)} />,
    <input className="book-title-input" type="Number" placeholder="Authers Age" onChange={(e) => setAge(e.target.value)} />,
    <input className="book-title-input" type="Number" placeholder="Authers Date of Birth" onChange={(e) => setDate_of_birth(e.target.value)} />,
    <input className="book-title-input" type="text" placeholder="Book Name" onChange={(e) => setBook_name(e.target.value)} />,
    <input className="book-title-input" type="Number" placeholder="Published Date" onChange={(e) => setPublished_date(e.target.value)} />,
    <input className="book-title-input" type="Number" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />,
       
     <button className="add-book-button" type="button" onClick={submitBookToStore}>ADD BOOK</button>
     </div>
     <div>
     <Book/>
     </div>
   </div>
   
  );
};

AddBook.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default AddBook;
