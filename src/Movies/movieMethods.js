const Film = require("./movieModel");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

exports.addFilm = async (filmObj) => {
  try {
    await Film.sync()
    await Film.create({
      name: filmObj.name,
      actor: filmObj.actor
    })
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
		} else {
			console.log("No records matching your criteria")
		}
	} catch (error) {
		console.log(error)
	}
}

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

// exports.updateFilm = async (film) => {
//   try {
//     await Film.update(
//       {
//         name: film.name,
//         actor: film.actor,
//       }
//       ,
//       {where: {
//         id: film.id
//       }
//     })
//       console.log(film.name, "Movie was updated")
//   } catch (error) {
//     console.log(error)
//   }
// }

exports.updateFilm = async (filmId) => {
  try {
    await Film.update(
      {
        state: 0
      }
      ,
      {where: {
        id: filmId
      }
    })
      console.log("Movie was updated")
  } catch (error) {
    console.log(error)
  }
}