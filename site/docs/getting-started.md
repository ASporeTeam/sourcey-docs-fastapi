# Getting started with FastAPI 0.159.1

Everything below is taken from the pinned upstream tree at
[`ce6ee83e5411`](https://github.com/fastapi/fastapi/tree/ce6ee83e5411b98582e996e47edf7870418a68f4).

## Install

```bash
pip install fastapi
```

## The smallest application

```python
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def read_root():
    return {"message": "Hello World"}
```

`FastAPI` is exported from `fastapi.applications` and re-exported at the package
root. Its constructor accepts 37 arguments —
every one of them is listed on the [configuration](reference/config.md) page.

## The router

```python
from fastapi import APIRouter

router = APIRouter(prefix="/items", tags=["items"])


@router.get("/{item_id}")
async def read_item(item_id: int):
    return {"item_id": item_id}


app.include_router(router)
```

## Path operation decorators

`FastAPI` and `APIRouter` both expose the same family of path-operation
decorators — 16
HTTP verbs plus `api_route` and `websocket_route`. See [routing](reference/routing.md).

## Request parameters

```python
from fastapi import Depends, FastAPI, HTTPException

app = FastAPI()


def common_params(q: str | None = None, skip: int = 0):
    return {"q": q, "skip": skip}


@app.get("/items/")
async def read_items(commons: dict = Depends(common_params)):
    return commons
```

## Interactive docs

`FastAPI` serves the OpenAPI UI at `/docs` (Swagger UI) and `/redoc` by default;
both paths are constructor arguments and can be turned off.

## Where the surface is

- 98 public classes, 92 public methods and
  90 public functions were parsed out of the package.
- 156 upstream markdown documentation files were ingested verbatim.
- 78 upstream runnable example groups are catalogued.
