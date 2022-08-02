var express = require("express");
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel')

/* GET login page. */
router.get("/", async function (req, res, next) {

  var novedades = await novedadesModel.getNovedades()

  res.render("admin/novedades", {
    layout: "admin/layout",
    persona: req.session.nombre,novedades
  });
});

router.get('/agregar', (req,res,next) => {
  res.render("admin/agregar", {
    layout: "admin/layout"
  });
})

router.post('/agregar', async (req,res,next) => {
  const data = req.body
  try {
    if (data.titulo != "" && data.subtitulo != "" && data.cuerpo !=""){
      await novedadesModel.postNovedades(data);
      res.redirect('/admin/novedades')
    }else{
      res.render("admin/agregar", {
        layout: "admin/layout",
        error: true,
        message: "Todos los campos son requeridos"
      });
    }
  } catch (error) {
    console.error(error)
    res.render("admin/agregar", {
      layout: "admin/layout",
      error: true,
      message: "No se cargo la novedad"
    });
  }
})


module.exports = router;