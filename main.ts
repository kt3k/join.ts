import { parse } from 'https://deno.land/std/flags/mod.ts'

const URL = 'https://git.io/join.ts'

const { help = false, sep = '', keep = false, linebreak = false } = parse(
  Deno.args,
  {
    string: ['sep'],
    boolean: ['help', 'keep', 'linebreak'],
    alias: {
      h: 'help',
      s: 'sep',
      k: 'keep',
      n: 'linebreak'
    }
  }
)

if (help) {
  console.log(`Usage: ${URL} [-h|--help] [-s|--sep <name>] [-k,--keep] [-n|--linebreak]

Options:
  -h, --help          Show the help message and exit.
  -s, --sep <name>    Specify the separator of the output. Default is the empty string.
  -k, --keep          Keep tailing and leading whitespaces in the input. Default is false.
  -n, --linebreak     Output line break at the end. Default is false

Example:
  <your command> | deno ${URL}
    This joins the input and outputs the single line.

  <your command> | deno ${URL} -s ,
    This joins the input with comma.

Visit https://github.com/kt3k/join.ts for more examples.`)
  Deno.exit(0)
}

const decoder = new TextDecoder()
const encoder = new TextEncoder()
let input = decoder.decode(await Deno.readAll(Deno.stdin))

if (!keep) {
  input = input.trim()
}

let output = input.split(/\r?\n/).join(sep)

if (linebreak) {
  output += '\n'
}

await Deno.stdout.write(encoder.encode(output))
