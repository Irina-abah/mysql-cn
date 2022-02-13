const { addFilm, list, findMovies, deleteFilm, updateFilm } = require("./Movies/movieMethods");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const app = async () => {
  if (argv.add) {
    await addFilm(argv)
  } else if (argv.list) {
    await list()
  } else if (argv.find) {
    await findMovies()
  } else if (argv.delete) {
    await deleteFilm(argv)
  } else if (argv.update) {
    await updateFilm(argv)
  } else {
    console.log("Wrong command")
  }
}

app();