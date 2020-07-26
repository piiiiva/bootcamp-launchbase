const Category = require('../models/Category')
const Product = require('../models/Product')


module.exports = {
  create(req, res) {
    // Pegar Categorias usando Promises
    Category.all().then(function (results) { // Só vamos renderizar a página quando tivermos o resultado de Category.all()

      const categories = results.rows

      return res.render('products/create.njk', { categories })
    }).catch(function (err) {
      throw new Error(err)
    })
  },
  
  async post(req, res) {
    // Lógica de salvar usando async await
    const keys = Object.keys(req.body)

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send('Please, fill all fields')
      }
    }

    let results = await Product.create(req.body)
    const productId = results.rows[0].id
    console.log(`Primeiro results ${results}`)

    results = await Category.all()
    const categories = results.rows
    console.log(`Segundo results ${results}`)

    return res.render('products/create.njk', { productId, categories })

  }
}