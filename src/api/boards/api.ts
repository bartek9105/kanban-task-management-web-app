import supabase from "../../supabase";
import { Board } from "./models";

export const getBoards = async (): Promise<Board[] | null> => {
  const { data } = await supabase.from("boards").select(`*`);

  return data;
};

export const getLists = async () => {
  const { data } = await supabase.from("lists").select(`
    *,
    tasks (
      name
    )
  `);

  return data;
};
