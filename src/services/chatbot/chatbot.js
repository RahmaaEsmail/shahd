import { apiInstance } from "../../api/apiInstance"
import { userEndPoints } from "../../api/userEndPoints"

export const handleStartSession = async (data) => {
    const response = await apiInstance.post(userEndPoints.start_session , data);
    return response.data
}

export const handleSendMessage = async(data) => {
    const response = await apiInstance.post(userEndPoints.send_message , data);
    return response.data;
}

export const handleGetHistory = async(session_key) => {
    const response = await apiInstance.get(userEndPoints.get_history+`?session_key=${session_key}`)
    return response.data;
}