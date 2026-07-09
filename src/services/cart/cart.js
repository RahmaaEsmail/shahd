import { apiInstance } from "../../api/apiInstance"
import { userEndPoints } from "../../api/userEndPoints"

export const handleGetCart = async (user_id) => {
    const response = await apiInstance.get(userEndPoints.get_user_cart, { params: { user_id } });
    return response.data;
}

export const handleAddToCart = async ({ user_id, product_id, quantity }) => {
    const response = await apiInstance.post(userEndPoints.add_cart, { user_id, product_id, quantity });
    return response.data;
}

export const handleUpdateCart = async ({ cart_id, quantity }) => {
    const response = await apiInstance.post(userEndPoints.update_cart, { cart_id, quantity });
    return response.data;
}

export const handleDeleteCartItem = async ({ cart_id }) => {
    const response = await apiInstance.post(userEndPoints.delete_cart, { cart_id });
    return response.data;
}

export const handleClearCart = async ({ user_id }) => {
    const response = await apiInstance.post(userEndPoints.delete_cart, { user_id, clear_all: true });
    return response.data;
}
