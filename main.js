const readline = require('readline');
const { displayMovies, addMovie, updateMovie, deleteMovie, searchMovies, filterMovies } = require('./controller');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log('Movie Catalog CLI Application');
  console.log('1. Display Movie Catalog');
  console.log('2. Add New Movie');
  console.log('3. Update Movie Details');
  console.log('4. Delete Movie');
  console.log('5. Search Movies');
  console.log('6. Filter Movies');
  console.log('7. Quit');
}

function promptUserInput(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function handleUserInput() {
  displayMenu();
  const choice = await promptUserInput('Enter your choice: ');

  switch (choice) {
    case '1':
      displayMovies();
      break;
    case '2':
      await addMovie();
      break;
    case '3':
      await updateMovie();
      break;
    case '4':
      await deleteMovie();
      break;
    case '5':
      await searchMovies();
      break;
    case '6':
      await filterMovies();
      break;
    case '7':
      rl.close();
      process.exit(0);
    default:
      console.log('Invalid choice. Please try again.');
  }

  handleUserInput();
}

handleUserInput();
