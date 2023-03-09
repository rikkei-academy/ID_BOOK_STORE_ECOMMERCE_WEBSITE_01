const { getAllProd, addProd, updateProduct,deleteProd } = require("../model/product");
module.exports.getAllProd = async (req, res) => {
  try {
    let [result] = await getAllProd();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports.addProd = async (req, res) => {
  try {
    const {
      name,
      stock,
      price,
      year,
      rating,
      description,
      image,
      author,
      title,
      cate,
    } = req.body;
    await updateProduct(
      name,
      stock,
      price,
      year,
      rating,
      description,
      image,
      author,
      title,
      cate
    );
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports.updateProd = async (req, res) => {
  try {
    const { stock} = req.body;
    const id=req.params.id
    await updateProduct(stock, id);
    res.status(200).json({
      status: "Success",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.delProd=async(req,res)=>{
try{
    await deleteProd(req.params.id)
    res.status(200).json({
        status:'success'
    })
}
catch(err)
{
    res.status(500).json(err)
}
}
