# 🧩 GanjaGuru Design System v1.0

## 1. Design Principles

### 1.1 Modularity  
All components are self-contained, reusable, and composable across any floating island or interactive surface.

### 1.2 Immersive Physics  
Interfaces must simulate floating, gravity-defying behaviors with 3D layering and motion continuity.

### 1.3 Vibe-Driven Aesthetics  
All visual decisions reflect the brand tone: confident, playful, spiritual, psychedelic.

### 1.4 Motion is Meaning  
Every motion informs hierarchy, orientation, or interactivity—never decoration alone.

### 1.5 Accessibility by Default  
All elements support ARIA, motion sensitivity, keyboard/voice use, and readable contrast.

## 2. Layout Rules

### 2.1 Viewport Grid  
- Root Canvas: 100vw x 100vh  
- Snap Zones: 4x4 hex grid with fluid proportion scaling  
- Z-Planes:  
  - z0: Background parallax  
  - z1: Content base (island)  
  - z2+: Floating UI, overlays  

### 2.2 Section Types  
- Core Island Modules  
- Floating Sub-Islands (popups)  
- Orbit Menus  
- Interaction Overlays (Guru, Chat, AR)

### 2.3 Spatial Positioning  
- Floating padding: 64px–auto center  
- Hover spacing: 12px expansion radius  
- Max island width: 1280px  
- Inner blocks: 320px–960px fluid  

## 3. Tokens

### 3.1 Color Tokens  
```
color-primary: #008441  
color-accent: #F27C21  
color-bg-dark: #101014  
color-surface: #241E38  
color-light: #C6FFDD  
color-danger: #ED4F87  
color-silver: #CECECE  
```

### 3.2 Typography Tokens  
```
font-heading: 'Futura', sans-serif  
font-subheading: 'Montserrat', sans-serif  
font-body: 'Pippin'  
font-guru: 'Jazzy'  
font-legacy: 'Times New Roman', serif  
```

### 3.3 Shadow + Elevation Tokens  
```
elevation-xs: 0 1px 2px rgba(0,0,0,0.08)  
elevation-md: 0 8px 24px rgba(40,255,150,0.25)  
elevation-floating-card: 0 24px 64px rgba(0,0,0,0.2)  
```

### 3.4 Radius & Spacing  
```
radius-base: 20px  
padding-sm: 8px  
padding-md: 24px  
gap-lg: 48px  
```

## 4. Components Library

### 4.1 Buttons  
- Floating Button  
- Glow Button (AR toggle)  
- Voice Trigger Button  
- States: idle ➝ hoverpulse ➝ selected-bounce  

### 4.2 Inputs  
- Search Orb  
- Guru Chat Field (translucent, rounded)  
- Design Tool Sliders (material opacity, size)  

### 4.3 Cards  
- Product Card (3D tilt, glow on hover)  
- Strain Bio Block  
- Add-to-Cart Bounce Card  

### 4.4 Navigation  
- Orbital Ring Menu  
- Floating BreadCrumbs  
- Cosmic Location Map  

### 4.5 Avatars & Overlays  
- Guru Faces (mode changes with personality)  
- Sub-Island Content Panels  
- Drag Handles + Snap Rails  

## 5. States & Variants

### 5.1 Button  
- Default / Hover / Glow Active  
- Sticky Drag / Tap Ripple Mobile  
- Voice Summary Response Button

### 5.2 Guru Chat  
- Soft Looping Pulse Idle  
- Floating Mic Input Active  
- Persona Transition Wave

### 5.3 Island Behavior  
- Idle: Bobbing drift  
- Active: Glow aura + front plane snap  
- Exit: Spin fade➝backward zoom

## 6. Interaction & Motion

### 6.1 Scroll Physics  
- Inertial drift with spring viscosity  
- Horizontal flick = friction-decreasing roll  
- Scroll wheel = parallax autorotate

### 6.2 Drag and Snap  
- Orbiting drag-rotate logic  
- Drop Targets = magnet glyphs  
- Attach = pulse + shake + glow confirm

### 6.3 Portal Navigation  
- Entry = spiral expand + page lift  
- Transition = 3-layer glass zoom  
- Exit = reverse vector warp shrink

## 7. Voice & Haptic Patterns

### 7.1 Haptics  
| Event            | Haptic     |
|------------------|------------|
| Snap-in          | short tap  |
| Drag float hold  | light buzz |
| Success confirm  | double tap |
| Guru joke reply  | micro press |

### 7.2 Voice States  
- Entry Wake: Lo-fi whistle & ripple  
- Listening: pulse glow & waveform  
- Response: bubble float & text sync

## 8. Assets & Export Standards

### 8.1 Icons  
- Format: SVG / PNG (fallback)  
- Style: 3D padded, shaded, edge-glow  

### 8.2 Animation  
- Type: Lottie JSON + GLTF loops  
- Duration: ≤3sec for micro-loops, ≤7sec per transition  
- Naming: `component.state.variant.ext`

### 8.3 Component Storage  
- `/components/ui/`  
- `/components/chat/`  
- `/components/animations/`

## 9. Theming & Personalization Layers

### 9.1 Presets  
- Cosmic Indica  
- Solar Sativa  
- Light Mode: Oasis  
- Dark Mode: Outer Realm  
- Mood Themes: defined by AI session signature

### 9.2 User Custom UI  
- Island opacity  
- Voice frequency  
- AR on/off & floating triggers

## 10. Brand Integration Rules

- Floating everything  
- No boxed containers  
- All components must animate or react  
- Orbiting menus only, no fixed navbars  
- Component surfaces must have glass/air depth

## 11. Accessibility Protocols

- ARIA role on all interactive floating assets  
- Keyboard trap guards per section/island  
- Motion Reduce toggle  
- Color override for high-contrast users  
- Audio transcript for all Guru messages

## 12. Dev Environment Tools

- Components: Storybook, Bit.dev  
- Motion: GSAP, Framer Motion, AOS  
- 3D/AR: Three.js, A-Frame  
- Design Source: Figma + Spectacle Code Export  
- Icons: Feather Icons 3D · Tabler · Custom SVGs in `/glyphs/`

## 13. QA Criteria

| Feature              | Test Target                   |
|----------------------|-------------------------------|
| Floating Island load | <600ms transition             |
| Guru avatar swap     | Seamless at 60fps             |
| Drag + Snap Accuracy | Collisions <2px offset margin |
| Voice Command Fail   | Retry triggers correctly      |

---  
**End of Document: GanjaGuru Design System v1.0**

Sources
