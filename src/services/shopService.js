import Shop from "../models/Shop.js";

const ShopService = {
  createShop: async (infoShop) => {
    try {
      const result = await Shop.create(infoShop);
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};

export default ShopService;
