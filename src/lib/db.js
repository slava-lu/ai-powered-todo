import postgres from "postgres";

const sql = postgres({ ssl: "prefer" });

export default sql;
