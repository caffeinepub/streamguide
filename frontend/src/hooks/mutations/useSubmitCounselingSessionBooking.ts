import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from '../useActor';
import { Grade, PreferredMode, WhoIsFilling } from '../../backend';

interface SubmitCounselingSessionBookingParams {
  name: string;
  whoIsFilling: WhoIsFilling;
  grade: Grade;
  email: string;
  phone: string;
  cityState: string;
  preferredDate: string;
  preferredTimeWindow: string;
  preferredMode: PreferredMode;
  notes: string;
}

export function useSubmitCounselingSessionBooking() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: SubmitCounselingSessionBookingParams) => {
      if (!actor) throw new Error('Actor not available');

      const id = await actor.submitCounselingSessionBooking(
        params.name,
        params.whoIsFilling,
        params.grade,
        params.email,
        params.phone,
        params.cityState,
        params.preferredDate,
        params.preferredTimeWindow,
        params.preferredMode,
        params.notes
      );

      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['counselingSessionBookings'] });
    },
  });
}
