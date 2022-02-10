const { addFilm, list, deleteFilm } = require("./Movies/movieMethods");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const app = async () => {
  if (argv.add) {
    await addFilm(argv)
  } else if (argv.list) {
    await list()
  } else if (argv.delete) {
    await deleteFilm(argv)
  } else {
    console.log("Wrong command")
  }
}

app();