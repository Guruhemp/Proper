# 📘 GanjaGuru Motion & Animation Specification

## Document Title  
**GanjaGuru Motion Animation Design System v1.0**

## Objective  
Define and standardize all animation timings, easing curves, physical behavior logic, micro-transitions, sensory effects, and multi-platform rendering consistency for the Gravity-Gone interface experience.

## 1. Animation Principles

### 1.1 Brand-based Motion Characteristics  
- Sentiment: Floating, ethereal, responsive, cosmic  
- Animation Philosophy: Motion as feedback, space as interface  
- Core Motifs: Gravity-defiance, inhale/exhale pulsing, celestial orbits

### 1.2 Global Parameters  
| Setting                      | Value                   |
|------------------------------|-------------------------|
| Frame Rate Target            | 60 fps                  |
| Motion Speed Base Unit       | 0.5s (scaleable)        |
| Stagger Delay Increment      | 0.08s                   |
| Easing Standard              | `cubic-bezier(0.25, 0.46, 0.45, 0.94)`  
| Overshoot Scalar (for bounce)| 1.1–1.15x               |
| Delay Compensation (VR/AR)   | -0.12s anticipatory     |

## 2. Element States & Animations

### 2.1 Floating UI Elements  
- Idle: `translateY(+5px → -5px)`; loop duration: 8s — `ease-in-out-sine`  
- On Hover: Scale `1 → 1.08`, opacity pulse `100% → 90% → 100%`, shadow bloom  
- On Tap/Click: Quick squash (`scaleY: 1 → 0.94`) + spring back

### 2.2 Buttons (Primary/CTA)  
- Entry: Rise from below `translateY(20px → 0)` + Fade In `opacity 0 → 1` (0.4s)  
- Tap: Fast squeeze (`scale: 1 → 0.95 → 1.05 → 1`)  
- Hover: Background shimmer, directional gloss sweep  

### 2.3 Cards & Containers  
- Scroll Into View: Fade In (`0 → 100%`), Slide `X: -32px → 0`, delay stagger per index  
- Hover: 3D tilt toward cursor, 2-axis parallax motion

### 2.4 Floating Product Blocks  
- Continuous: Gentle bob `translateY` loop (`±2px`, 2.6s loop)  
- Hover: `Y-rotation: 0° → 35°`, scale `1.00 → 1.03`, glow scatter  
- Add to Cart: "Snap" animation with path-follow line trail and scale explosion

## 3. Navigation Animations

### 3.1 Orbital Menu  
- Orbit Motion: `rotateZ` at `linear(15s)` loop, easing `none`  
- Proximity: slows orbit temporarily (`rotateZ` velocity cut 50%), item grows  
- Icon Select:  
  - Detach → scale `1.0 → 1.5` (w/ particle burst)  
  - Transition scene fade + zoom into target island

### 3.2 Island Transitions  
- Enter: Zoom from off-screen `Z: -1000 → Z: 0`, opacity `0 → 1`, staggered layering  
- Exit: Fade Out `opacity 1 → 0`, `translateZ(+600)` with blur  
- Auto-snap: Nearby island drift-in with bounce landing

### 3.3 Map Navigation  
- Map Open: Scale zoom-out `scale(1 → 0.65)`, fade-in overlay, stars expand  
- Island Pick: Orbit plane rotates and focuses camera, island pulses and zooms in

## 4. Text Animations

### 4.1 Kinetic Headers  
- Loop Types:
  - Smoke Rise (`translateY -30px → 0px`, `opacity 0 → 1`)  
  - Flickering Glyphs: Random stagger-cascade reveal (`letter-delay` persistences)  
  - Typing Simulator: 100ms/character, cursor pulse beat AR(90bpm)

### 4.2 Buttons & Links  
- Label Enter: Slide In From Lower Left, fade in  
- Hover: Text shadow glow pulse, underscore expands from center

## 5. Microinteractions

### 5.1 Notification Toast  
- Enter: Slide-up (Y: 32px → 0px), scale punch `1 → 1.05 → 1`  
- Exit: Fade-out + shrink `scale 0.85 → 0`  

### 5.2 AR Allowed Feedback  
- Screen shimmer pulse  
- AR Object “Drop In” → fall, squash, bounce  
- Glow convergence on placement complete  

### 5.3 Guru Interactions  
- Voice Trigger: Expanding frequency pulse from mic icon  
- Guru Response: Avatar blink → speak mouth open sync + aura surge  
- Context Change: Shift aura color + shuffle accent animation (stars or vapor)

## 6. Modal / Sub-Island Behavior

### 6.1 Popup Expansion  
- Load: Scale `0.9 → 1.05 → 1.0`, fade from 0%, shadow bloom over base island  
- Close: Reverse with slide away directionally toward last origin

### 6.2 Dialog Flow (Steps / Wizards)  
- Step Change: Slide left or right panel-in with fade; bar animates progression  
- Voice Assist: Modal hovers beside mic trail

## 7. Loading Transitions

### 7.1 Global Load  
- Starfield background kicks in early  
- “Enter the Vibe” loading loop: Cosmic spiral, breathing orb pulse synced to background lo-fi beat (BPM 72–76)

### 7.2 Per-Island Preload  
- Loading ring resembles orbit trail  
- Guru floating nearby with breathing pose  
- Segment expand animation preps all placed containers

## 8. AR & VR Specifics

### 8.1 Object Placement  
- Drop in from above, bounce “tap” onto surface  
- White glow outline expands + fades in 1.4s

### 8.2 UI in AR  
- All menus orbit around core object, draggable via gesture or voice  
- Active selection: tint + ripple feedback, tracking stabilizer active

## 9. Motion Accessibility Modes

### 9.1 Reduced Motion  
- Disable floating idle loops  
- Replace animated transitions with `fade-in/fade-out` only (dur < 0.25s)  
- Deactivate bobbing, 3D tilt, parallax

### 9.2 High Contrast Motion  
- Overlay aura outlines on motion paths  
- Amplify glow trails, expand hover scaling margin

## 10. Haptic & Audio Synchrony Mapping

| Trigger Element              | Vibration Pattern        | Accompanying Audio |
|-----------------------------|--------------------------|---------------------|
| Add to Cart Snap            | 90ms tap + 60ms echo     | Pop + voice confirm |
| Island Entry                | 50ms warm pulse          | Ambient swell       |
| Voice Activation            | 120ms micro-pulse chain  | Mic bold ping       |
| Achievement XP Badge        | 3 x 40ms pulses          | Cash register ding  |
| Drag Component Snap         | Continuous buzz to release | Magnetic LF sound |

## 11. File Exports & Delivery

### 11.1 Animation Formats  
- Web animations: CSS3 Transforms + GSAP Trigger  
- Lottie: JSON, exported from AE Bodymovin pipeline (>limited usage)  
- Fallback GIF: 120px x 120px (less than 4s)  
- Scene fly-ins: GLTF-based Timeline Vertices

### 11.2 File Naming Convention  
`[module]_[element]_[action|state]_[duration].ext`

Example:

- `shop_card_hover_expand_05s.json`  
- `guru_avatar_lofi_pulse.glb`  
- `growroom_door_orbitfade_1s.mp4`

## 12. Animation Library Tools

- GSAP v3+  
- Framer Motion (React-based views)  
- Lottie (AE → JSON pipelines, micro-FX)  
- Three.js for orbiting container transitions  
- Web Animations API (manual trigger definition)

**End of Document**  
Filename: `GanjaGuru_motion_anim_spec_v1.0`  
Prepared for: UI/UX, Frontend, Motion Team, XR/AR Development


