import { axiosWithCreds, axiosWithoutCreds } from "./axiosInstances";

export const createsubscription = async (planId) => {
  const { data } = await axiosWithCreds.post("/subscription", { planId });
  return data;
};
