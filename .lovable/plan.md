

# Website Content & Design Overhaul Plan

## Summary
Rewrite all website copy with SEO-optimized, premium content inspired by the Dentifique reference design. Upgrade layout/styling to match the reference screenshots: long-form SEO content blocks, review platform badges with logos, bold keyword emphasis, and a more editorial, content-rich approach. No question-based headings. No repetitive clinic name usage.

## Technical Details

This is a large content and layout overhaul across 6 files, plus the services data file. The reference images show a content-heavy, SEO-first design with editorial-style paragraphs, bold keyword callouts, and platform review badges.

### Files to Modify

**1. `src/pages/HomePage.tsx` (Major rewrite)**
- **Hero**: Rewrite heading to "We Enhance Your Smile With Expert Care" style (no question format). Add "About Us" secondary CTA. Keep split layout but refine copy.
- **Stats section**: Rename labels to match reference style: "Clients", "Years", "Awards", "Smiles" with large animated counters (keep AnimatedCounter).
- **About Preview**: Replace with long-form SEO paragraph block (2-3 paragraphs) titled "The Best Dentist in Greater Kailash II — Precision Care at Its Finest". Bold keywords like **best dental clinic in Delhi**, **dentist in New Delhi**, **dental clinic in GK2**. No question headings.
- **New section**: "Location and Quality — South Delhi's Premier Dental Destination" with SEO-rich paragraph about proximity, metro access, hygiene standards.
- **Specializations**: Keep doctor photo + 2x2 grid but rewrite heading to "SPECIALIZATIONS OF" / "Dr. Sandeep Preenja" (two-line, reference style). Rewrite description copy.
- **Services grid**: Upgrade card images to rectangular with overlay title (reference style: tall cards with image + title bar at bottom) instead of circular images.
- **Review Platforms section**: New "Highly Rated Dental Clinic in Greater Kailash II" section showing Google (5.0, 120+ Reviews), JustDial (4.9, 125+ Reviews), Practo (5.0, 85+ Reviews) with styled platform name text (not logos since we can't embed third-party logos, but styled text badges).
- **Long-form SEO content section**: Add "Comprehensive Care at the Best Dental Clinic in GK2" with numbered treatment descriptions (Specialised Orthodontics, Painless Root Canal Treatments, Dental Implants & Tooth Replacement, Cosmetic Dentistry & Smile Makeovers). Bold keywords throughout.
- **"Transparent Pricing" section**: Short paragraph about ethical pricing and no hidden costs.
- **Testimonials**: Keep carousel but rewrite intro copy. Remove question heading, use "Real Patient Experiences" with editorial subtitle.
- **FAQ**: Rewrite with SEO-optimized questions matching reference: "Who is the best dentist in Greater Kailash II?", "Which areas does the clinic serve?", "Do you provide orthodontic treatment near me?", etc. Use arrow-style accordion matching reference.
- **Booking CTA**: Rewrite to "Your Perfect Smile Starts Today" with premium copy.
- Remove duplicate "Why Choose Us" and "Why 20,000+ Patients Trust Us" sections. Consolidate into one "Patients Trust" stats + about section.

**2. `src/data/services.ts` (Content rewrite)**
- Rewrite all 9 service overviews with SEO-optimized, non-question-based content
- Remove "What Are...?" and "Why Choose...?" heading patterns from the data
- Add `seoTitle` and `seoDescription` fields for each service
- Rewrite FAQ questions to avoid question-based headings where possible, or keep natural FAQ format but with SEO keywords

**3. `src/pages/ServicePage.tsx` (Layout + content upgrade)**
- Rewrite section headings: "What Are Dental Implants?" becomes "Advanced Dental Implant Solutions in Greater Kailash II"
- "Why Choose..." becomes "Key Benefits of [Service]"
- "How It Works" becomes "The Treatment Process — Step by Step"
- "Frequently Asked Questions About..." becomes "Common Concerns About [Service]"
- Add long-form SEO content block below overview (reference style)
- Keep 70/30 layout with sidebar form

**4. `src/pages/AboutPage.tsx` (Expand significantly)**
- Replace thin wrapper with full-page content
- Add hero banner section
- Expand clinic story to 400+ words with SEO keywords
- Add "Clinical Expertise & Experience" section with bold keywords
- Add detailed doctor bio with credentials list
- Add "Recognized Excellence" awards inline (not separate component)
- Add clinic gallery section

**5. `src/pages/ContactPage.tsx` (Content polish)**
- Rewrite hero: "Have Questions? Get in Touch!" style heading (reference shows this)
- Actually, per constraints, no question headings — use "Get in Touch — We're Here to Help"
- Keep existing layout, polish copy

**6. `src/components/AboutSection.tsx` (Content rewrite)**
- Rewrite copy to be SEO-rich, no question headings
- Bold keywords in paragraphs

**7. `src/index.css` (Minor additions)**
- Add styles for the new review platform badges
- Add styles for long-form content sections with bold keyword highlighting

### Content Strategy (Key Rewrites)

**Home Page Hero**:
"We Enhance Your Smile With Expert Care" → Subtext about 23 years, GK2 location, advanced technology

**About Preview** (long-form SEO block):
Title: "The Best Dentist in Greater Kailash II"
3 paragraphs with naturally bolded keywords: **dental clinic in Delhi**, **best dentist in GK2**, **cosmetic dentistry New Delhi**, **painless dental treatment**

**Services descriptions**: Each gets 200-300 words of unique, keyword-rich content without question-based headings

**FAQ rewrites**:
- "The Best Dentist in Greater Kailash II" (answer positions Dr. Preenja)
- "Areas Served by the Clinic" (GK2, Lajpat Nagar, Kalkaji, Nehru Place, South Delhi)
- "Orthodontic Treatment Availability"
- "Consultation Fees and Pricing Transparency"
- "Emergency Dental Services in South Delhi"

### Visual/Style Changes
- Service cards: Switch from circular images to tall rectangular cards with image taking 70% height and title overlay at bottom (matching reference screenshot 2)
- Add subtle green accents on hover states
- Review badges section with large styled text for platform names
- Long-form content sections with proper typography hierarchy (H2 bold, H3 semi-bold, body with bold keywords)
- Keep all existing green (#16a34a) theme, animations, dark mode, routing

### What Stays Unchanged
- Header, Footer, WhatsApp button (per user's prior constraints)
- React Router structure and all routes
- Dark mode toggle
- AnimatedCounter component
- BeforeAfterSlider component
- Page transition animations
- All existing assets/images

