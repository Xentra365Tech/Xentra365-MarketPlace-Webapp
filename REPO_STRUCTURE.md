# Repository Structure

This repository is designed as a **single frontend codebase** with the **intent to scale into micro-frontends and backend microservices** in the future.  
The folder structure enforces modularity and clear boundaries between domains, making it easier to extract features as independent services later.

## Folder Structure

```

src/
├── app/             # App bootstrap & global config
│   ├── router.tsx
│   └── providers.tsx
│
├── shared/          # Truly shared, NO business logic
│   ├── ui/          # Buttons, modals, inputs
│   ├── hooks/       # Generic hooks
│   ├── lib/         # Axios, auth helpers
│   └── types/       # Shared contracts
│
├── features/        # Domain-driven modules
│   ├── auth/
│   │   ├── api.ts
│   │   ├── components/
│   │   ├── hooks.ts
│   │   ├── routes.tsx
│   │   └── types.ts
│   │
│   ├── listings/
│   ├── chat/
│   ├── payments/
│   └── profile/
│
├── main.tsx
└── index.css

```

## Key Principles

- Each feature folder is **self-contained**, ready to be extracted as a micro-frontend.
- `shared/` contains **only UI primitives, helpers, and type contracts**.
- No cross-feature dependencies; imports between features are **strictly forbidden**.
