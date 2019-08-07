import IdentityModelGenerated from "./generated/IdentityModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await IdentityModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...IdentityModelGenerated,
  ...customModel
};
