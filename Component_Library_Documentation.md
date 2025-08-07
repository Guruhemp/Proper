# # 📘 GanjaGuru Component Library Documentation  
**Version:** 1.0  
**Scope:** Core UI/UX interface and interaction components for Web, PWA, and Native Platforms  
**Target Frameworks:** React / Svelte / Web Components / Unity UI Modules  
**File Convention:** kebab-case, ComponentName/index.[ts|js]  
**Base Directory:** `/components/`  
**Themes Supported:** Day (Greenlight), Night (Haze Mode), Accessibility Palette  

## 1. GLOBAL THEMES

### 1.1 Theme Tokens  
- Primary: `#008441 (Kush Green)`  
- Secondary: `#241E38 (Indica Night)`  
- Accent: `#F27C21 (Orange Runtz)`  
- Disabled: `#777777`  
- Success: `#51FFBC`  
- Error: `#ED4F87`  

### 1.2 Elevation System  
- `e1`: flat  
- `e2`: floating (shadow-sm)  
- `e3`: hover float  
- `e4`: active drag  
- `e5`: spotlight modal  

## 2. CORE ATOMS

### 2.1 Button  
**Variants:** Primary, Secondary, Ghost, Icon, Floating  
**States:** Default, Hovered, Pressed, Disabled, Loading  
**Slots:** StartIcon, Label, EndIcon  
**Properties:**  
- `size`: sm | md | lg  
- `theme`: default | neon | alt  
- `interaction`: bounce | pulse | none  
- `animation`: delay-entry | shimmer-hover  

### 2.2 Icon  
**Modes:** Static / Lottie / 3D GLB  
**Sizes:** xs (16px) / sm / md / lg / xl (128px+)  
**Categories:** System, Cannabis, Avatar, Marketplace, Design Studio  

### 2.3 Typography System  
**Font Tokens:**  
- Headline: Futura ExtraBold  
- Subheader: Montserrat Semibold  
- Body: Pippin Regular  
- Dialogue: Jazzy Grotesque  
- Quote: Times New Roman Italic  

**HTML Mapped Styles:**  
| HTML Tag | Token | Use Case         |  
|----------|-------|------------------|  
| h1       | HXL   | Hero titles      |  
| h2       | HL    | Section headers  |  
| p        | Body  | Paragraph text   |  
| span     | Note  | Metadata / notes |  

## 3. MOLECULES

### 3.1 Input Field  
**Types:** Text, Email, Search, Password  
**Options:** Full width, Icon inside, Tooltip on focus  
**Error Handling:** Real-time validation / Icon + msg  
**Transforms:** Glow on focus | Slide label above  

### 3.2 Toggle Switch  
**Variants:** On/Off | Day/Night | Persona Change  
**Animation:** Snapflip, Fade-glow  
**Props:**  
- `checked`  
- `iconPair`  
- `aria-role="switch"`  

### 3.3 Card  
**Variants:** ProductCard, ModuleCard, ProfileCard, StrainCard  
**Depth:** auto-mode with parallaxLayer / glow  
**Interactive Overlays:** Favorite, Share, Expand  

### 3.4 Tooltip  
**Themes:** Dark Mini | Light Glyph | Haze Signal  
**Triggers:** Hover | Focus | Voice prompt  
**Placement:** top | bottom | left | right | auto  

### 3.5 Loader  
**Types:**  
- Vortex (spiral cannabis)  
- Dot Pulse (3D float)  
- Strain Spinner (strain name loop)  

### 3.6 Notification Toast  
**Variants:** Info | Success | Error | GuruAdvice  
**Behavior:** Slide in, Floating fade out, Sticky if critical  
**Iconography:** Inline with persona-based micro-reaction  

## 4. ORGANISMS

### 4.1 Navbar (OrbitalNav)  
**Mode:** Elliptical rotation  
**Config:**  
- 6 Icon Nav slots  
- Microinteraction slow orbit  
- Keyboard+Voice accessibility  
- Lottie-hover animated label  

### 4.2 Floating Island  
**Structure:**  
- `IslandContainer`  
- `IslandLayer`  
- `IslandContent`  
**States:** Active / Blurred / Inflight  
**Interaction:** Drag | Flick | Snap  

