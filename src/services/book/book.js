import { userEndPoints } from "../../api/userEndPoints"
import { apiInstance } from "../../api/apiInstance"

export const handleGetAllBookData = async () => {
    const response = await apiInstance.get(userEndPoints.get_book_data)
    return response.data
}