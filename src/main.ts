import './reset.css'
import './styles.css'

const titleInput = document.querySelector('#title-input') as HTMLInputElement;
const authorInput = document.querySelector('#author-input') as HTMLInputElement;
const searchButton = document.querySelector('#search-button') as HTMLButtonElement;

const resetButton = document.querySelector('#reset-button') as HTMLButtonElement;
const list = document.querySelector('#book-list') as HTMLUListElement;


const gatherInput = () => {
  // See Step 2 in the README
}

export const performSearch = async (queryObject: {title?: string, author?: string, fields?: string}) => {
  // See Step 3 in the README
}

// data: BookResponse is a TypeScript thing ... gives VSCode a hint of what the data has inside it
const processData = (data: BookResponse) => {
  // See Step 4 in the README
}

// Some TypeScript interfaces that describe the shape of the API response
// So we can get good code hinting
interface Book {
  title: string,
  author_name: string[],
  cover_i: string,
}

interface BookResponse {
  docs: Book[],
}