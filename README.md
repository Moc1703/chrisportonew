# Company Profile - Konsultan & Training Alat Berat

Website company profile profesional untuk perusahaan konsultan dan training alat berat dengan fitur CMS, desain modern, dan optimasi SEO.

## Fitur

- ✅ **CMS Sederhana** - Manage konten melalui file JSON
- ✅ **WhatsApp Integration** - Tombol hubungi langsung ke WhatsApp
- ✅ **Desain Modern** - UI/UX menarik dengan Tailwind CSS
- ✅ **SEO Optimized** - Meta tags, structured data, sitemap, robots.txt
- ✅ **Single Page** - Satu halaman dengan semua section
- ✅ **Responsive Design** - Mobile-friendly

## Section

1. **Home** - Hero section dengan CTA
2. **About** - Tentang perusahaan, visi, misi, nilai-nilai
3. **Services** - Layanan yang ditawarkan
4. **Gallery** - Galeri foto kegiatan
5. **Contact** - Informasi kontak dan WhatsApp

## Tech Stack

- **Next.js 14** - React framework dengan App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Instalasi

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Buka browser di [http://localhost:3000](http://localhost:3000)

## CMS - Mengelola Konten

Konten website dapat diubah melalui file `content/content.json`. File ini berisi semua data yang ditampilkan di website:

- **Home**: Title, subtitle, description, CTA text
- **About**: Informasi perusahaan, visi, misi, nilai-nilai, statistik
- **Services**: Daftar layanan yang ditawarkan
- **Gallery**: Daftar gambar galeri
- **Contact**: Informasi kontak, WhatsApp, email, alamat

### Mengubah Konten

1. Buka file `content/content.json`
2. Edit konten sesuai kebutuhan
3. Simpan file
4. Refresh browser untuk melihat perubahan

### Mengubah Nomor WhatsApp

Edit di `content/content.json` pada bagian `contact.whatsapp`. Format nomor harus tanpa spasi dan tanda (+), contoh: `6281234567890`

## Build untuk Production

```bash
npm run build
npm start
```

## SEO Optimization

Website sudah dioptimasi untuk SEO dengan:

- Meta tags lengkap (title, description, keywords)
- Open Graph tags untuk social media
- Structured data (JSON-LD) untuk search engines
- Sitemap.xml
- Robots.txt
- Semantic HTML
- Fast loading dengan Next.js

### Mengubah URL untuk SEO

Edit file berikut dengan URL website Anda:
- `app/layout.tsx` - Meta tags
- `app/sitemap.ts` - URL sitemap
- `app/robots.ts` - URL sitemap di robots.txt
- `components/StructuredData.tsx` - URL di structured data

## Customization

### Mengubah Warna

Edit file `tailwind.config.js` untuk mengubah warna primary theme.

### Mengubah Logo/Nama Perusahaan

1. Edit `components/Navigation.tsx` untuk nama di navbar
2. Edit `components/Footer.tsx` untuk nama di footer
3. Edit `components/StructuredData.tsx` untuk nama di structured data

## Struktur Folder

```
.
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout dengan SEO
│   ├── page.tsx        # Home page
│   ├── globals.css     # Global styles
│   ├── sitemap.ts      # Sitemap generator
│   └── robots.ts       # Robots.txt
├── components/          # React components
│   ├── sections/       # Section components
│   ├── Navigation.tsx  # Navigation bar
│   ├── Footer.tsx      # Footer
│   └── StructuredData.tsx # SEO structured data
├── content/            # CMS content
│   └── content.json    # Konten website
└── lib/                # Utilities
    └── cms.ts          # CMS helper functions
```

## License

MIT
