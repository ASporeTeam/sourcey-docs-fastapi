# Responses {#responses}


FastAPI returns a `Response` subclass automatically when a path operation
returns a `Response` instance directly, or when `response_model` is not used.

| Class | Summary |
|---|---|
| `UJSONResponse` | JSON response using the ujson library to serialize data to JSON. |
| `ORJSONResponse` | JSON response using the orjson library to serialize data to JSON. |
| `FileResponse` | re-exported from starlette.responses |
| `HTMLResponse` | re-exported from starlette.responses |
| `JSONResponse` | re-exported from starlette.responses |
| `PlainTextResponse` | re-exported from starlette.responses |
| `RedirectResponse` | re-exported from starlette.responses |
| `Response` | re-exported from starlette.responses |
| `StreamingResponse` | re-exported from starlette.responses |


## Returning a response directly {#returning-a-response-directly}


```python
from fastapi.responses import JSONResponse


@app.get("/raw")
async def raw():
    return JSONResponse({"ok": True}, status_code=201)
```


## Media types {#media-types}


`HTMLResponse`, `PlainTextResponse`, `StreamingResponse`, `FileResponse` and
`RedirectResponse` cover the common cases; the `responses` module also exposes
the `ORJSONResponse` and `UJSONResponse` fast serialisers.
