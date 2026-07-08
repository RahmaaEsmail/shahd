import { useQuery } from "@tanstack/react-query";
import { handleGetRoutineDetails } from "../../services/routine/routine";

export function useRoutineDetails({ id }) {
  return useQuery({
    queryKey: ["ROUTINE_DETAILS", id],
    queryFn: () => handleGetRoutineDetails({ id }),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 60,
  });
}
