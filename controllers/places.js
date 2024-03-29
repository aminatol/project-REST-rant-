const router = require("express").Router();

// GET /places
router.get("/", (req, res) => {
 let places = [
   {
     name: "H-Thai-ML",
     city: "Seattle",
     state: "WA",
     cuisines: "Thai, Pan-Asian",
     pic: "/images/h-thai-ml-tables.jpg",
   },
   {
     name: "Coding Cat Cafe",
     city: "Phoenix",
     state: "AZ",
     cuisines: "Coffee, Bakery",
     pic: "/images/coffee-cat.jpg",
   },
 ];

router.get("/new", (req, res) => {
  res.render("places/new");
});

  res.render("places/index", { places });
});

  router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
      if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }

      // Save the new data into places[id]
      places[id] = req.body
      res.redirect(`/places/${id}`)
  }
})

router.post("/", (req, res) => {
  console.log(req.body);
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "http://placekitten.com/400/400";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");
});



module.exports = router;
