# Cara Deploy ke Vercel

Code sudah di-push ke GitHub: https://github.com/Moc1703/landingporto.git

## Opsi 1: Deploy via Vercel Dashboard (Recommended - Paling Mudah)

1. Buka https://vercel.com dan login dengan GitHub
2. Klik "Add New Project"
3. Import repository: `Moc1703/landingporto`
4. Vercel akan otomatis detect Next.js
5. Klik "Deploy"
6. Website akan live dalam beberapa menit!

## Opsi 2: Deploy via Vercel CLI

Jalankan command berikut:

```bash
# Login ke Vercel
vercel login

# Deploy (production)
vercel --prod
```

## Environment Variables (Jika Diperlukan)

Jika nanti memerlukan environment variables, tambahkan di Vercel Dashboard:
- Settings → Environment Variables

## Catatan

- Vercel akan otomatis build dan deploy setiap push ke branch `main`
- Website akan dapat URL otomatis seperti: `landingporto.vercel.app`
- Custom domain bisa ditambahkan di Vercel Dashboard → Settings → Domains

