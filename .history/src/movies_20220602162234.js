// The `movies` array from the file `src/data.js`.
const movies = require('./data');
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map((element) => {
    return element.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaMovies = movies.filter((element) => {
    return element.genre.includes('Drama');
  });
  const stevenDramas = dramaMovies.filter((element) => {
    return element.director === 'Steven Spielberg';
  });
  return stevenDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length !== 0) {
    const totalScore = movies.reduce((acc, element) => {
      if (!!element.score) {
        return acc + element.score;
      } else {
        return acc + 0;
      }
    }, 0);
    const averageScore = totalScore / movies.length;
    return Number(averageScore.toFixed(2));
  } else {
    return 0;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaScore = movies.filter((element) => {
    return element.genre.includes('Drama');
  });
  const average = scoresAverage(dramaScore);
  return average;
}
dramaMoviesScore(movies);
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let newMovies = JSON.parse(JSON.stringify(movies));
  const yearSort = newMovies.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return yearSort;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let newMovies = JSON.parse(JSON.stringify(movies));
  const alphaOrder = newMovies.sort((a, b) => {
    return a.title - b.title;
  });
  let titles = alphaOrder.map((element) => {
    return element.title;
  });

  let titles20 = titles.slice(0, 19);
  return titles20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
