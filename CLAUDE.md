# CLAUDE.md

This file provides context for Claude Code when working with this repository.

## Project Overview

**relative-time-parser** is a moment.js plugin that parses Graphite-style relative time strings (e.g., `-7d`, `+3h`, `now`) into moment.js date operations.

## Key Commands

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests with coverage
npm run coverage

# Run linting
npm run lint

# Full build pipeline (clean, lint, test, minify)
npx grunt default
```

## Project Structure

```
src/
  relative.time.parser.js    # Main plugin implementation (~115 LOC)
test/
  test.relative.time.js      # Mocha test suite (104 tests)
build/
  relative.time.parser.min.js # Generated minified build
```

## Architecture

### Core Functions

1. **`moment.fn.relativeTime(string)`** - Parses relative time string and returns a new moment
   - Supports: `+/-` prefix, numeric value, time unit
   - Units: ms, s, m, h, d, w, M, Q, y (with many aliases)
   - Special: `now` keyword returns clone of current moment

2. **`moment.fn.isRelativeTimeFormat(string)`** - Validates if string is valid relative time format

### Module Pattern

Supports AMD (define), CommonJS (module.exports), and browser globals.

## Testing

- Framework: Mocha with Should.js assertions
- Coverage: nyc (Istanbul) generating LCOV reports
- CI: GitHub Actions testing Node.js 18.x, 20.x, 22.x

### Test Categories

- Subtract Tests (all time units)
- Add Tests (all time units)
- Spacing Tests (whitespace handling)
- Arbitrary Value Tests (specific dates)
- `now` Tests
- Validation Tests (`isRelativeTimeFormat`)

## Code Conventions

- Use fixed timestamps in tests to avoid timing race conditions
- Regex patterns ordered longest-first (e.g., `ms` before `m`)
- All unit aliases must exist in both `relativeTimeRe` regex AND `convertCase` map

## Common Pitfalls

1. **Regex ordering**: Shorter patterns match before longer ones in JS regex alternation. Always put longer patterns first (e.g., `milliseconds|ms|minutes|m`).

2. **Flaky tests**: Never compare two `moment()` calls directly for milliseconds - use fixed timestamps.

3. **Missing mappings**: When adding new unit aliases, update BOTH the regex AND the `convertCase` object.

## CI/CD

- Tests run on push to master and all PRs
- Coverage reported to Coveralls
- npm publish triggered only on version tags (`v*`)

## Dependencies

- **Runtime**: moment.js (peer dependency)
- **Dev**: grunt, mocha, nyc, eslint, jshint

## Publishing to npm
1. Bump version in package.json
2. Commit and push to master
3. Create and push a tag: git tag v1.2.0 && git push origin v1.2.0
4. The publish job will automatically run
