# PABW · M.Sabili Rizky Adyallah · 25523141

This repository contains assignments for the Web-Based Application Development course,
with one folder per session.

## Session 3 · The Last Letter

My page topic: the main character in Violet Evergarden.

- Page title: The Last Letter
- Description: Every letter contains emotions
- Navigation links: Character List, Add Character, About This Page
- Three main sections: Character List, Add Character, About This Page
- Table columns: Distinctive Traits, Position, Relationship with Violet
- Form fields: Character Name, Distinctive Traits, Position
- Image: violet-evergarden.jpg

## Notes on AI usage
I use AI to gather character references and get step-by-step guidance to help me stay organized. I also use AI to check for errors in my code and ask for suggestions on what might be a better approach. Additionally, I use it to help me explain the material and worksheets I provide to the AI so they’re more concise and easier for me to understand, and I ask the AI for its opinion.

## Session 8 · JavaScript ES6+, Data Structures, and Array Methods

Folder: worksheet-p8

What I did myself: chose my profile data and project list, typed the code in app.js,
ran every console test, and fixed the errors in E.5.

What AI helped with: step-by-step guidance for each sheet, explaining concepts
(pure functions, map/filter/find, spread), checking my code for mistakes
(curly quotes, wrong variable names), and drafting example answers for Sheet F
that I reviewed and rewrote.

## Meeting 9 · DOM, Events, and Interactivity

Folder: worksheet-p9

What I did myself: chose my project data, wrote the HTML structure, and ran every
console test and experiment in sheet E.

What AI helped with: step-by-step guidance for each sheet, explanations of DOM,
event delegation and form validation, and suggested code that I typed, tested and
adjusted. AI also drafted example answers for sheet F that I reviewed and rewrote.

## Meeting 10 — Asynchronous JavaScript: fetch, Promise, and JSON

- Folder: `worksheet-p10/`
- Data source: a local `news.json`, because `api.jikan.moe` timed out
  (ERR_CONNECTION_TIMED_OUT) from my network.
- Structure: `js/api.js` holds the data layer and exports `fetchAnime`.
  `js/dom.js` is the caller and builds the cards with the four interface
  states (loading, success, failure, empty). The caller is in `dom.js`,
  not `app.js`, because `dom.js` already imports `app.js` and the reverse
  import would be circular.
- Evidence: `ss-success.png`, `ss-failure.png`, `ss-loading.png`,
  `ss-empty.png`, `ss-network-failed.png`.

### AI disclosure
I used Claude (an AI assistant) as a step-by-step guide. It explained the
concepts, suggested the code for `api.js` and `loadNews`, and helped me read
Console errors. I typed and ran the code myself, did the failure tests,
took the screenshots, and filled in the worksheet tables. It also drafted
example wording for some answers in Sheet F, which I reviewed and rewrote.

## Meeting 11 — Modules, State, and Client-Side Storage

- Folder: `worksheet-p11/`
- Modules: `data.js` (raw data), `state.js` (one state object, mutators,
  save/load/reset), `dom.js` (render only), `events.js` (clicks and form),
  `app.js` (assembler). Extra files from Meeting 10: `api.js` and `news.json`.
- State: `state.activeCategory` is the single source of truth. The active
  button is drawn from it; nothing is read back from the page.
- Storage: the last selected category is saved in `localStorage` under one
  key (`pabw-p11`) as JSON, with a default of "all" and a Reset button.
- Hard cases: corrupt JSON and an old schema version are discarded and the
  page starts from the defaults. A saved category must be one of the known
  categories.
- Deliberately not stored: form input, anime data from the network, tokens,
  or any personal data. Only the display choice and a version number are saved.
- Evidence: `ss-storage.png`, `ss-corrupt.png`, `ss-version.png`.

### AI disclosure
I used Claude (an AI assistant) as a step-by-step guide. It explained the
concepts, proposed the file split and the code for `state.js`, `events.js`,
and the storage functions, and helped me read Console errors. I typed and ran
the code myself, did the tests, took the screenshots, and filled in the
worksheet. [Add anything else that is true, such as example wording for
answers that I reviewed and rewrote.]