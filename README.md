# Shree Tandel portfolio

Finished static portfolio for GitHub Pages. Open `index.html` to preview locally. There is no install, build command, account integration, or paid service required.

## Publish in five steps

1. Unzip the download. Open the `shree-tandel-portfolio` folder.
2. On GitHub, create a **public** repository named `shree-portfolio`, or open your existing portfolio repository. A public repository works with GitHub Free.
3. Select **Add file → Upload files**. Drag the **contents** of this folder into the upload area: `index.html`, `style.css`, `script.js`, and all asset folders. Commit to `main`. Do not upload the ZIP or nest everything inside another `shree-tandel-portfolio` folder. `index.html` must sit at the top of the repository. If using an existing repository, replace its old site files with this package rather than combining the old and new pages.
4. Open **Settings → Pages**. Under **Build and deployment**, set **Source: Deploy from a branch**, **Branch: main**, **Folder: /(root)**. Click **Save**. Leave the custom-domain field empty unless you already use a custom domain.
5. Wait for the Pages deployment to finish, then open the website link shown in **Settings → Pages**. For a repository named `shree-portfolio`, the address is `https://YOUR-GITHUB-USERNAME.github.io/shree-portfolio/`.

If your default branch has another name, select that branch instead of `main`. Later, uploading and committing replacement files to that same branch updates the site. No Actions workflow needs to be written.

Official reference: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Package contents

Plain HTML, CSS, JavaScript, local campaign media, the approved V5 homepage reel and the downloadable resume. Private research reports and call sheets are not included.

## Where to make future updates

| Item | Exact place |
|---|---|
| Resume | Replace `documents/Shree_Tandel_Resume.pdf`, keeping the filename. All three resume links update together. |
| Email | In `index.html`, replace every occurrence of `tandelkalpashree@gmail.com`, including the two `mailto:` links. |
| LinkedIn | In `index.html`, find the current `linkedin.com/in/kalpashree-tandel-841850126/` URL and replace it if needed. |
| Main page text | Edit the named `hero`, `work`, `experience`, `about`, and `contact` sections in `index.html`. |
| Project text | Near the bottom of `index.html`, find the project’s `modal-` section (for example, `modal-chopard` or `modal-tatacliq`). Keep its ID unchanged so its card continues to work. Additional project cards are inside `details#all-projects`. |
| Project images | Replace files in `images/` using the same names, or update matching `src` paths in `index.html`. Update the descriptive `alt` text when an image changes. |
| Fossil video | Replace `videos/fossil-campaign.mp4`. The player and direct video link use that file. |
| Homepage reel | Replace `videos/homepage-reel-v5.mp4` and `images/homepage-reel-v5-poster.png`. The hero uses a contained 16:9 player, silent autoplay, looping, controls and reduced-motion handling. |
| Hosted reel | Instead of a local file, use `type: 'embed'` and a complete `https://player.vimeo.com/video/VIDEO_ID` or `https://www.youtube-nocookie.com/embed/VIDEO_ID` URL in the same reel setting. Use your actual video ID. |
| Colors and spacing | Edit the variables at the start of `style.css`. |

For local reel files, use browser-compatible H.264/AAC MP4 or WebM. Keep individual files below GitHub's upload limit; a hosted embed is easier for a large reel. Add captions for any meaningful speech when replacing videos.

## Final live-site check

- Open the published link on your phone and a desktop. Confirm the name, role, images, and navigation appear.
- Open the four featured projects and expand View all projects to access eighteen more. Close it; on desktop, also try Escape and keyboard Tab.
- Play the Fossil film and confirm it stops when its project closes.
- Open the resume and use Download resume. Both should return the included PDF.
- Tap Email and LinkedIn. Email opens your mail app; LinkedIn may request sign-in. The phone number is available only in the downloadable resume.
- Refresh the page with a project open and use the browser Back button.

## What was preserved and corrected

This is a cleaned and completed version of the supplied `kt` site, retaining plain HTML/CSS/JavaScript, its dark gallery direction, original gallery-item markup, project IDs, modal conventions, and verified brand assets. The original `kt` folder was not overwritten.

