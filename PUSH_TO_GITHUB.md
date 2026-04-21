# How to push tiny-tabs to GitHub

A quick guide to get this project live on GitHub Pages.

## 1. Create a repo on GitHub

Go to https://github.com/new and:

- **Repository name:** `tiny-tabs`
- **Description:** `little friends for your browser :)`
- **Public** (so GitHub Pages works on the free plan)
- **Don't** initialise with a README, .gitignore, or license — we already have them
- Click **Create repository**

GitHub will show you a page with a URL like `https://github.com/YOUR-USERNAME/tiny-tabs.git`. Copy it.

## 2. Push this folder up

Open a terminal in this `tiny-tabs` folder and run:

```bash
# initialise git
git init
git branch -M main

# stage everything
git add .

# first commit
git commit -m "initial commit — nine lil creatures"

# connect to your GitHub repo (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/tiny-tabs.git

# push
git push -u origin main
```

If this is your first time pushing, GitHub may ask you to authenticate. Use a personal access token (PAT) or the GitHub CLI (`gh auth login`).

## 3. Turn on GitHub Pages

1. On your repo page, click **Settings** (top right)
2. In the left sidebar, click **Pages**
3. Under **Build and deployment → Source**, select **GitHub Actions**
4. That's it — the workflow in `.github/workflows/deploy.yml` will run on every push to `main`

## 4. Watch it deploy

1. Click the **Actions** tab on your repo
2. You'll see "Deploy to GitHub Pages" running (yellow → green once done)
3. Once green, your site is live at:
   ```
   https://YOUR-USERNAME.github.io/tiny-tabs/
   ```

The first deploy usually takes 1–2 minutes.

## 5. Optional — update the links in the code

A few places still reference `deepali` as the username. Once you know yours, do a find-and-replace:

- **`README.md`** — update the `live site` URL and the `git clone` URL
- **`index.html`** — update the footer github link (`<a href="https://github.com/deepali/tiny-tabs">github</a>`)
- **`package.json`** — if you ever add one, update the repo URL there too

## Making updates later

Every push to `main` redeploys automatically:

```bash
# make changes to index.html / script.js / etc.
git add .
git commit -m "add a new creature"
git push
```

That's it. Site updates in ~1 minute.

## Tips

- To run locally while developing: `python3 -m http.server 8000` then visit `http://localhost:8000`
- To preview what GitHub Pages will show, just open `index.html` directly in a browser — no build step needed
- If you break something and the workflow fails, look at the **Actions** tab for the error log

— deepali ♡
