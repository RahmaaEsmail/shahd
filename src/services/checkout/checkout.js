import { apiInstance } from "../../api/apiInstance"
import { userEndPoints } from "../../api/userEndPoints"

export const handleCheckout = async (data) => {
    const response = await apiInstance.post(userEndPoints.checkout, data);
    return response.data;
}
