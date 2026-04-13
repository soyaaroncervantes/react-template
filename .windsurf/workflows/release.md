---
description: Create a new release — bump version, tag, and push (GitHub Actions handles release notes)
---

## Steps

1. Check git status to ensure the working tree is clean
```
git status
```

2. Get the current version from `package.json` and determine the next version based on commits since last tag:
   - **patch** (0.x.Y): bug fixes only
   - **minor** (0.X.0): new features (backwards compatible)
   - **major** (X.0.0): breaking changes

3. Bump the version in `package.json`

4. Commit the version bump using conventional commit format
```
git add package.json && git commit -m "chore(release): bump version to v<NEW_VERSION>"
```

5. Create the annotated tag
```
git tag -a v<NEW_VERSION> -m "chore(release): v<NEW_VERSION>"
```

6. Push the commit and tag together
```
git push && git push origin v<NEW_VERSION>
```

---

## What happens next

The GitHub Action at `.github/workflows/release.yml` will automatically:
- Detect the new tag push
- Generate release notes from commits since the previous tag
- Group commits by type (feat, fix, refactor, style, docs, chore)
- Create a GitHub Release with formatted notes

No manual release note creation needed!
