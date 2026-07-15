import {
  handleStartSession,
  handleSendMessage,
  handleGetHistory,
} from "../../services/chatbot/chatbot";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useStartSession = () => {
  return useMutation({
    mutationFn: handleStartSession,
  });
};

export const useSendMessage = () => {
  return useMutation({
    mutationFn: handleSendMessage,
  });
};

export const useGetHistory = ({ session_key }) => {
  return useQuery({
    queryKey: ["GET_CHATBOT_HISTORY", session_key],
    queryFn: () => handleGetHistory(session_key),
    // enabled: !!session_key,
  });
};
