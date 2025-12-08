# github-actions-playground

In this repo i play with differnt github actions


## conventional commits

In order to use github-actions that parse commit-messages we enforce commit-message style (https://www.conventionalcommits.org/en/v1.0.0/) with husky (https://typicode.github.io/husky/)

May introduce https://github.com/ridvanaltun/commitlint-plugin-selective-scope later to define valid 
scopes per type. 

# changeset based versioning

* https://github.com/changesets/changesets
  * creates markdown-files with yml-frontmatter in .changeset with random filename ... can be changed manually
  * changes root package.json version etc. ... for a non-npm project this may unneccesarily lead to merge-conflicts
* https://github.com/miniscruff/changie
  * similar to changesets but single file ... more lightweight ... but runs an executable via npx ... signing *sigh*


## semver

semver-checkers
* https://jubianchi.github.io/semver-check/#/^0.0.1/0.0.1-feature-feature3-date.20251211-job.3

## Maven

* ci friendly versions: https://maven.apache.org/guides/mini/guide-maven-ci-friendly.html (use `${revision}`, `${sha1}`
  and `${changelist}` as placeholders in pom file)

## LLM Chat References

* Git Versioning for Parallel Releaes: https://gemini.google.com/share/c92a1b820300
* Git Commit Messages Hooks on Windows: https://gemini.google.com/share/b87422106aa5
* Find latest git tag: https://chatgpt.com/share/692b4b11-4fb4-800b-9f1c-3ac33ddc9427
* Artifactory versioning strategy: https://chatgpt.com/share/693553bd-fa10-800b-928e-59d3e58e733d

## Web References

* feature-branch approach for npm-libs: https://oleksiipopov.com/blog/feature-branches-approach-in-ci-cd-of-npm-libraries/
  * the root npm package.json contains fish-atlas-sdk with version ^1.0.0
  * `npm i` resolves exactly that version
  * `npm update fish-atlas-sdk --save` will update it to ^1.1.0 but not to 1.1.1-main.1 as https://jubianchi.github.io/semver-check/#/^1.0.0/1.1.1-main.1 would suggest
  * for npm this therefore is a valid approach for feature-branch-publishing
