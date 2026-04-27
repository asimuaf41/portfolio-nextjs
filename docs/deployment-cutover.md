# Deployment Cutover (CRA -> Next.js)

## Current State
- Legacy Firebase Hosting config in `firebase.json` points to CRA `build` output and SPA rewrite.
- New app is Next.js App Router and should be deployed on a Next-compatible platform.

## Recommended Target
- Preferred: Vercel (zero-config for Next.js).
- Alternative: Firebase App Hosting (SSR-capable), not legacy static-only Hosting rewrite setup.

## Environment Variables
- `CMS_API_URL`
- `CMS_API_TOKEN`

## Cutover Steps
1. Configure production environment variables in the hosting provider.
2. Connect repository and set build command to `npm run build`.
3. Set runtime command to `npm run start` (or provider default for Next.js).
4. Validate `robots.txt` and `sitemap.xml` from production domain.
5. Submit production sitemap to Google Search Console.
6. Switch DNS / primary domain to the new deployment.

## Rollback Plan
1. Keep the previous CRA deployment active until traffic and indexing are verified.
2. If critical issue occurs, point DNS back to old deployment target.
3. Fix and redeploy Next app, then re-cutover.
