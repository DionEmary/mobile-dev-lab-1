import supabase from "./supabase";

const TABLE_NAME = "sampleDatabase";

export async function getUserName() {
    const { data, error } = await supabase.from(TABLE_NAME).select("*");
    if (error) {
        throw error;
    }
    return data;
}