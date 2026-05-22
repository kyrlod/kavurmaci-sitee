# Kavurmacı Yakup Usta — Premium Restoran Web Sitesi

Premium, modern ve lüks restoran websitesi. Next.js 14, TypeScript, TailwindCSS ve Framer Motion ile geliştirildi.

## Hızlı Başlangıç

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini aç.

## Production Build

```bash
npm run build
npm run start
```

## Vercel Deploy

```bash
# Vercel CLI ile
npx vercel

# Ya da GitHub'a push et, Vercel otomatik deploy eder
```

## Özelleştirme

### Telefon Numarası
`components/Navbar.tsx`, `components/sections/Reservation.tsx`, `components/sections/Contact.tsx`, `components/Footer.tsx` dosyalarında telefon numaralarını güncelle.

### WhatsApp
`components/WhatsAppFloat.tsx` ve `components/sections/Reservation.tsx` dosyalarındaki `WHATSAPP` değişkenine kendi numaranı gir (90 ile başlayan format).

### Google Maps
`components/sections/Contact.tsx` içindeki `mapsUrl` değişkenine kendi harita embed linkini yapıştır.

### Görseller
Unsplash görselleri placeholder olarak kullanılmıştır. `next.config.mjs` içinde izin verilen domain listesini düzenle veya kendi görsellerini `/public` klasörüne ekle.

### Menü & Fiyatlar
`components/sections/Menu.tsx` içindeki `menuItems` objesini düzenle.

## Teknolojiler

- **Next.js 14** — App Router
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** — Animasyonlar
- **Lucide React** — İkonlar
- **Google Fonts** — Playfair Display + Inter
