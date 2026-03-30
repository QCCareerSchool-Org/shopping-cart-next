# AGENTS.md

This file defines repo-specific working rules for coding agents in this project.

## Scope

- Keep changes narrowly scoped to the file or feature the user asked about.
- Do not edit promo copy, layout, or adjacent pages unless the user explicitly asks for that.
- If related files need to be read for context, read them, but do not modify them without clear permission.
- In this repo, "related" often crosses tenant boundaries. Read freely, but assume changes must stay within the named tenant unless the task is explicitly cross-site.

## Project

- Framework: Next.js 16 with React 19 and TypeScript.
- Main source tree: `src/`.
- This is a host-routed multi-tenant app. The tenants are subsidiary schools: Event, Design, Makeup, Pet, etc. Tenant resolution is defined in `src/lib/sites.ts` and request rewriting happens in `src/proxy.ts`.
- Public tenant implementations live under `src/app/sites/<tenant>/`.
- Internal tenant pages live under `src/app/internal/<tenant>/`.
- Prefer preserving existing patterns in nearby files over introducing new abstractions for one-off changes.

## Multi-Tenant Rules

- Treat each tenant as its own product surface with its own layout, assets, analytics IDs, metadata, copy, and business rules.
- Do not assume a change for one tenant should be mirrored to others.
- Before changing routing, domains, redirects, or canonical paths, inspect both `src/proxy.ts` and `src/lib/sites.ts`.
- `src/proxy.ts` rewrites incoming requests based on the `host` header into `/sites/<tenant>/...`. Do not break this assumption by moving pages without considering the rewrite path.
- `src/proxy.ts` also protects `/sites/*` from direct canonical access and remaps `/continued-education` to `/student`. Preserve those behaviors unless the task explicitly changes routing.
- Paths such as `/event/...`, `/design/...`, etc. may refer to public assets. Be careful when changing matcher or rewrite logic so static asset access still works.
- Site layouts under `src/app/sites/<tenant>/layout.tsx` are tenant-specific. Avoid editing another tenant's layout, metadata, tracking, or chat script when working on one tenant.
- Internal pages may intentionally reuse public tenant data such as agreement links or course groups. Keep shared data changes conservative because they can affect both public and internal flows.

## Commands

- Lint: `npm run lint`
- Build: `npm run build`
- Dev server: `npm run dev`

## Editing Guidelines

- Prefer minimal, local edits over broad refactors.
- Preserve existing naming, file structure, and copy unless the task is explicitly about changing them.
- For page-specific course-group customization, avoid mutating shared source data directly.
- If a reusable helper is introduced, it must preserve current behavior exactly before any cleanup is considered complete.
- When editing tenant pages, prefer tenant-local configuration over changing shared routing or shared tenant registries unless the request is explicitly infrastructural.
- If a change touches shared files used by multiple tenants, call out the blast radius before editing.

## Verification

- If lint or build cannot run because the shell environment is missing `node` or `npm`, say so explicitly and report the exact blocker.
- For routing or tenant-resolution changes, verify the affected hostname-to-path mapping logically against `src/lib/sites.ts` and `src/proxy.ts`, even if a full runtime test is not possible.

## Communication

- Call out assumptions when behavior depends on business rules that are not obvious from the code.
- If a proposed cleanup changes semantics, stop and say that plainly instead of presenting it as equivalent.
- If a request appears tenant-local, state that you will keep the change within that tenant unless asked otherwise.
