# Deploy Instructies voor Dynique

## GitHub Setup

Voer deze commando's uit (vervang USERNAME door je GitHub username):

```bash
cd /Users/school/newdynique
git remote add origin https://github.com/USERNAME/dynique.git
git branch -M main
git push -u origin main
```

## Cloudflare Pages Deployment

### 1. Cloudflare Account
- Ga naar [dash.cloudflare.com](https://dash.cloudflare.com)
- Log in of maak een account

### 2. Nieuwe Pages Project
- Klik op **Workers & Pages** in de sidebar
- Klik op **Create application**
- Kies **Pages** tab
- Klik op **Connect to Git**

### 3. GitHub Koppelen
- Kies je **dynique** repository
- Klik **Begin setup**

### 4. Build Settings
Vul het volgende in:

**Project name:** `dynique` (of jouw voorkeur)

**Production branch:** `main`

**Framework preset:** `Next.js`

**Build command:** `npm run build`

**Build output directory:** `.next`

**Environment variables (belangrijk!):**
- Klik op **Add variable**
- Name: `NODE_VERSION`
- Value: `18` of `20`

### 5. Deploy
- Klik **Save and Deploy**
- Wacht 2-5 minuten voor de build
- Je site gaat live op: `dynique.pages.dev` (of custom subdomain)

### 6. Custom Domain (Optioneel)
Als je een eigen domein wilt:
- Ga naar je project in Cloudflare Pages
- Klik op **Custom domains** tab
- Klik **Set up a custom domain**
- Volg de instructies om DNS in te stellen

## Belangrijke Notes

### Automatische Deploys
- Elke keer dat je naar GitHub pusht, deploy Cloudflare automatisch opnieuw
- Handig voor updates!

### Environment Variables
Als je later API keys nodig hebt:
- Ga naar **Settings** > **Environment variables**
- Voeg toe en redeploy

### Google Search Console
Na deploy:
1. Claim je domein in Search Console
2. Vervang `verification_token_here` in `src/app/layout.tsx` met je token
3. Commit en push opnieuw

## Troubleshooting

**Build Fails:**
- Check of Node version op 18+ staat
- Check of build command klopt: `npm run build`

**Images niet zichtbaar:**
- Zorg dat `/public/rsc/` bestanden gecommit zijn
- Check of paths kloppen (moet starten met `/rsc/`)

**Video's laden niet:**
- Check bestandsgrootte (Cloudflare Pages heeft 25MB limiet per file)
- Overweeg video hosting op externe service als te groot

## Performance Tips

Na deploy kan je nog optimaliseren:
- Enable **Cloudflare CDN** (automatisch)
- Check **Speed Insights** in Cloudflare dashboard
- Enable **Cloudflare Images** voor automatische optimalisatie

## Support

Problemen? Check:
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)
- [Next.js on Cloudflare](https://developers.cloudflare.com/pages/framework-guides/nextjs)

