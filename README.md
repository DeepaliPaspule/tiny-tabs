# tiny tabs

> little friends for your browser :)

nine lil creatures that walk along the bottom of your tabs. pick up to three to keep you company while you work. they nap, they wander, they wiggle. they don't do anything useful and honestly that's the whole point.

**live site:** https://deepali.github.io/tiny-tabs/

![tiny tabs preview](favicon.svg)

## what is this

this is the landing page for tiny tabs, a browser extension i'm making. meet the cast:

- **moss** — a sleepy spore-pot in a terracotta pot
- **pip** — a worried one-horned gremlin with big sparkly eyes
- **echo** — a translucent plum slime that pulses softly
- **nib** — a puffy blue bird with strong opinions
- **pumpkin** — a cozy little jack with a leaf (my secret favourite)
- **tofu** — a quiet white cube with a tiny smirk
- **slugsie** — a kind snail with a honey shell
- **peb** — a zen stack of pebbles
- **glim** — a firefly-moth spirit that only comes out at night
- **crumb** — (...shhh, he's sneaky)

## features on the site

- 🎨 fully hand-drawn svg creatures — no images, no videos
- 🕹️ interactive stage — drag, click, chat with them live in the hero
- 🎭 mood controls — vibing, focus, sleepy, jittery, follow-cursor, party
- ✨ picker updates the stage — pick your crew and watch them appear
- 📓 sketchbook section with early drafts that didn't make the cut
- 💌 adopt-a-creature form with a personalised certificate
- 🌙 night mode toggle
- 🐾 creatures roam the bottom of the whole page, not just the demo
- 🥚 scroll-triggered easter egg (try scrolling 5 times)

## stack

one html file, one css file (inlined), one js file. no frameworks, no build step, no bundler, no dependencies. just:

- `index.html`
- `script.js`
- `favicon.svg`

fonts are pulled from google fonts — fraunces (serif), jetbrains mono, and caveat (handwriting).

## running it

clone and open `index.html` in your browser. that's it.

```bash
git clone https://github.com/deepali/tiny-tabs.git
cd tiny-tabs
open index.html
```

or if you want a local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## deploying

pushes to `main` auto-deploy to github pages via the workflow in `.github/workflows/deploy.yml`.

to set it up on a fresh fork:
1. go to **settings → pages**
2. under "build and deployment", choose **github actions** as the source
3. push to main, watch the site deploy

## project structure

```
tiny-tabs/
├── index.html                      ← the page
├── script.js                       ← all the interactivity
├── favicon.svg                     ← site icon
├── README.md                       ← this file
├── LICENSE                         ← mit
├── .gitignore
└── .github/
    └── workflows/
        └── deploy.yml              ← auto-deploy to gh pages
```

## license

mit. do whatever. just don't steal the creatures please, i love them.

## about

made by deepali in my bedroom, mostly while i should have been doing other things. the extension itself is still in beta. if you want to say hi or suggest a new creature, open an issue :)

— deepali ♡
