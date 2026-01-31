# Git Guidelines

To maintain a clean, reviewable codebase, follow these **simple rules**:

## Commit Messages

- Use **present tense** and **imperative style**.  
  Example: `Add login form validation`
- Keep it **short and descriptive**.
- Format: `<type>(<scope>): <short description>` (scope optional)

### Common Commit Types (Heads)

| Type       | When to Use                                                  | Example                                      |
| ---------- | ------------------------------------------------------------ | -------------------------------------------- |
| `feat`     | Adding a new feature                                         | `feat(auth): add login form validation`      |
| `fix`      | Bug fixes                                                    | `fix(auth): correct password mismatch error` |
| `docs`     | Documentation changes                                        | `docs(readme): update setup instructions`    |
| `style`    | Code style changes (formatting, linting, missing semicolons) | `style(button): fix indentation`             |
| `refactor` | Code refactoring without changing functionality              | `refactor(api): simplify request handler`    |
| `test`     | Adding or fixing tests                                       | `test(auth): add unit tests for login`       |
| `chore`    | Miscellaneous tasks, build process, or config updates        | `chore(ci): update GitHub Actions workflow`  |

> Using commit heads consistently improves readability, helps generate changelogs, and simplifies code review.

## Modular Commits

- Each commit should represent **one specific task or feature**.
- Avoid bundling unrelated changes in a single commit.

## Branching & PRs

- Always branch from `dev` for new work.
- Open a **Pull Request** to `dev` when your task is complete.
- Request at least **one review** before merging.

> Following these rules ensures code clarity, easier reviews, and scalable collaboration.
