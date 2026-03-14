import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Grade } from "../../backend";
import { useActor } from "../useActor";

interface SubmitPsychometricTestBookingParams {
  name: string;
  grade: Grade;
  email: string;
  phone: string;
  cityState: string;
  preferredDate: string;
  preferredTimeWindow: string;
  notes: string;
}

export function useSubmitPsychometricTestBooking() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: SubmitPsychometricTestBookingParams) => {
      if (!actor) throw new Error("Actor not available");

      const id = await actor.submitPsychometricTestBooking(
        params.name,
        params.grade,
        params.email,
        params.phone,
        params.cityState,
        params.preferredDate,
        params.preferredTimeWindow,
        params.notes,
      );

      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["psychometricTestBookings"] });
    },
  });
}
