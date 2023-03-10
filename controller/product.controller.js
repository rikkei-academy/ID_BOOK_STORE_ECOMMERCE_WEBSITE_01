const { getAllProd, addProd, updateProduct,deleteProd,searchProd } = require("../model/product");
module.exports.getAllProd = async (req, res) => {
  try {
    let {page,per_page}=req.query
    let min=(Number(page)-1)*Number(per_page);
    let max=Number(page)*Number(per_page);
    let [result] = await getAllProd(min,max);
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
module.exports.searchPro=async(req,res)=>{
    try{
      let [result]=  await searchProd(req.query.name)
        res.status(200).json({
            status:'success',
            data:result
        })
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}