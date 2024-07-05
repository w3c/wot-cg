# W3C WoT CG Meeting Minutes Process

## Files

Initially, the minutes are taken using on [the HackMD platform](https://hackmd.io).
We have a template at <https://hackmd.io/@egekorkan/wot-cg-minutes-template> which can be used for a new note.
However, our process is as follows:

1. Minutes are taken on the <https://hackmd.io/@egekorkan/w3c-wot-cg-minutes> at every meeting. This document is based on the template above.
2. The minutes are copied over the GitHub by creating a Pull Request. While doing so:
  a. The entire `:::spoiler` section has to be removed
  b. The header `:::info` should be removed together with its closing `:::`
  c. The names of the people should be changed to their full name made bold by encapsulating the names in `**name surname:**`.
  Same for `...` which should become `**..**`. Also see below on the changes to be done.
  d. In case people have just pasted links, they can be moved into a quote section by inserting `>` before that.
3. The HackMD document can be removed once the PR is accepted.
4. The document itself also contains a guide on how to use it.

## Changing acronyms of people to their names

When taking minutes, we generally use a shorter version for people's names, e.g. `fb: I think we should do this` when a participant named `Foo Bar` is speaking.
When the minutes are published, it would look more professional to have full names, i.e. `Foo Bar: I think we should do this`.
Some common replacements we have seen so far (people who have joined more than 1 meeting and spoke):

- ca: OR cris: -> Cristiano Aguzzi:
- ege: OR ek: -> Ege Korkan:
- mc: OR mm: -> Michael McCool:
- kaz: OR ka: -> Kazuyuki Ashimura:
- pb: OR philipp: OR citrullin:-> Philipp Blum:
- sk: -> Sebastian Kaebisch:
- tm: OR mizushima: -> Tomoaki Mizushima:
- dp: -> Daniel Peintner:
- bf: -> Ben Francis
- lb: OR lu_zero: -> Luca Barbato
  
- Correct typos. This will probably be manual. A regular spell check can be used but there are too many acronyms and surnames to handle (add exceptions). Maybe a smarter spell checker is needed to automate this.
