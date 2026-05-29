#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

NODE_VERSION="22.14.0"
PNPM_VERSION="11.0.0"

echo "→ Setting up juanallo.github.io (Node ${NODE_VERSION}, pnpm ${PNPM_VERSION})"
echo "  Project root: ${ROOT}"
echo

if command -v volta >/dev/null 2>&1; then
  echo "→ Installing Node ${NODE_VERSION} with Volta"
  volta install "node@${NODE_VERSION}"
else
  echo "→ Volta not found; using current Node ($(node -v 2>/dev/null || echo 'not installed'))"
  echo "  This project requires Node >= 22. Install Volta (https://volta.sh) or use nvm/fnm."
  node -e "const major = parseInt(process.version.slice(1), 10); if (major < 22) { console.error('Node 22+ required'); process.exit(1); }" \
    || exit 1
fi

echo "→ Enabling Corepack (provides pnpm from packageManager in package.json)"
corepack enable
corepack prepare "pnpm@${PNPM_VERSION}" --activate

echo "→ Installing dependencies with pnpm"
pnpm install

echo
echo "Done. Run:"
echo "  pnpm run dev      # local dev server"
echo "  pnpm run build    # production build"
