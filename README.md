# https://git.io/join.ts

> Joins the input.

# Usage

```ts
cat FILE | deno https://git.io/join.ts
```

If the file is like the below:
```
Foo
Bar
Baz
```

Then it outputs like the below:

```ts
$ cat File | deno https://git.io/join.ts
FooBarBaz
```

If you want to put some characters between lines, then you can use `-s <str>` option:

```
$ cat File | deno https://git.io/join.ts -s ,
Foo,Bar,Baz
```

# License

MIT
