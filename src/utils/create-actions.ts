import { createAction } from "@reduxjs/toolkit";

function withPayloadType<T>() {
  return (t: T) => ({ payload: t });
}

const actionCreator = <Payload>(actionType: string) =>
  createAction(actionType, withPayloadType<Payload>());

export { actionCreator as createAction };
