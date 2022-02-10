const Film = require("./movieModel");
// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");
// const argv = yargs(hideBin(process.argv)).argv;

exports.addFilm = async (filmObj) => {
  try {
    await Film.sync()
    await Film.create(filmObj)
  } catch (error) {
    console.log(error)
  }
}

exports.list = async () => {
  try {
    const allMovies = await Film.findAll()
    console.log(allMovies)
  } catch (error) {
    console.log(error)
  }
}