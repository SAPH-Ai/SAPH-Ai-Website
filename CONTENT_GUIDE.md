# Content guide

Everything on the website (text, people, projects, achievements and photos) lives in plain
files. You don't need to know how to code. You only edit **JSON files** in the `data/` folder
and add **photos** to `public/images/`.

After you save a change, the live site updates automatically on the next deploy (a few
minutes after you push to GitHub). To preview locally, run `npm run dev` and open
http://localhost:3000.

---

## JSON in 30 seconds

```json
{
  "name": "Text goes in double quotes",
  "featured": true,
  "tags": ["Lists", "use", "square brackets"]
}
```

- Every item except the last in a list or object needs a comma after it.
- Use straight double quotes `"`, not curly quotes `“ ”`.
- If the site breaks after an edit, paste the file into https://jsonlint.com to find the typo.

---

## Placeholders

Seeded example entries have `"placeholder": true`. These show a small yellow
**PLACEHOLDER** tag on the site so you can see what still needs real content.

1. Replace the text and photo of an entry.
2. Change `"placeholder": true` to `"placeholder": false` (or delete the line).
3. When everything is real, set `"showPlaceholderBadges": false` in `data/site.json`.

To remove an example entry entirely, delete its whole `{ ... }` block, including the comma
that separates it from the next one.

---

## Add a team member: `data/members.json`

Copy an existing block, then edit it:

```json
{
  "slug": "rahim-ahmed",
  "name": "Rahim Ahmed",
  "role": "Robotics Lead",
  "group": "leads",
  "photo": "/images/members/rahim-ahmed.webp",
  "bio": "Two or three lines shown on the card.",
  "intro": ["First paragraph of the full profile.", "Second paragraph."],
  "links": {
    "linkedin": "https://www.linkedin.com/in/...",
    "github": "",
    "facebook": "",
    "email": "rahim@example.com"
  },
  "placeholder": false
}
```

| Field   | Notes                                                                             |
| ------- | --------------------------------------------------------------------------------- |
| `slug`  | Unique, lowercase, dashes instead of spaces.                                      |
| `group` | `"leads"` (Founders & Leads) or `"members"` (Members).                            |
| `photo` | Square photo, **800 × 800 px**, face centred. Put it in `public/images/members/`. |
| `bio`   | Shown on the card (cut off after 3 lines).                                        |
| `intro` | Shown when someone clicks the card. Each item is one paragraph.                   |
| `links` | Leave a link as `""` to hide its icon.                                            |

Members appear in the order they are listed in the file.

---

## Add a project: `data/projects.json`

```json
{
  "slug": "smart-drain-cleaner",
  "title": "Smart Drain Cleaner",
  "category": "Autonomous Maintenance",
  "summary": "One or two sentences for the project card.",
  "description": ["Paragraph one.", "Paragraph two."],
  "image": "/images/projects/smart-drain-cleaner.webp",
  "tags": ["Robotics", "Drainage"],
  "status": "Prototype",
  "year": "2025",
  "featured": true,
  "links": [{ "label": "Demo video", "url": "https://youtube.com/..." }],
  "placeholder": false
}
```

| Field         | Notes                                                                                |
| ------------- | ------------------------------------------------------------------------------------ |
| `slug`        | Becomes the page address: `saph.ai/projects/smart-drain-cleaner`. Unique, no spaces. |
| `image`       | Landscape **1200 × 800 px** (3:2). Put it in `public/images/projects/`.              |
| `category`    | Short label in the orange dashed badge on the card, e.g. `Soft Robotics`.            |
| `description` | Extra paragraphs on the project page. Use `[]` for none.                             |
| `year`        | Optional. Use `""` to hide it.                                                       |
| `tags`        | Used by the filter buttons on the Projects page.                                     |
| `status`      | Free text, e.g. `Research`, `Prototype`, `In development`, `Completed`.              |
| `featured`    | `true` shows it in the home page's Featured Projects section.                        |
| `links`       | Optional buttons on the project page. Use `[]` for none.                             |

---

## Add an achievement: `data/achievements.json`

```json
{
  "id": "national-robotics-2025",
  "date": "March 2025",
  "title": "Champions, National Robotics Festival",
  "description": "What you presented and the result.",
  "image": "/images/achievements/national-robotics-2025.webp",
  "badge": "National",
  "placeholder": false
}
```

