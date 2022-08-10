var express = require("express");
var router = express.Router();
var novedadesModel = require("../../models/novedadesModel");

/* GET login page. */
router.get("/", async function (req, res, next) {
  var novedades = await novedadesModel.getNovedades();

  res.render("admin/novedades", {
    layout: "admin/layout",
    persona: req.session.nombre,
    novedades,
  });
});

router.get("/agregar", (req, res, next) => {
  res.render("admin/agregar", {
    layout: "admin/layout",
  });
});

router.post("/agregar", async (req, res, next) => {
  const data = req.body;
  try {
    if (data.titulo != "" && data.subtitulo != "" && data.cuerpo != "") {
      await novedadesModel.postNovedades(data);
      res.redirect("/admin/novedades");
    } else {
      res.render("admin/agregar", {
        layout: "admin/layout",
        error: true,
        message: "Todos los campos son requeridos",
      });
    }
  } catch (error) {
    console.error(error);
    res.render("admin/agregar", {
      layout: "admin/layout",
      error: true,
      message: "No se cargo la novedad",
    });
  }
});

router.get("/eliminar/:id", async (req, res, next) => {
  var id = req.params.id;
  await novedadesModel.deleteNovedadesById(id);
  res.redirect("/admin/novedades");
});

router.get("/editar/:id", async (req, res, next) => {
  var id = req.params.id;
  var novedad = await novedadesModel.getNovedadById(id);

  res.render("admin/editar", {
    layout: "admin/layout",
    novedad,
  });
});

router.post("/editar", async (req, res, next) => {
  try {
    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo,
    };
    console.log(obj);
    await novedadesModel.editarNovedadById(obj, req.body.id);
    res.redirect("/admin/novedades");
  } catch (error) {
    console.error(error);
    res.render("admin/editar", {
      layout: "admin/layout",
      error: true,
      message: "No se edito la novedad",
    });
  }
});

module.exports = router;
