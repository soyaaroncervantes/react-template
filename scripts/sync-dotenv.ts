import { appendFileSync, existsSync, readFileSync, writeFileSync } from "node:fs"

function parseKeys(content: string): Set<string> {
  const keys = new Set<string>()
  for (const line of content.split("\n")) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith("#")) continue
    const eqIndex = trimmed.indexOf("=")
    if (eqIndex > 0) keys.add(trimmed.slice(0, eqIndex).trim())
  }
  return keys
}

export type SyncDotenvResult =
  | { status: "created" }
  | { status: "updated"; added: string[] }
  | { status: "up-to-date" }

export function syncDotenv(exampleContent: string, envPath: string): SyncDotenvResult {
  if (!existsSync(envPath)) {
    writeFileSync(envPath, exampleContent, "utf-8")
    return { status: "created" }
  }

  const envContent = readFileSync(envPath, "utf-8")
  const existingKeys = parseKeys(envContent)
  const added: string[] = []
  let toAppend = ""

  for (const line of exampleContent.split("\n")) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith("#")) continue
    const eqIndex = trimmed.indexOf("=")
    if (eqIndex <= 0) continue
    const key = trimmed.slice(0, eqIndex).trim()
    if (!existingKeys.has(key)) {
      toAppend += `\n${line}`
      added.push(key)
    }
  }

  if (!toAppend) return { status: "up-to-date" }

  appendFileSync(envPath, toAppend, "utf-8")
  return { status: "updated", added }
}
