import { useQuery } from "react-query";
import { getBoards } from "./api";

enum QueryKeys {
  boards = "boards",
}

export const useGetBoards = () => {
  return useQuery([QueryKeys.boards], getBoards);
};
