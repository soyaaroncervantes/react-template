import { existsSync, readFileSync, writeFileSync } from "node:fs"

const DTS_HEADER = `/// <reference types="vite/client" />`
const BIOME_IGNORE = `// biome-ignore lint/correctness/noUnusedVariables: Vite type augmentation`

export function syncViteEnv(exampleContent: string, dtsPath: string): "updated" | "up-to-date" {
  const viteKeys: string[] = []

  for (const line of exampleContent.split("\n")) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith("#")) continue
    const eqIndex = trimmed.indexOf("=")
    if (eqIndex <= 0) continue
    const key = trimmed.slice(0, eqIndex).trim()
    if (key.startsWith("VITE_")) viteKeys.push(key)
  }

  const fields = viteKeys.map((k) => `  readonly ${k}: string`).join("\n")
  const dtsContent = `${DTS_HEADER}

interface ImportMetaEnv {
${fields}
}

${BIOME_IGNORE}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
`

  const existing = existsSync(dtsPath) ? readFileSync(dtsPath, "utf-8") : ""

  if (existing === dtsContent) return "up-to-date"

  writeFileSync(dtsPath, dtsContent, "utf-8")
  return "updated"
}
