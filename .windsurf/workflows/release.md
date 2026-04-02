---
description: Create a new release — bump version, tag, and generate GitHub release notes
---

## Steps

1. Check git status to ensure the working tree is clean
```
git status
```

2. Get the current version from package.json and ask the user for the next version (patch / minor / major)

3. Bump the version in `package.json`

4. Commit the version bump
```
git add package.json && git commit -m "chore(release): bump version to v<NEW_VERSION>"
```

5. Push the commit
```
git push
```

6. Generate release notes from commits since the last tag
```
git log $(git describe --tags --abbrev=0)..HEAD --pretty=format:"- %s (%h)" --no-merges
```

7. Group the commits by type (feat, fix, chore, style, refactor, docs) and format as markdown (see template below)

8. Create the annotated tag
```
git tag -a v<NEW_VERSION> -m "chore(release): v<NEW_VERSION>"
```

9. Push the tag
```
git push origin v<NEW_VERSION>
```

10. Output the final markdown release note so the user can copy-paste it into GitHub Releases

---

## Release note template

```md
## chore(release): v<NEW_VERSION>

### Features
- ...

### Bug Fixes
- ...

### Refactors
- ...

### Styles
- ...

### Chores
- ...
```
