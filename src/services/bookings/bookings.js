import { userEndPoints } from "../../api/userEndPoints"
import { apiInstance } from "../../api/apiInstance"

export const handleGetBookingBanner =async () => {
    const response = await apiInstance.get(userEndPoints.get_booking_banner);
    return response.data;
}

export const handleGetBookingAvailableDate =async () => {
    const response = await apiInstance.get(userEndPoints.get_booking_dates);
    return response.data;
}

export const handleGetBookingAvailableSlots =async (date_id) => {
    const response = await apiInstance.get(userEndPoints.get_booking_slots, { params: { date_id } });
    return response.data;
}

export const handleGetBookingServices =async () => {
    const response = await apiInstance.get(userEndPoints.get_booking_services);
    return response.data;
}

export const handleCreateBooking =async (data) => {
    const response = await apiInstance.post(userEndPoints.create_booking ,data);
    return response.data;
}


