const { Router } = require("express");
const { getMoviesController, createMoviesController } = require("../controllers/moviesController");
const { validationMoviesInfo } = require("../middlewares/index")

const moviesRouter = Router();

moviesRouter.get("/", getMoviesController)
moviesRouter.post("/", validationMoviesInfo, createMoviesController)


module.exports = {
    moviesRouter
}