# Quick Fix: Email Testing

The email functionality uses Vercel serverless functions which don't run in local `npm run dev`.

## Option 1: Deploy to Vercel (RECOMMENDED - Takes 5 minutes)

This will make everything work perfectly:

1. **Push code to GitHub** (if not already):
   ```bash
   git add .
   git commit -m "Added email functionality"
   git push
   ```

2. **Deploy to Vercel**:
   - Go to https://vercel.com
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Add Environment Variables in Vercel**:
   - Go to Project Settings → Environment Variables
   - Add these 3 variables:
     - `EMAIL_USER` = `Pathwayinternationalnlr@gmail.com`
     - `EMAIL_PASS` = `ilefsrkvlzxhdzsn`
     - `EMAIL_RECEIVER` = `Pathwayinternationalnlr@gmail.com`
   - Click "Save"

4. **Redeploy**:
   - Go to Deployments tab
   - Click "Redeploy" on the latest deployment

5. **Test**:
   - Visit your live Vercel URL
   - Fill out the contact form
   - ✅ Emails will work!

## Option 2: Test Locally with Vercel CLI

If you want to test locally first:

1. **Stop the current dev server** (Ctrl+C in the terminal)

2. **Run with Vercel**:
   ```bash
   vercel dev
   ```

3. **Follow the authentication prompts**:
   - Press ENTER to open browser
   - Log in to Vercel
   - Come back to terminal

4. **Test**:
   - Visit `http://localhost:3000`
   - Fill out contact form
   - ✅ Emails will work!

## Why doesn't it work with `npm run dev`?

- `npm run dev` uses Vite which is a frontend-only server
- `/api/send-email.js` is a Vercel serverless function (backend)
- Vite can't run serverless functions
- You need either Vercel CLI locally OR deploy to Vercel

## Recommended: Just Deploy!

The easiest way is to **deploy to Vercel** (Option 1 above). It's free, takes 5 minutes, and everything will work perfectly including:
- ✅ Email sending
- ✅ Auto-reply to customers
- ✅ Professional email templates
- ✅ Zero cost

Let me know which option you'd like to try!
