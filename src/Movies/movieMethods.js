const Film = require("./movieModel");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

// add movie
exports.addFilm = async (filmObj) => {
  try {
    await Film.sync()
    await Film.create({
      name: filmObj.name,
      actor: filmObj.actor,
      duration: filmObj.duration,
      year: filmObj.year
    })
  } catch (error) {
    console.log(error)
  }
}

// list all movies
exports.list = async () => {
  try {
    const allMovies = await Film.findAll()
    console.log(allMovies)
  } catch (error) {
    console.log(error)
  }
}

// list movies by search criteria
exports.findMovies = async () => {
	try {
		if (argv.name) {
			const findbyName = await Film.findAll({
				where: {
					name: argv.name
				}
			})
			console.log(findbyName);
		} else if (argv.actor) {
			const findbyActor = await Film.findAll({
				where: {
					actor: argv.actor
				}
			})
			console.log(findbyActor);
		} else if (argv.duration) {
			const findbyDuration = await Film.findAll({
				where: {
					duration: argv.duration
				}
			})
			console.log(findbyDuration);
		} else if (argv.year) {
			const findbyYear = await Film.findAll({
				where: {
					year: argv.year
				}
			})
			console.log(findbyYear);
		} else {
			console.log("No records matching your criteria")
		}
	} catch (error) {
		console.log(error)
	}
}

// delete movie by ID
exports.deleteFilm = async (film) => {
  try {
    await Film.destroy({
      where: {
        id: film.id
      }
    })
  } catch (error) {
    console.log(error)
  }
}

// update movie by ID
exports.updateFilm = async (film) => {
  try {
    await Film.update(
      {
        name: film.name,
        actor: film.actor,
        duration: film.duration,
        year: film.year
      },
      {where: {
        id: film.id
      }
    })
      console.log(`Movie id: ${film.id} was updated`)
  } catch (error) {
    console.log(error)
  }
}