The supplied portfolio archive and company presentation provided real campaign images and the Fossil film. Four projects remain featured, with eighteen additional projects from the supplied personal portfolio archive available under View all projects. Shoot dates use supplied call sheets where available; folder dates are not treated as shoot dates. Chopard is confirmed as 2021; Fossil dates remain unresolved. Shree is credited as Associate Producer, not director, editor, or lead producer. No private crew documents are included.

Removed the copied third-party bio, email, phone, and social accounts; unrelated video links; duplicate projects; placeholder credits; missing asset references; delayed navigation; and inaccessible hidden overlays. The new project overlays support keyboard focus, Escape, browser history, video pause on close, and no-JavaScript navigation. Images are optimized, project videos load only when requested; the homepage reel autoplays silently where permitted, and reduced-motion preferences are respected.

The approved V5 reel is included in the homepage. The optional separate reel section remains hidden. LinkedIn uses the exact URL supplied in this conversation; external availability and account access depend on LinkedIn. This package is ready to upload; it has not been published to a GitHub account.


## Latest campaign and credit update

- 22 projects total: four featured campaigns and eighteen additional campaign/editorial projects.
- Cards show brand, campaign or collection, year where known, and role/category. Descriptive labels such as “Watches campaign” are used when no official campaign title was supplied.
- A|X Armani Exchange is the **2021 Watch Campaign in India**, confirmed by Shree. Its image is from the supplied MediaNews4u article; the project links back to the coverage. The article was published August 17, 2021; that is not presented as the shoot date.
- Femina Wedding Times: **Athiya Shetty editorial · 2019 · Freelance BTS**, based on Shree’s direct confirmation. This is credited separately from Twism production work. The linked Instagram profile is `https://www.instagram.com/messin_neko/`; the tagged project post has not been independently located or embedded.
- Phone remains off the web page and available in the PDF resume.

Armani reference: https://www.medianews4u.com/aix-armani-exchange-watches-retains-kartik-aaryan-for-2021-advertising-campaign-in-india/

To update campaign names, edit each card’s `campaign-brand`, `h3`, and metadata in `index.html`, plus the corresponding `modal-` project heading. The Femina entry uses an editorial text treatment rather than an unrelated stock image; its details are under `modal-femina`.

## Call-sheet audit update — 6 October 2026

Documented dates: Scullers 20 August 2019; Tanishq Aarambh 5 March 2020; Mélange 12 March 2020; Tata CLiQ Luxury 12 October 2020. Zoya Rooted is confirmed for the Mumbai product shoot only; its separate Goa model shoot is not claimed. Pantaloons 2019 is confirmed. Both are restored. Unsupported numerical crew claims removed. All confirmed brands now have full project entries in All Projects. Fair & Lovely involvement confirmed by Shree; exact role remains unassigned.

JavaScript syntax, local references, duplicate IDs, media decoding and package integrity were checked. This pass has not been visually tested in the browser because the local preview URL was blocked by the browser tool. Check phone and desktop playback before public deployment.

## Complete project list update

Eight former additional credits are now full entries: ICICI Bank, BPFT, Clinic Plus, Max Regional Festive, Castrol, Fastrack Ergo Light, Roadster 2021 and Fair & Lovely. Total: four featured and eighteen in All Projects. The new call sheets establish Armani 6 January 2021, Chopard 5 March 2021, Fastrack 3 March 2020, Max 28 January 2021, and Castrol 26/28 July 2021. New entries use designed text cards where exact campaign media could not be confidently matched online.

The user has published an earlier version at https://messin-neko.github.io/shreetandel/. This package contains the next update; upload its contents to the same repository to publish these changes. No GitHub push is performed by this local package.

## Save business contact

The opening section and Contact section link to `documents/Shree_Tandel_Contact.vcf`. It contains Shree Tandel, the Associate Producer title, mobile +1 682 306 1109, email, portfolio URL and LinkedIn. Visitors can download/import the contact; the exact save screen depends on their device. The phone remains off the visible page, but is included in this publicly downloadable contact card. Upload the new VCF alongside the updated `index.html` when updating GitHub Pages. No external service is required.
