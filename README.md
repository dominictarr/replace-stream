# replace-stream

unix tool to replace text within a stream.

``` js
npm install -g replace-stream

# takes a javascript regexp and a string.
replace-stream /unix/ UNIX < README.md

# if it's not a valid regexp, treat it as a string.

replace-stream unix UNIX < README.md

# you can use single quotes to make a pattern with spaces or an empty string.

replace-stream 'unix ' '' < README.md


```

## License

MIT
