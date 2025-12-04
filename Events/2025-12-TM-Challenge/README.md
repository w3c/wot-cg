# WoT CG December 2025 TM Challenge

In this holiday season, we invite to collect TMs of devices around you! 
We will only collect a list of repositories with TMs and not pull TMs into this repository.
You can simply follow the instructions below.

## Instructions

- Create an empty repository under your own GitHub username, name it as you wish
- Install [TMC CLI](https://github.com/wot-oss/tmc)
- Create a new TM repository with `tmc repo add -t file mynewrepo ~/mylocation`
  - You can name it as you want
- Write/generate a TM however you like
  - `schema:author` , `schema:mpn` and `schema:manufacturer` are required by TMC. See our [JSON Schema](https://github.com/wot-oss/tmc/blob/main/internal/commands/validate/tmc-mandatory.schema.json).
- Do `tmc import yourTM.json`
- Your repository will be updated with the TM, table of contents.
- Push the changes to your GitHub
- Create a PR to the CG repository's bash script with the `tmc repo add`  commands
  - Example: `tmc repo add -t http example https://raw.githubusercontent.com/wot-oss/example-catalog/refs/heads/main`
  - You can make the PR as soon as you have a repository. No need to wait for the TMs to be ready.
- Issues or Discord messages are also fine! We will add a new line with your instructions.
- That’s it!

## Timeline

1. 04 December 2025: The challenge is announced on the meetup
2. 15 December 2025: The challenge starts
3. 15 January 2025: The challenge stops
4. 3 February 2025: Results are presented in the monthly call