### 4.3 GanjaGuru ChatOrb  
**Embed Point:** Corner | Center dock | Slide-out mini dock  
**Components:**  
- AvatarAnim (GLB or SVG loop)  
- InputField (voice/text toggle)  
- AI state bar (typing/reacting/callback queue)  
**Filter Hooks:**  
- Persona switch  
- Answer depth mod  
- Override redirect intent  

### 4.4 Product Carousel  
**Types:** Continuous float | Snap scroll | Drag grid  
**AR Loader:** Preview button launches product overlay  
**3D Support:** Enables GLTF rotator inline + snapshots  

### 4.5 Avatar Selector  
**Components:**  
- PersonaCard  
- BioTooltip on swipe  
- Emotion preview avatar  

### 4.6 Grow Room Grid  
**Configuration:**  
- 3D module placement grid  
- Floating tooltip per item  
- Metrics display bar (humidity, temp, nutrients)  

## 5. TEMPLATES

### 5.1 Island Screen Layout  
**Zones:**  
- System BG  
- Orbit/Map Radar  
- Title Banner  
- MainContentCardZone  
- Secondary Panel Side Float  

### 5.2 Checkout Flow  
**Steps V1:**  
- Personalize > Add-ons > Review > Confirm > Floating Receipt  
- Gliding load capsule instead of hard transitions  
- Background synced w/ Guru persona feedback  

### 5.3 AR View Scene  
**Elements:**  
- PlaceModel (with mesh constraints)  
- RotateRing (gesture-controlled)  
- LightDome (adjustable lighting)  
- ViewToggle (AR ↔ 3D)  

## 6. UTILITIES

### 6.1 Accessible ARIA Helpers  
**Functions:**  
- `useARIA(label, role, description)`  
- Auto-wrap interactive components  
**Includes:** Keyboard tab map, Skip navigation support  

### 6.2 Motion Presets  
Library: `@ganjaguru/motion-presets`  
Includes:  
- EaseInOutFloat  
- SpringDrop  
- HoverJelly  
- SnapDrift  

### 6.3 Theme Context  
`useTheme()` → access to tokenized color/font/devices  
Includes `Floating Mode`, `Minimalist Mode`, `Cosmic Mode`

## 7. TOKENS

### 7.1 Spacing  
- `space-xs`: 4px  
- `space-sm`: 8px  
- `space-md`: 16px  
- `space-lg`: 24px  
- `space-xl`: 32px  
- `space-xxl`: 48px  

### 7.2 Radius  
- `r-xs`: 4px  
- `r-md`: 12px (default float panel)  
- `r-full`: 999px  

### 7.3 Shadows  
- `s-soft`: rgba 0,0,0,.15  
- `s-float`: rgba 0,0,0,.2 + blur(6px)  
- `s-glow-green`: rgba(0,132,65,0.75)

## 8. TEST SUITE

### 8.1 Component Coverage  
- Unit tests for props, themes, loading states  
- Interaction coverage per device category  
- Motion snapshots (Framer Motion Testing Suite)

### 8.2 UI Contracts  
- Visual diff tested for Light/Dark/Cosmic themes  
- Responsiveness enforced at >5 viewport sizes  
- Focus ring + keyboard trigger test  
- Accessibility score ≥98/100 Lighthouse  

## 9. EXPORT STRUCTURE

### Directory Structure  
```
/components  
  /atoms  
  /molecules  
  /organisms  
  /templates  
  /utilities  
  /tokens  
```

### Asset Output  
- `/dist/ui-kit.bundle.js`  
- `/theme/ganjaguru-theme.css`  
- `/storybook/index.html`  

## 10. VERSION CONTROL & CHANGELOG

### Release Structure  
- Semantic Versioning  
- Git branch: `release/ui-v*`  
- Protected Releases: `main`, `theme-core`, `orbit-physics`, `ar-components`  

### Changelog Format  
```
[ Added ] Floatingtabs layout  
[ Modified ] Tooltip pop delay  
[ Fixed ] AvatarContainer flicker on scroll  
[ Removed ] legacy ARCSS  
```

## 11. LICENSE

- CCL 4.0 with proprietary restrictions  
- No redistribution outside approved GanjaGuru ecosystem unless approved  
- Branding marks, icons, and interactions not for open modding unless specified in `/api/plugin` keys.

---  
**End of Document: GanjaGuru Component Library v1.0**

Sources
