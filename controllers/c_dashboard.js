var controller = {}

controller.calculatrice = async (req, res) => {
    res.render('homepage/index', {
        title: "Calculatrice"
    })
}


module.exports = controller;