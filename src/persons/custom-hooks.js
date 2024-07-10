import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { ALL_PERSONS, FIND_PERSON } from "./grapghql-queries";
import { CREATE_PERSON, EDIT_NUMBER } from "./grapghql-mutations";

export const usePersons = () => {
  return useQuery(ALL_PERSONS);
};

export const usePerson = () => {
  return useLazyQuery(FIND_PERSON);
};

export const useAddPerson = (notifyError) => {
  return useMutation(CREATE_PERSON, {
    refetchQueries: [{ query: ALL_PERSONS }],
    onError: (error) => {
      notifyError(error.graphQLErrors[0].message);
    },
  });
};

export const useChangePerson = () => {
  return useMutation(EDIT_NUMBER, {
    refetchQueries: [{ query: ALL_PERSONS }],
  });
};
