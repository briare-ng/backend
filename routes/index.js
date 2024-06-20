var express = require("express");
var router = express.Router();
var fetch = require("node-fetch");
// api_key
const APIToken = process.env.movieDB_api_token;
//router.get
router.get("/movies", (req, res) => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=fr";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + APIToken,
    },
  };
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      res.json({ movies: data.results });
    })
    .catch((err) => console.error("error:" + err));
});

router.get("/shows", (req, res) => {
  const url = "https://api.themoviedb.org/3/trending/tv/day?language=fr";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + APIToken,
    },
  };
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      res.json({ movies: data.results });
    })
    .catch((err) => console.error("error:" + err));
});

router.get("/people", (req, res) => {
  const url = "https://api.themoviedb.org/3/trending/person/day?language=fr";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + APIToken,
    },
  };
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      res.json({ movies: data.results });
    })
    .catch((err) => console.error("error:" + err));
});

module.exports = router;
