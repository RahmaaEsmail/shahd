import { apiInstance } from "../../api/apiInstance";
import { userEndPoints } from "../../api/userEndPoints";

export const handleGetWishlist = async (user_id) => {
  const response = await apiInstance.get(userEndPoints.get_wishlist, { params: { user_id } });
  return response.data;
};

export const handleToggleWishlist = async ({ user_id, product_id }) => {
  const response = await apiInstance.post(userEndPoints.toggle_wishlist, { 
    user_id, 
    product_id,
    id: product_id 
  });
  return response.data;
};
