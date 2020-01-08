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

```shellsession
$ cat File | deno https://git.io/join.ts
FooBarBaz
```

If you want to put characters between lines, then you can use `-s <str>` option:

```shellsession
$ cat File | deno https://git.io/join.ts -s ,
Foo,Bar,Baz
```

# CLI options

You can see the cli options with the command `deno https://git.io/join.ts -h`:

```
Usage: https://git.io/join.ts [-h|--help] [-s|--sep <name>] [-k,--keep] [-n|--linebreak]

Options:
  -h, --help          Show the help message and exit.
  -s, --sep <name>    Specify the separator of the output. Default is the empty string.
  -k, --keep          Keep tailing and leading whitespaces in the input. Default is false.
  -n, --linebreak     Output line break at the end. Default is false

Example:
  <your command> | deno https://git.io/join.ts
    This joins the input and outputs the single line.

  <your command> | deno https://git.io/join.ts -s ,
    This joins the input with comma.

Visit https://github.com/kt3k/join.ts for more examples.
```

# License

MIT
