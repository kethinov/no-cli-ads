# No CLI ads
Don't want to see stuff like this in your console output?

```
> npm i

> funding@1.0.3 postinstall /your/project/node_modules/funding
> node bin/funding.js

GIANT AD

AD FOR SOME RANDOM THING
BECAUSE THE DEVELOPER THINKS
POLLUTING CONSOLE LOGS IS A
GOOD WAY TO SUPPORT OPEN SOURCE

https://someproduct.somedomain

npm notice created a lockfile as package-lock.json. You should commit this file.
added 412 packages from 214 contributors and audited 1119 packages in 11.729s
found 0 vulnerabilities
```

This module is an ad blocker for bad actors in this space, like the now infamous [funding](https://github.com/feross/funding) npm module [incident](https://www.reddit.com/r/programming/comments/cus0zu/a_3mil_downloads_per_month_javascript_library/) (an ad which is [now suppressible with environment variable](https://github.com/kethinov/no-cli-ads/issues/2#issuecomment-524644139)).

# Usage

- Install [fswatch](https://github.com/emcrisostomo/fswatch) first and ensure it's in your PATH. For example, in macOS, use [Homebrew](https://brew.sh/) to install `fswatch` by running `brew install fswatch`.
- Install: `npm i -g no-cli-ads`.

- Block ads: `no-cli-ads /some/dir/and/its/subdirs/to/watch`.
  - This will spawn a process to monitor when npm installs an ad package and disable it if it detects one being installed.

- Disable the blocker: `yes-cli-ads`.
  - This will kill the monitoring process.

- **Important note**: This module is untested in Windows and may not work properly in Windows!

# Support open source!

This module is not meant to imply that open source is unworthy of support.

By all means, let's find business models to support open source. Let's solicit donations, do paid sponsorships, and yes, let's even run ads! But if you run ads, always make sure you do them in a tasteful way, or people are gonna start blocking them.

Last but not least, if you've got an idea for how to make this ad blocker better-designed or you just want to block more spammy stuff, pull requests are welcome.

# Other ad blockers worth considering

If you want to block ads using a different method, you might want to consider competing approaches instead, such as:

- [npm-adblock](https://github.com/mkg20001/npm-adblock): Modifies npm itself instead of using a persistent process. See [discussion of tradeoffs](https://github.com/kethinov/no-cli-ads/issues/3).