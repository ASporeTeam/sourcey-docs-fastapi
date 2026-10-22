# Configuration

`FastAPI` accepts 37 constructor arguments. The full list, parsed
from the pinned source of `fastapi/applications.py`:

| Argument |
|---|
| `telemetry` |
| `debug` |
| `routes` |
| `title` |
| `summary` |
| `description` |
| `version` |
| `openapi_url` |
| `openapi_tags` |
| `servers` |
| `dependencies` |
| `default_response_class` |
| `redirect_slashes` |
| `docs_url` |
| `redoc_url` |
| `swagger_ui_oauth2_redirect_url` |
| `swagger_ui_init_oauth` |
| `middleware` |
| `exception_handlers` |
| `on_startup` |
| `on_shutdown` |
| `lifespan` |
| `terms_of_service` |
| `contact` |
| `license_info` |
| `root_path` |
| `root_path_in_servers` |
| `responses` |
| `callbacks` |
| `webhooks` |
| `deprecated` |
| `include_in_schema` |
| `swagger_ui_parameters` |
| `generate_unique_id_function` |
| `separate_input_output_schemas` |
| `openapi_external_docs` |
| `strict_content_type` |

## The router constructor

`APIRouter` accepts 18 arguments:

| Argument |
|---|
| `prefix` |
| `tags` |
| `dependencies` |
| `default_response_class` |
| `responses` |
| `callbacks` |
| `routes` |
| `redirect_slashes` |
| `default` |
| `dependency_overrides_provider` |
| `route_class` |
| `on_startup` |
| `on_shutdown` |
| `lifespan` |
| `deprecated` |
| `include_in_schema` |
| `generate_unique_id_function` |
| `strict_content_type` |

## Common configuration

```python
from fastapi import FastAPI

app = FastAPI(
    title="My API",
    version="1.0.0",
    description="A FastAPI application.",
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json",
)
```
