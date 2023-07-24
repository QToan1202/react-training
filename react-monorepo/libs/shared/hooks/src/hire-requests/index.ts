import { useMutation, useQueryClient } from "@tanstack/react-query";
import { shallow } from "zustand/shallow";

import { add } from "@react-monorepo/shared/services";
import { IHireRequest } from "@react-monorepo/shared/types";
import { useHiredStore } from "@react-monorepo/shared/stores";

export const useMutateAddHireRequest = () => {
  const queryClient = useQueryClient()
  const { addHireRequest } = useHiredStore((state) => ({ addHireRequest: state.add }), shallow)

  const addMutation = useMutation({
    mutationFn: (variables: { path: string; options: Partial<IHireRequest> }): Promise<IHireRequest> =>
      add<IHireRequest>(variables.path, variables.options),

    onSuccess: (data) => {
      queryClient.invalidateQueries(['hire-requests'])
      addHireRequest(data)
    },
  })

  return addMutation
}
