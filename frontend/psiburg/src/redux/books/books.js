import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const REMOVE_ALL_BOOKS = 'bookStore/books/REMOVE_ALL_BOOKS';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  item_id: payload.id,
});

export const removeAllBooks = () => ({ type: REMOVE_ALL_BOOKS });

export const getData = () => (dispatch) => {
  axios.get('http://localhost:5000/getbooks')
    .then((response) => {
      const books = response.data;
      Object.keys(books).forEach((itemId) => {
        const [book] = books[itemId];
        book.item_id = itemId;
        dispatch(addBook(book));
      });
    })
    .catch(() => {});
};

export const removeData = (id) => (dispatch) => {
  axios.delete(`http://localhost:5000/getbooks/${id}`)
    .then(() => dispatch(removeBook({ id })))
    .catch(() => {});
};

export const addData = (book) => (dispatch) => {
  axios.post('http://localhost:5000/addbooks', book)
    .then(() => {
      dispatch(addBook(book));
    })
    .catch(() => {});
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.item_id);
    case REMOVE_ALL_BOOKS:
      return [];
    default:
      return state;
  }
};

export default reducer;
