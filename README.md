# @hashrock/bump

just bumps the patch version of `deno.json`

```bash
deno run --allow-read=deno.json --allow-write=deno.json jsr:@hashrock/bump
```

or just

```bash
deno run -A jsr:@hashrock/bump
```

or install as a `hr-bump` command

```bash
deno install --allow-read=deno.json --allow-write=deno.json --name hr-bump jsr:@hashrock/bump
```

# Options

bump minor version

```
deno run --allow-read=deno.json --allow-write=deno.json jsr:@hashrock/bump minor
```

Dry run

```
deno run --allow-read=deno.json --allow-write=deno.json jsr:@hashrock/bump --dry-run
```
