# Raunaq Landing Website (`raunaq-site`)

Official public showcase website for **Raunaq (رونق)** — Pakistan's real-time wedding memory collective.
- **Primary Canonical Origin**: `https://raunaq-site.pages.dev/`
- **Fallback Origin**: `https://ahmad786-coder.github.io/raunaq-site/`

---

## 1. What This Site Is

A self-contained, high-performance landing page presenting:
- The zero-login table QR guest experience.
- The signature **Purdah Mode** modesty guarantees (approval-before-display, private ladies functions, no guest browsing).
- Transparent wedding package tiers (Single Function: Rs 1,999; Full Wedding: Rs 3,499; Premium: Rs 4,999).
- Venue Live Wall & Voice Guestbook highlights.
- **For marquees & partners**: 20% commission on every booking brought (Rs 400 / Rs 700 / Rs 1,000 per package).

---

## 2. Configuration: The WhatsApp Number Constant

The site contains a single configuration constant near the top of the `<script>` tag in `index.html`:

```javascript
const RAUNAQ_WHATSAPP_NUMBER = "";
```

### Two Operational States:
1. **EMPTY State (`""`)**:
   - Every booking, reservation, and partner CTA button links directly to `#book`.
   - The `#book` section displays the required message:
     > *"To book your date, message us on WhatsApp — number coming here very soon. If someone shared this page with you, ask them for our number."*
2. **FILLED State (e.g. `"923001234567"`)**:
   - The script automatically rewires all buttons to `https://wa.me/<number>?text=<prefilled message>`.
   - Opens WhatsApp directly in a new tab with tailored prefilled inquiries.

---

## 3. Custom Domain Attachment (`raunaqshadi.com`)

When the custom domain `raunaqshadi.com` is ready to attach:

1. Add a `CNAME` file to the root of this repository containing:
   ```text
   raunaqshadi.com
   ```
2. In your DNS provider (e.g., Cloudflare, Namecheap, GoDaddy), configure DNS records:
   - **Apex domain**: `ALIAS` or `ANAME` or `A` records pointing to GitHub Pages IP addresses (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`).
   - **Subdomain (`www`)**: `CNAME` record pointing to `ahmad786-coder.github.io`.
3. In GitHub Repository Settings $\rightarrow$ Pages $\rightarrow$ Custom Domain, enter `raunaqshadi.com` and enable **Enforce HTTPS**.

*(Do not buy or configure DNS until ready to launch).*

---

## 4. Design & Performance Standards

- **Single File**: Self-contained `index.html` ($< 60\text{ KB}$, well under the 300 KB limit).
- **Fonts**: Single Google Fonts request (`Playfair Display`, `Inter`, `Noto Nastaliq Urdu`).
- **Zero Heavy Assets**: Pure SVG geometry and CSS gradients; zero raster images, videos, or JS frameworks.
- **Accessibility**: 100% visible and readable with JavaScript disabled. Full `prefers-reduced-motion` support.
