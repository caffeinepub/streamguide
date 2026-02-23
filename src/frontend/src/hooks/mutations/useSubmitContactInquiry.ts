import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from '../useActor';
import { ContactMethod, Grade, WhoIsFilling } from '../../backend';

interface SubmitContactInquiryParams {
  name: string;
  whoIsFilling: WhoIsFilling;
  grade: Grade;
  cityState: string;
  email: string;
  phone: string;
  preferredContactMethod: ContactMethod;
  message: string;
}

export function useSubmitContactInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: SubmitContactInquiryParams) => {
      if (!actor) throw new Error('Actor not available');

      const id = await actor.submitContactInquiry(
        params.name,
        params.whoIsFilling,
        params.grade,
        params.cityState,
        params.email,
        params.phone,
        params.preferredContactMethod,
        params.message
      );

      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactInquiries'] });
    },
  });
}
