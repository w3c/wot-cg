# W3C WoT CG Meeting Minutes

This folder contains the minutes taken during the W3C WoT CG meetings.

An initial save of the minutes take place and are committed to save the unedited state.
A single html file is saved from the W3C server without the additional CSS and JS that comes in a folder.
Since we are not planning to host the final versions, it does not make sense to save them in a pleasant-to-look-at version.

A manual or automatic post processing takes place to do the following:

- Removing mention of draft: 

```html
<h1>– DRAFT –<br>
WoT CG at TPAC 2022</h1>
```

becomes 

```html
<h1>WoT CG at TPAC 2022</h1>
```

- Adding Meeting Title

If forgotten during the meeting, the minutes will contain `(MEETING TITLE)` in `<h1>` and in the title attribute.

Even if the meeting title is present, it is better to double check that it starts with `W3C WoT CG`

- Changing acronyms of people to their names

When taking minutes, we generally use a shorter version for people's names, e.g. `fb: I think we should do this` when a 
participant named `Foo Bar` is speaking.
When the minutes are published, it would look more professional to have full names, i.e. `Foo Bar: I think we should do this`
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
  
 - Correct typos. This will probably be manual. I have used a spell check but there are too many acronyms and surnames to handle (add exceptions). Maybe a smarter spell checker is needed to automate this.
