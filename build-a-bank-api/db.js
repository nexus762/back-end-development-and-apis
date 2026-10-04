import { readFile, writeFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const ___dirname = dirname(fileURLToPath(import.meta.url));
const DB_PATH = join(___dirname, "accounts.json");

export async function getAccounts() {
    const data = await readFile(DB_PATH, "utf-8");
    return JSON.parse(data);
}

export async function saveAccounts(accounts) {
    await writeFile(DB_PATH, JSON.stringify(accounts, null, 2))
}