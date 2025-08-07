# 🎨 GanjaGuru UI Style Guide – Version 1.0

## Document Title:  
**GanjaGuru Gravity-Gone UI Visual & Brand Style Guide**

## Objective:  
Establish and enforce a unified, multidimensional, immersive visual system built on anti-gravity principles — combining radical creativity, non-linear layout structures, cannabis-inspired aesthetics, and multimodal interactivity across all devices, environments, and personas.

## 🧬 1. Brand DNA

### 1.1 Brand Identity Keywords
- Floating  
- Psychedelic  
- Futuristic  
- Earthy  
- Cosmic  
- High-Vibe  
- Zen-Grit  
- Sustainable  
- Immersive  
- Playfully Profound  

### 1.2 Visual Ethos
- Always moving, never static  
- Glows, pulses, shadows, fogs, orbs, ripple effects  
- 3D parallax stacking  
- Nature x Tech fusion  
- Cannabis culture integrated with universal UX innovation  

## 🎨 2. Color System

### 2.1 Primary Palette
| Name              | HEX       | Use Case                               |
|------------------|-----------|----------------------------------------|
| Cannabis Green    | #3E9B43   | Primary CTA, navigation states         |
| Purple Haze       | #6E4FA3   | Accents, floating UI shadows           |
| Solar Cured Gold  | #F9A825   | Callouts, highlights, coin pulses      |
| Cosmic Black      | #121212   | Backgrounds and space voids            |
| Mint Kush         | #A1FFC4   | Design studio and interaction buttons  |

### 2.2 Secondary Palette
| Name              | HEX       | Use Case                               |
|------------------|-----------|----------------------------------------|
| Stardust Pink     | #FF80B4   | Indicators, Guru mood glow             |
| THC Orange        | #FFA740   | Warnings, energetic animations         |
| Sky OG Blue       | #50C0FF   | Modal frames, tooltips                 |
| Trichome Silver   | #C0C0C8   | Icons, border highlights               |
| Aura White        | #F5F5F5   | Text overlays, tooltips, inner glows   |

