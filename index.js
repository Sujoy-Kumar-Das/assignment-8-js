// Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.

const books = [
  { title: "book1", author: "author1", year: 2024 },
  { title: "book2", author: "author2", year: 2024 },
  { title: "book3", author: "author3", year: 2024 },
  { title: "book4", author: "author4", year: 2024 },
  { title: "book5", author: "author5", year: 2024 },
];

const createNewBookArray = (booksArray) => {
  const newBooksArray = booksArray.reduce((acc, item) => {
    acc.push(item.title);
    return acc;
  }, []);
  console.log(newBooksArray);
};

createNewBookArray(books);

// Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array.

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumFunc = (numArray) => {
  const sum = numArray.reduce((total, current) => {
    if (current % 2 === 0) {
      return total + current;
    } else {
      return total;
    }
  }, 0);

  console.log(sum);
};

sumFunc(numbersArray);

// Write A Function That Takes An Array Of Numbers And Returns The Maximum Value.

const maximumNumber = (num) => {
  const maximumNumb = Math.max(...num);
  console.log(maximumNumb);
};

maximumNumber(numbersArray);

// Write A Function That Counts The Number Of Vowels In A Given String.

const countVowels = (str) => {
  const strLowerCase = str.toLowerCase();
  const strArray = strLowerCase.split("");
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  strArray.forEach((ch) => {
    if (vowels.includes(ch)) {
      vowelCount++;
    }
  });
  console.log(vowelCount);
};

countVowels("abce");
