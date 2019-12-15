# Aries Cloudagent Interface JavaScript

[![Continuous Integration Badge](https://github.com/ula-aca/aries-cloudagent-interface-javascript/workflows/Continuous%20Integration/badge.svg)](https://github.com/ula-aca/aries-cloudagent-interface-javascript/actions?query=workflow%3A%22Continuous+Integration%22)
[![Maintainability](https://api.codeclimate.com/v1/badges/07f0987be83ea6b06741/maintainability)](https://codeclimate.com/github/ula-aca/aries-cloudagent-interface-javascript/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/07f0987be83ea6b06741/test_coverage)](https://codeclimate.com/github/ula-aca/aries-cloudagent-interface-javascript/test_coverage)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Installation

In an existing project (with `package.json`), install `aries-cloudagent-interface`

```bash
# NPM
npm install --save aries-cloudagent-interface

# Yarn
yarn add aries-cloudagent-interface
```

## Usage

```typescript
import { ... } from 'aries-cloudagent-interface'
```

## Generating Open API Client

Aries Cloudagent Python provides a Swagger (OpenAPI) definition of the exposed API. the [OpenAPI Schema](resources/aca-py-openapi-schema.json) for [Aries Cloud Agent Python](https://github.com/hyperledger/aries-cloudagent-python) is located in this repo. We generate the API Client with the [OpenAPI Generator CLI](https://github.com/openapitools/openapi-generator-cli). This can be done via the `generate-api-client` script.

The generated API Client will be placed in the `generated/openapi` directory and included in the TypeScript compile process.

> Aries Cloudagent Python generates a Swagger v2 schema that contains errors. To get around this we convert the Swagger v2 schema to a OpenAPI v3 schema. You can do this by running the `get-openapi-spec` scripts and passing the url of the `swagger.json` file to the scripts. This downloads the v2 schema, converts it to v3 and places it as `resources/aca-py-openapi-schema.json`.

```bash
# Download and covert OpenAPI schema. Is tracked in git repo
yarn get-openapi-spec http://ula.test/api/docs/swagger.json

# Generate OpenAPI client. Is not tracked in git repo
yarn generate-api-client
```

## Running tests

Unit tests are done with Mocha.

```bash
yarn test
```

We aim to achieve a coverage of 100%

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License and disclaimer

[apache-2.0](https://choosealicense.com/licenses/apache-2.0/) with a [notice](NOTICE).

We discourage the use of this work in production environments as it is in active development and not mature enough.
