// on require les values de nos fichier json
const students =require("../../data/students.json");
const promos = require('../../data/promos.json');

const studentController = {
  getStudentList(req, res){
    const promoId = req.params.id;
    const promoFound = promos.find(promo => promo.id === +promoId)
    const studentsFound = students.filter(student => student.promo === +promoId)
    res.render("students",{
      promo : promoFound,
      studentsFound 
    })
  },
  getStudents(req, res, next){
    const promoId = req.params.id;
    const promoFound = promos.find(promo => promo.id === +promoId)
    // on récupére la valeur de l'id contenu dans la route
    const promoStudent = req.params.studentId;
    // on cherche dans le tableau des promos celle dont l'id est égal à l'id reçu via l'url
    const student = students.find(student => student.id === +promoStudent);
    console.log('BLABLA',student)
    if (student) {
      // si l'étudient existe, on renvoie la page de détail
      res.render("student", { 
        student,
        promoFound
      });
    } else {
      // si l'étudient n'existe pas, on passe au middleware suivant
      next();
    }
  }
}
module.exports = studentController
