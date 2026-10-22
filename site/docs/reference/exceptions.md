# Exceptions

| Class | Module | Summary |
|---|---|---|
| `EndpointContext` | fastapi.exceptions | — |
| `HTTPException` | fastapi.exceptions | An HTTP exception you can raise in your own code to show errors to the client. |
| `WebSocketException` | fastapi.exceptions | A WebSocket exception you can raise in your own code to show errors to the client. |
| `FastAPIError` | fastapi.exceptions | A generic, FastAPI-specific error. |
| `DependencyScopeError` | fastapi.exceptions | A dependency declared that it depends on another dependency with an invalid |
| `ValidationException` | fastapi.exceptions | — |
| `RequestValidationError` | fastapi.exceptions | — |
| `WebSocketRequestValidationError` | fastapi.exceptions | — |
| `ResponseValidationError` | fastapi.exceptions | — |
| `PydanticV1NotSupportedError` | fastapi.exceptions | A pydantic.v1 model is used, which is no longer supported. |
| `FastAPIDeprecationWarning` | fastapi.exceptions | A custom deprecation warning as DeprecationWarning is ignored |

## Raising an HTTP error

```python
from fastapi import FastAPI, HTTPException

app = FastAPI()


@app.get("/items/{item_id}")
async def read_item(item_id: int):
    if item_id < 0:
        raise HTTPException(status_code=404, detail="Item not found")
    return {"item_id": item_id}
```

## Custom exception handlers

```python
@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    return JSONResponse({"detail": exc.detail}, status_code=exc.status_code)
```
