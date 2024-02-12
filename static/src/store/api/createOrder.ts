import { Address, CategoryWithProductsInfo } from "../interfaces";
import makeApiRequest from "../../utils/apiUtils";
export const createOrder = async (
  userUID: string,
  categoryWithProductsInfo: CategoryWithProductsInfo[],
  amount: number,
  deliveryAddress: Address
) => {
  const requestOptions = {
    url: 'createOrder',
    data: {
      userUID,
      categoryWithProductsInfo,
      amount,
      deliveryAddress,
    },
  };

  return await makeApiRequest(requestOptions);
};