### 2.3 Gradients & Overlays
- “Fog of Thought”: linear-gradient(#3E9B43 15%, #6E4FA3 85%)  
- “Nebular Fade”: radial-gradient(circle, rgba(250,250,250,0.1) 0%, transparent 80%)  
- “Vein Pulse”: animated border gradient using solar gold, THC orange, trichome silver

## 🔤 3. Typography System

### 3.1 Primary Typeface  
- **Futura Bold** – Headers, nav labels  
- Emotive, geometric, futuristic, legible

### 3.2 Secondary Typeface  
- **Montserrat Medium/Light** – Paragraphs, cards  
- Modern touch, clean body reading

### 3.3 Accent Fonts  
| Name              | Use                              |
|------------------|-----------------------------------|
| Jazzy Hands       | Dialogue text, Guru voice bubbles  
| Pippin Sans       | Motion animations, hover labels  
| Times New Roman   | Easter Egg / legacy material      |
| Montessori Gothic | Education / Learn module titles   |

### 3.4 Sizing Scale (Rem)
| Type           | Size     | Usage                         |
|----------------|----------|-------------------------------|
| Display XL     | 4.2rem   | Hero & Portal headlines       |
| H1             | 2.8rem   | Island headers                |
| H2             | 2.2rem   | Module headers                |
| Body L         | 1.4rem   | Primary readable content      |
| Body S         | 1.05rem  | Card details, footer text     |
| Label/Mono     | 0.875rem | Info blocks, system labels    |

## 🧩 4. UI Components

### 4.1 Buttons

| Type         | Style                                 | Interaction States                       |
|--------------|----------------------------------------|------------------------------------------|
| Primary CTA  | Cannabis Green, bold, lifted shadow   | Hover: pulse glow / Active: scale 1.1x + shadow glow |
| Floating Orb | Circular, 3D shadow, LED border        | Hover: rotation bounce + sound blip     |
| Ghost        | Transparent + border, high contrast    | Hover: inner glow + slow shimmer        |

- Animations: scale-on-click, magnetic hover start, ripple-on-press (mobile)
- Sound: “pop” tap, “swirl” hover

### 4.2 Cards

- Shape: Rounded rectangle, 3px padding shadow blur, floating on z-index layers  
- Hover: subtle rotate, floating sway, image depth parallax  
- Select: expands, bounces, locks visual focus

### 4.3 Modals

- Uses 3D tilt entry  
- Dimmed, blurred background (8px)  
- Always has asymmetric vignette glow borders

## 🌀 5. Layout & Motion Rules

### 5.1 Desktop Layouts

- Content Zones: Max width 1600px with 6-column floating layout  
- Asymmetrical modular islands; always stacked in z-depth not vertical flow  
- Nav & tools float fixed via magnetic anchors

### 5.2 Mobile Layouts

- App shell with floating tabs, orbiting radial nav  
- Swipe-to-expand drawers with momentum physics  
- Thumb-circle gestures to switch between islands

### 5.3 Motion System

| Element     | Behavior                  | Rules                                           |
|-------------|---------------------------|------------------------------------------------|
| Scroll      | Drift with inertia        | GSAP easing curve: easeOutCubic, duration 1.3s |
| Hover       | Weightless float/tilt     | Reaction radius: 40px                          |
| Click       | Bounce with compression   | Spring scale (0.93 to 1.05)                   |
| Transition  | Zoom blur + portal warp   | Speed: 2 layers parallax, 800ms duration       |

### 5.4 3D / Parallax Layers

- Layer 0: Background stars (constant drift)  
- Layer 1: Avatar / Scene  
- Layer 2: Navigation/Tools  
- Layer 3: Floating Cards/Content  
- Layer 4: Modals & Popups

## 🎛️ 6. Icon System

### 6.1 Base Style  
- Line + thickness combo  
- Rounded corners, layered outlines  
- Float illusion: directional shadow (45° angle)

### 6.2 Icon Pack Categories

| Category       | Icons (Examples)                      | States                     |
|----------------|----------------------------------------|----------------------------|
| Navigation     | Home, Shop, Design, Community, Learn   | Glow/scale on hover        |
| Product        | Leaf, Nug, Gear, Flame, Bottle         | Color-flash on select      |
| Feedback       | Chat, Microphone, Heart, XP Star       | Pop + pulse                |
| Physics Triggers | Hand, Drag-Point, Tilt, Snap          | Motion lines, echo halo    |

## 📐 7. Grid & Spacing

### 7.1 Grid System  
- 6-Column fluid grid  
- Moderate margins (6–9vw edge paddings)  
- 56px max section paddings for floating visibility

### 7.2 Spacing Units  
- XS: 8px  
- SM: 16px  
- MD: 24px  
- LG: 40px  
- XL: 64px

## 🧠 8. Theme Modes

### 8.1 Light Mode  
- Background: Aura White (#F5F5F5)  
- Accents: Cannabis Green, THC Orange  
- Text: Cosmic Black

### 8.2 Dark Mode (Default)  
- Background: Cosmic Black  
- Accent: Purple Haze, Mint Kush  
- Text: Aura White

### 8.3 Mood-Based Dynamic Theme  
- Triggered by Guru persona, time of day, or user energy

## ♿ 9. Accessibility Standards

### 9.1 Color & Contrast  
- All text 4.5:1 contrast minimum  
- High-contrast toggle with increased scale buttons

### 9.2 ARIA Roles  
- every clickable, draggable, togglable UI element defined  
- semantic tagging across radial nav, portal entry, Guru interactions

### 9.3 Keyboard & Voice  
- Tab-indexed floating menu logic  
- Voice input alternatives for nav, input, confirmation  
- Voice output: optional accessibility GPT narrator voice for blind mode

## ⚠️ 10. System Notifications & Feedback

| Type       | Color     | Icon     | Motion                  |
|------------|-----------|----------|--------------------------|
| Success    | #3E9B43   | ✅        | Grow glow + bounce popup |
| Error      | #FF3C3C   | ❌        | Quick fade-in ripple     |
| Warning    | #FFA740   | ⚠️        | Shake + aura ring        |
| XP/Levelup | Gradient  | ⭐️        | Burst + sound ping       |
| Message    | Sky OG    | 💬        | Slide-in bottom left     |

## 🛠️ 11. Asset Standards

- Format: WebP, SVG for UI; PNG fallback  
- Animations: Lottie / GLB for floating components  
- Load Priority: Avatar + primary nav — preload; modular lazy-load for deeper islands

## 📎 12. Component File Mapping

| Component            | File Reference                         |
|----------------------|-----------------------------------------|
| Avatar States        | /assets/avatars/guru_v1/               |
| Floating Buttons     | /components/ui/float-button.tsx       |
| Island Containers    | /layouts/floatingIslands/*.vue        |
| Voice UI Overlay     | /modules/voice-overlays/guru-listen   |
| Typography Rules     | /styles/typography.module.css         |
| Color Tokens         | /tokens/themeColors.json              |
| Grid/Motion Tokens   | /tokens/layoutMotion.js               |

## 🔚 Document Footer

**Guide ID:** ganjaguru/ui-style-v1  
**Maintained by:** GanjaGuru Design Engineering Team  
**Sync Source:** Figma Masterboard `GG_UI_V1`  
**Version:** 1.0  
**Last Updated:** 2025-08-07  
**Distribution:** Internal | Contributors | Partner Vendors  

**End of Style Guide**

Sources
