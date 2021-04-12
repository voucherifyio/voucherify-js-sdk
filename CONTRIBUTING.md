# Contributing to Voucherify JS SDK

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local machine
2. Create a new branch: `git checkout -b MY_BRANCH_NAME`
3. Install yarn: `npm install -g yarn`
4. Install dependencies: `yarn`
5. To build and watch for code changes in development: `yarn start`
6. Add and commit your changes
7. Create a changeset: `yarn changeset`
8. Commit generated changeset file
9. Push your branch and create a [pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork) against `main` branch

## About changesets (for contributors)

[A changeset is](https://github.com/atlassian/changesets/blob/master/docs/adding-a-changeset.md#what-is-a-changeset) a piece of information about changes made in a commit or branch. Before creating a [pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork):

1. Run `yarn changeset`
2. Select the packages you want to include in the changeset using <kbd>↑</kbd> and <kbd>↓</kbd> to navigate to packages, and <kbd>space</kbd> to select a package. Hit enter when all desired packages are selected. If no package is selected, a blank changeset will be created (e.g: use a blank changeset when changing/adding `examples/` or changes outside of `packages/*`)
3. You will be prompted to select a bump type for each selected package. Select an appropriate bump type for the changes made
   - `major` version when you make incompatible API changes,
   - `minor` version when you add functionality in a backwards compatible manner, and
   - `patch` version when you make backwards compatible bug fixes
     > See [here](https://semver.org/) for more information on semver versioning
4. Your final prompt will be to provide a message to go alongside the changeset. This will be written into the changelog when the next release occurs. A good idea of what should be in a changeset is:
   - WHAT the change is
   - WHY the change was made
   - HOW a consumer should update their code
5. A new changeset file, written in Markdown, will be added to `.changeset/[UNIQUE_ID].md` - the message you have typed can be found here. You can edit this file and add additional information or bump type of any package
6. Once you're happy with the changeset commit this file to your branch

See [here](https://github.com/atlassian/changesets/blob/master/docs/adding-a-changeset.md#i-am-in-a-multi-package-repository-a-mono-repo) for more information about adding a changeset in a monorepo.

## About changesets (for maintainers)

1. Review [pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)
2. Merge [pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork) against `main` branch
3. A GitHub workflow will run and do automatic versioning from changesets and open a special pull request with title `Version Packages`
   - If a pull request `Version Packages` already exists (is open), then new changes are automatically combined into the existing PR so you can continue to review and merge other pull requests
4. Once you feel comfortable to make a release, merge `Version Packages` pull request against `main`
5. A GitHub workflow will run to:
   - Automatically publish packages to the npm registry
   - Create a [GitHub release](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/about-releases) with a changelog of all changes, and link changes to commits

## Available scripts

- `nvm use` - (if `nvm` is installed) switch to the current recommended version of Node.js
- `yarn` - installs dependencies and builds all packages
- `yarn start` - build all packages and watch for changes
- `yarn build` - build all packages
- `yarn docs` - build all packages documentation
- `yarn lint` - lint eslint errors and TypeScript errors in all packages
- `yarn lint:ts` - lint only TypeScript errors in all packages
- `yarn lint:eslint` - lint only eslint errors in all packages
- `yarn lint:eslint:fix` - fix all possible eslint errors in all packages or lint errors that can't be auto-fixed
- `yarn changeset` - open interactive CLI to create changesets
- `yarn changeset:code` - open interactive CLI to create changesets (sets external editor to `vscode` to compose message)
- `yarn changeset:empty` - creates an empty changeset with no packages selected (manually edit the generated changeset message)
- `yarn changeset:status` - provide information about all changesets
- `yarn pkg:version` - (DO NOT RUN) does automatic versioning (run by GitHub workflow)
- `yarn pkg:release` - (DO NOT RUN) publishes packages to the npm registry (run by GitHub workflow)
