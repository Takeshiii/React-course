import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatus } from "../redux/ui/request/selectors";

export function useMakeRequest(thunk) {
  const [requestId, setRequestId] = useState();

  const requestStatus = useSelector((state) =>
    selectRequestStatus(state, requestId)
  );

  const dispatch = useDispatch();

  const makeRequest = useCallback(
    (...params) => {
      const request = dispatch(thunk(...params));

      setRequestId(request.requestId);
    },
    [dispatch, thunk]
  );

  return [requestStatus, makeRequest];
}
