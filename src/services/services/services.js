import { userEndPoints } from "../../api/userEndPoints"
import { apiInstance } from "../../api/apiInstance"

export const handleGetAllServicesData = async () => {
    const response = await apiInstance.get(userEndPoints.get_services_data)
    return response.data
}