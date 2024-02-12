import makeApiRequest from "../../utils/apiUtils";

export const removeProductFromCartOfUser = async (
  userUID: string,
  product: string,
  quantity: number
) => {
  const requestOptions = {
    url: "removeFromCart",
    data: {
      userUID,
      product,
      quantity,
    },
  };
  return await makeApiRequest(requestOptions);
};
