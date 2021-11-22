# eslint-config-airbnb-as-warnings

The Airbnb eslint config with all errors downgraded to warnings.

## Why?

In my opinion, linting issues are *always* warnings - there is no such thing as a linting error. Linting issues don't break your code, the most they can do is say 'this is probably wrong, but I'm not sure'. It is counter-productive for those issues to be highlighted in red because they draw too much attention and dilute the significance of actual concrete problems that need to be highlighted in red.

## But I Want to Enforce Linting in My Repository

I agree. Downgrading to warnings is mostly a devlopment concern. However, this is totally compatible with making linting a big deal on CI and the command line, just use `--max-warnings 0`:

```sh
eslint --max-warnings 0 .
```
