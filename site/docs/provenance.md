# Provenance

| | |
|---|---|
| Upstream | https://github.com/fastapi/fastapi |
| Pinned commit | `ce6ee83e5411b98582e996e47edf7870418a68f4` |
| Commit date | 2026-10-22T09:10:13Z |
| Upstream version | 0.159.1 |
| Upstream license | MIT |
| Generator | `scripts/generate_docs_fastapi.py` (agent-4) |
| Docs engine | Sourcey 3.8.3 |
| Node | v22.23.4 |
| Python | 3.12.3 |
| Runx CLI | runx-cli 0.10.2 |
| Generated at | 2026-10-22T12:29:18Z |

## How the inventory was produced

The generator parses the pinned tree with Python's `ast` module — the package
is never imported, so no dependency has to be installed to produce the
inventory. For every module it records the public classes, their public
methods and the public functions, each with a rendered signature and the first
line of its docstring. The upstream documentation tree under `docs/en/docs/` is
copied verbatim.

## Input checksums

| Input | sha256 |
|---|---|
| `LICENSE` | `4ec89ffc81485b97fec584b2d4a961032eeffe834453894fd9c1274906cc744e` |
| `fastapi/__init__.py` | `44adc1368b85e9593f11f3acdf8d953784d25cd0bf1da5bb121aef2f8858c0fd` |
| `fastapi/applications.py` | `a87379cc9eee7164b450471278060a9a9745ac52d08e54844069afe7f94d0cca` |
| `fastapi/exceptions.py` | `7d434e051748b142d4d139cef1a3418371e825ec89c57a7d515e83f3062ef652` |
| `fastapi/param_functions.py` | `18ab2fa8e53247905565283bcbd5a71aa7e3b375da60f8275935540be574129d` |
| `fastapi/params.py` | `45db979df1c24c0e29a84f62c720c7e040946704a9d56c7cd403a72d168bae1f` |
| `fastapi/responses.py` | `04cec9b6267f1b88f667b42f1d4cd5d4ab593e78cea027d7df946a6179590e1d` |
| `fastapi/routing.py` | `9333eeb41b247fea4039bb38c5be7f85d1f90d6828a12981c649a44182eead15` |
| `pyproject.toml` | `f856aaf7e3718cbd294f9ef0f063072f6c2a7651e27ed6c2c113a0a80a2ae29e` |

## Machine-readable records

- `inventory.json` — the full public API inventory
- `GENERATED.json` — this provenance record
