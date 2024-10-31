const { Router } = require("express");
const { getMoviesController, createMoviesController } = require("../controllers/moviesController");

const moviesRouter = Router();

moviesRouter.get("/", getMoviesController)
moviesRouter.post("/", createMoviesController)


module.exports = {
    moviesRouter
}