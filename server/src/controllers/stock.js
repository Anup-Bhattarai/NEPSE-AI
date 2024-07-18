const Stock =require('../models/stock')
const stockSchema = (req, res) => {
  Stock.create(req.body)
  res.send("ok created");
}
module.exports ={stockSchema}