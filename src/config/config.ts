import dotenv from "dotenv"

dotenv.config();

export const port = process.env.PORT!;
export const db = process.env.DB_URL!;
