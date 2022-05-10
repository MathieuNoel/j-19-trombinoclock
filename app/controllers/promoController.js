const promos = require("../../data/promos.json");

const promoController = {
  /**
   * Display promos list page
   * @param {request} req request object
   * @param {response} res response object
   */
  getPromosList(req, res) {
    // on renvoie la liste des promos
    res.render("promos", { promos });
  },

  /**
   * Display promo details page
   * @param {request} req request object 
   * @param {response} res response objet 
   * @param {function} next function to call next middleware
   */
  getPromoDetails(req, res, next) {
    // on récupére la valeur de l'id contenu dans la route
    const promoId = req.params.id;
    // on cherche dans le tableau des promos celle dont l'id est égal à l'id reçu via l'url
    const promo = promos.find((promo) => promo.id === +promoId);
    if (promo) {
      // si la promo existe, on renvoie la page de détail
      res.render("promoDetails", { promo });
    } else {
      // si la promo n'existe pas, on passe au middleware suivant
      next();
    }
  },
  
};

// on exporte le controller
module.exports = promoController;
