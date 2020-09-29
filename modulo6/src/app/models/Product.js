const db = require('../../config/db')

module.exports = {
  create(data) {
    const query = `
      INSERT INTO products (
        category_id,
        user_id,
        name,
        description,
        old_price,
        price,
        quantity,
        status
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id
    `
    // entra R$ 1,23
    data.price = data.price.replace(/\D/g, "") // pega tudo o que não é Dígito e troca por vazio
    // Guardamos no banco 123. Depois quando pegarmos esse dado do banco basta dividir por 100

    const values = [
      data.category_id,
      data.user_id || 1,
      data.name,
      data.description,
      data.old_price || data.price,
      data.price,
      data.quantity,
      data.status || 1,
    ]

    return db.query(query, values)
  },

  find(id) {
    return db.query('SELECT * FROM products WHERE id = $1', [id]) // lembrando que o segundo parâmetro é o values
  }
}