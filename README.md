# No CLI ads
Don't want to see stuff like this in your console output?

```
> npm i

> funding@1.0.3 postinstall /your/project/node_modules/funding
> node bin/funding.js

GIANT AD

AD FOR SOME RANDOM THING
BECAUSE THE DEVELOPER THINKS
POLLUTING CONSOLE LOGS
IS A GOOD WAY
TO SUPPORT OPEN SOURCE
                                                                          https://someproduct.somedomain

npm notice created a lockfile as package-lock.json. You should commit this file.
added 412 packages from 214 contributors and audited 1119 packages in 11.729s
found 0 vulnerabilities
```

This module is an ad blocker for bad actors in this space, like the [funding](https://github.com/feross/funding/issues) npm module (at least as of funding@1.0.3).

# Usage

- Install [fswatch](https://github.com/emcrisostomo/fswatch) first and ensure it's in your path. For example, in macOS, use [Homebrew](https://brew.sh/) to install `fswatch` by running `brew install fswatch`.
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

