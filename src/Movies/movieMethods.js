const Film = require("./movieModel");

exports.addFilm = async (filmObj) => {
  try {
    await Film.sync()
    await Film.create({
      name: filmObj.title,
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

exports.deleteFilm = async (film) => {
  try {
    // await Film.sync()
    await Film.destroy({
      where: {
        id: film.id
      }
    })
  } catch (error) {
    console.log(error)
  }
}