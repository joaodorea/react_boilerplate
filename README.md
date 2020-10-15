# React Boilerplate
React boilerplate using some concepts learned from Manguinho course: 'ReactJS, Hooks, Recoil, TDD, Clean Architecture, SOLID'
This is just an initial setup, it might need some changes based on the projects needs

## Tools
typescript: typescript
jest: test tool
eslint: format your whole code following the .eslintrc.json file props.
lint-staged: run some commands (lint and test) only on the staged code, before commiting it - used with husky
husky: allows you to run some scripts before git commands, usefull to avoid commiting bad code (bad lint or test)
git-commit-msg-linter: creates a pattern to the commits msg, and blocks your commit if doesn't match with it.

### Some Dev plugins
eslint-config-standard-with-typescript: plugin to add the 'standard' pattern to eslint when using typescript
eslint-plugin-standard: eslint pattern