- The timeline shows entries **in the order they appear in the file**, so put the newest first.
- `date` is plain text, so you can write any format, e.g. `"March 2025"`.
- `badge` is optional: `"National"` and `"International"` have special colours; any other text
  gets a neutral style; `""` hides it.
- `image` is optional (`""` for none). Landscape **1200 × 800 px**, in `public/images/achievements/`.
- The home page shows the first 4; `/achievements` shows all of them.

---

## Numbers strip and general text: `data/site.json`

- `stats`: the animated counters in the Achievements section. Replace `null` with a
  real number, e.g. `"value": 12`. `suffix` adds text after the number, such as `"+"`.
- `contact.email`: used by the contact form, footer and Contact section.
  **Replace `your-email@example.com` with your real address.**
- `social`: set each `url` to your real profile. Use `""` to hide an icon.
- `tagline`, `heroSubline`, `about`, `whatWeDoIntro`, `themes`, `logoStory`: the main texts.
- `url`: the final website address (`https://saph.ai`).

The four "What We Do" cards are in `data/activities.json` (`icon` can be
`search`, `research`, `robot`, `trophy`, `community` or `mentor`).

---

## Gallery: `data/gallery.json`

```json
{
  "src": "/images/gallery/workshop-2025.webp",
  "alt": "Students testing the drain robot at a school workshop",
  "caption": "School workshop, Dhaka, 2025",
  "width": 1600,
  "height": 1067,
  "placeholder": false
}
```

- `alt` describes the photo for blind visitors and search engines. Always fill it in.
- `width` / `height` are the photo's real pixel size (any orientation works).
- The **first three** gallery photos also appear in the "What is SAPH.Ai?" section.

## Events (optional): `data/events.json`

Each event is a card with a cover photo. Clicking a card opens the event's own page
(`saph.ai/events/<id>`) with a photo viewer and the full details. The home page shows the
first 3 events; `/events` lists all of them. Set the file to `[]` to hide the Events section.

```json
[
  {
    "id": "science-fair-2026",
    "date": "15 November 2026",
    "title": "National Science Fair 2026",
    "location": "Dhaka",
    "summary": "One or two sentences shown on the card.",
    "description": ["First paragraph of the full details.", "Second paragraph."],
    "cover": "/images/events/science-fair-2026/cover.webp",
    "photos": [
      {
        "src": "/images/events/science-fair-2026/photo-1.webp",
        "alt": "Students demonstrating Flexi-Grow"
      },
      { "src": "/images/events/science-fair-2026/photo-2.webp", "alt": "The team with the judges" }
    ],
    "link": "",
    "placeholder": false
  }
]
```

| Field              | Notes                                                                              |
| ------------------ | ---------------------------------------------------------------------------------- |
| `id`               | Unique, lowercase, dashes. Use it as the photo folder name too.                    |
| `summary`          | Short text on the card.                                                            |
| `description`      | Full details on the event page. One item per paragraph.                            |
| `cover`            | Main photo: on the card and first in the viewer. Landscape, about 1200 × 800.      |
| `photos`           | More photos for the viewer, any number. `alt` describes each photo. `[]` for none. |
| `location`, `link` | Optional. Use `""` to hide.                                                        |

**Photos:** make a folder per event, e.g. `public/images/events/science-fair-2026/`, put the
JPGs in it (`cover.jpg`, `photo-1.jpg`, `photo-2.jpg`, …) and run `npm run images:optimize`.
Events show in file order, so put the newest or soonest first.

---

## Photos

1. Put JPG or PNG files into the right folder: `public/images/members/`,
   `public/images/projects/`, `public/images/achievements/`, `public/images/gallery/` or
   `public/images/events/<event-id>/`.
2. Run `npm run images:optimize`. Each photo is resized, converted to a small
   `.webp` file, and the original is moved to `assets-source/originals/`.
3. Point the JSON entry at the new file, e.g. `"/images/members/rahim-ahmed.webp"`.

Recommended sizes: members 800 × 800, projects and achievements 1200 × 800, gallery
around 1600 px on the long side. Use lowercase file names with dashes and no spaces.

**Shortcut for placeholders:** name your photo like the placeholder it replaces (e.g.
`public/images/members/member-1.jpg`) and run `npm run images:optimize`. It overwrites
`member-1.webp`, so the JSON doesn't need to change.
