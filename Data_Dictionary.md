# 📘 GanjaGuru Data Dictionary v1.0

## Purpose  
Define and catalog all core data objects, properties, types, relationships, validation rules, and storage schema across the GanjaGuru Gravity-Gone platform. This includes user data, content modules, transactional objects, media artifacts, and AI-specific entities.

## 1. ENTITY DEFINITIONS

Each entry includes:  
- **Entity Name**  
- **Type** (Primary | Join | System | Content | Temporary | Log)  
- **Attributes Table**  
- **Relationships**  
- **Validation Rules**  
- **Storage/Indexing Notes**

### 1.1 Entity: `UserProfile`  
**Type:** Primary  
Stores primary user identity, preferences, achievements, and settings.

| Field                  | Type          | Required | Description                               |
|------------------------|---------------|----------|-------------------------------------------|
| user_id               | UUID          | ✓        | Globally unique user identifier           |
| display_name          | String        | ✓        | Chosen public-facing name                 |
| email                 | String (email)| ✓        | Login credential                          |
| password_hash         | String        | ✓        | Hashed password (bcrypt)                  |
| phone_number          | String        | ✗        | Optional phone                            |
| role                  | Enum          | ✓        | user, admin, moderator                    |
| profile_avatar_url    | String (URI)  | ✗        | Custom avatar                             |
| region                | String        | ✓        | Geo ISO-3166 region code                  |
| language_pref         | String        | ✗        | e.g. ‘en’, ‘es’, ‘zh’                     |
| guru_persona_default  | Enum          | ✗        | Default chatbot persona                   |
| karma_points          | Number        | ✓        | Accrued XP                                |
| design_count          | Integer       | ✓        | # of saved product designs                |
| wallet_connected      | Boolean       | ✗        | Is a Web3 wallet linked?                  |
| created_at            | Datetime      | ✓        | Account creation timestamp                |
| updated_at            | Datetime      | ✓        | Last profile update                       |

**Relationships:**  
- hasMany → ProductOrders  
- hasOne → SubscriptionPlan  
- hasMany → SavedDesigns  
- hasMany → HelpTickets  
- hasMany → ARPlacementLogs

### 1.2 Entity: `Product`  
**Type:** Primary  
Lists all shop items, including cannabis and non-cannabis verticals.

| Field                | Type              | Required | Description                         |
|----------------------|-------------------|----------|-------------------------------------|
| product_id          | UUID              | ✓        | Unique product identifier           |
| name                | String            | ✓        | Product display name                |
| description         | Text              | ✓        | Full product description            |
| category            | Enum              | ✓        | flower, edible, gear, clothing      |
| price               | Decimal(10,2)     | ✓        | Retail price                        |
| discounted_price    | Decimal(10,2)     | ✗        | If on sale                          |
| thumbnail_url       | String (URI)      | ✓        | Small preview                       |
| full_view_ar_model  | String (URI)      | ✗        | glTF/GLB 3D model or AR trigger     |
| eco_certified       | Boolean           | ✓        | Passed sustainability flag          |
| thc_content         | String            | ✗        | e.g. “22%”                          |
| cbd_content         | String            | ✗        | e.g. “5%”                           |
| available_regions   | Array<String>     | ✓        | Regions where item is legal         |
| in_stock            | Boolean           | ✓        | Availability flag                   |
| vendor_id           | UUID              | ✓        | Linked supplier/vendor              |
| created_at          | Datetime          | ✓        | Item addition timestamp             |

**Relationships:**  
- belongsTo → Vendor  
- belongsToMany → UserFavorites  
- hasMany → ProductVariants  
- hasMany → ProductReview  
- hasMany → FulfillmentLog

### 1.3 Entity: `StrainCatalog`  
**Type:** Content  
Contains structured cannabis strain data with effects, lineage, and profiles.

| Field          | Type          | Required | Description                             |
|----------------|---------------|----------|-----------------------------------------|
| strain_id     | UUID          | ✓        | Unique identifier                       |
| name          | String        | ✓        | Strain name                             |
| genetics      | String        | ✗        | Sativa/Indica/Hybrid                    |
| terpene_map   | JSON          | ✗        | Key:terpene name, Value:percentage      |
| thc_range     | String        | ✗        | Common THC %, e.g. “18–24%”             |
| cbd_range     | String        | ✗        | Common CBD %, e.g. “0.5–1%”             |
| effects       | Array<String> | ✓        | Focus, Sleepy, Uplifted, Hungry, etc.   |
| medical_use   | Array<String> | ✓        | Anxiety, Pain, Insomnia, ADHD, etc.     |
| flavor_notes  | Array<String> | ✗        | Citrus, Diesel, Berry, Earthy           |
| lineage       | Array<String> | ✗        | “OG Kush” + “Sour Diesel”               |
| recommended_for | Array<String>| ✗      | Guru persona suggestions                |

**Relationships:**  
- referencedBy → Guru Recommendations  
- referencedIn → Shop Filters  
- linksTo → AI Personas module

### 1.4 Entity: `SavedDesign`  
**Type:** User-Generated Content  
User-submitted product designs and customization metadata.

| Field               | Type          | Required | Description                              |
|---------------------|---------------|----------|------------------------------------------|
| design_id          | UUID          | ✓        | Unique design ID                         |
| user_id            | UUID          | ✓        | Creator’s user ID                        |
| product_base       | String        | ✓        | Base type e.g. “bong”, “tray”            |
| components_used    | JSONArray     | ✓        | Modular components list (IDs)            |
| custom_texture_url | String (URI)  | ✗        | User-uploaded image/text graphics        |
| dimensions         | JSON          | ✓        | {height: x, width: y}                    |
| ar_preview_id      | UUID          | ✗        | Linked AR reference model                |
| is_ordered         | Boolean       | ✓        | Has user printed/purchased this design?  |
| created_at         | Datetime      | ✓        | Design creation timestamp                |

**Relationships:**  
- belongsTo → UserProfile  
- hasOne → ProductOrder (optional)  
- hasMany → CommunityVotes  

### 1.5 Entity: `VoiceCommandHistory`  
**Type:** Log  
Tracks all parsed voice inputs across sessions for analytics + AI fine-tuning.

| Field            | Type        | Required | Description                              |
|------------------|-------------|----------|------------------------------------------|
| command_id      | UUID        | ✓        | Unique ID                                |
| user_id         | UUID        | ✗        | Null if anonymous/pwa access             |
| raw_input       | String      | ✓        | Transcript text                          |
| interpreted_intent | String   | ✓        | Parsed intent                             |
| confidence_score| Float       | ✓        | Engine probability [0.00–1.00]           |
| timestamp       | Datetime    | ✓        | When command was issued                  |
| module_context  | String      | ✗        | StrainFinder, Shop, Learn, etc.          |
| persona_in_use  | String      | ✗        | Willie, Bruce, etc.                      |

**Relationships:**  
- belongsTo → AI Feedback Trainer Module  

## 2. TAXONOMIES

### 2.1 cannabis Shop Categories

| Category Name     | Code     |
|--------------------|----------|
| Flower             | CAT_FLW  |
| Edibles            | CAT_EDB  |
| Concentrates       | CAT_CNC  |
| Apparel            | CAT_APP  |
| Accessories        | CAT_ACC  |
| Art / Prints       | CAT_ART  |
| Grow Supplies      | CAT_GRS  |

### 2.2 Guru Personas

| Persona    | Code    | Traits                        |
|------------|---------|-------------------------------|
| Willie     | GG_WL   | Calm, Mellow, Plant Wisdom    |
| Snoop      | GG_SN   | Cool, Stylish, Blunt Humor    |
| Bruce      | GG_BL   | Disciplined, Minimal, Sharp   |
| Lennon     | GG_LN   | Dreamy, Thoughtful, Imaginative |
| 2Pac       | GG_TP   | Revolutionary, Direct, Streetwise |

## 3. ENUMERATIONS

### 3.1 User Roles  
`user`, `admin`, `moderator`, `vendor`, `guest`

### 3.2 Order Status  
`created`, `paid`, `shipped`, `delivered`, `cancelled`, `error`

### 3.3 Karma Award Type  
`login`, `design_submission`, `purchase`, `referral`, `quest_complete`

### 3.4 Product Format  
`physical`, `digital`, `ar_model`, `3d_print`, `bundle`

## 4. STORAGE OBJECT SCHEMA

### 4.1 Files and Blob Storage

| Container Name         | Type          | Description                            |
|------------------------|---------------|----------------------------------------|
| `/images/products/`    | WebP/JPEG     | Static product images                  |
| `/models/glb/`         | glTF/GLB      | 3D assets for AR                       |
| `/avatars/users/`      | PNG/SVG/JSON  | Profile & AI Avatar variants           |
| `/designs/project/`    | STL/JSON/glb  | User-generated prints                  |
| `/voice/histories/`    | Audio WAV     | Voice input snapshots for improvement  |

## 5. DATA FLOWS & VALIDATION

### 5.1 Account Creation Flow  
- Validate email → send confirmation  
- Region gate check → load location-specific ToS  
- Confirm mobile (optional) → set workspace defaults  
- Preload available AI persona modules

### 5.2 Order Validation  
- Enforce stock check + region legality before payment  
- Cross-reference eco-rating if eco filter is active  
- Validate dropship route + ETA API prior to submit

### 5.3 Guru Interaction Flow  
- Parse input → Match to intent → Trigger island or content  
- Log result → score feedback if user rates → AI feedback trainer updates intent schema

## 6. INDEXING & PERFORMANCE

| Table/Collection | Indexed Fields                            |
|------------------|-------------------------------------------|
| UserProfile      | user_id, email, region, role              |
| Product          | product_id, category, price, in_stock     |
| Order            | order_id, user_id, status                 |
| VoiceCommand     | command_id, module_context, timestamp     |
| StrainCatalog    | name, genetics, effects, terpene_map      |

## 7. COMPLIANCE & PRIVACY FLAGS

| Field                   | Compliance Tag    | Notes                           |
|--------------------------|-------------------|----------------------------------|
| email                   | GDPR, CCPA         | Optional deletion on request    |
| phone_number            | Optional Consent   | Secure and tokenized            |
| command_history.*       | Usage Analytics    | Anonymized if user is not login |
| order.payment_method_id | PCI DSS            | Stored via token gateway        |
| strain.medical_use      | HIPAA-Aware        | Display only, not user-specific |

## 8. ANALYTICS MODEL FIELDS

| Metric                    | Type     | Source Entity      |
|---------------------------|----------|--------------------|
| Time_On_Island            | Seconds  | SessionEventLog    |
| Design_Submissions        | Count    | SavedDesign        |
| Cart_Abandonment_Rate     | %        | Cart + CheckoutLog |
| Most_Queried Strains      | String[] | VoiceCommandHistory|
| Peak_Guru_Persona_Usage   | Enum     | GuruChatSessions   |

**End of Document**  
GanjaGuru Data Dictionary v1.0  
Schema ID: `gg-cms-datadict-v1-core`


## 9. AUDIT & LOGGING MODELS

Establishes data structures for critical system events and user activity auditing.

### 9.1 Entity: `AuditEvent`

| Field             | Type        | Required | Description                             |
|-------------------|-------------|----------|-----------------------------------------|
| event_id          | UUID        | ✓        | Unique log identifier                   |
| user_id           | UUID        | ✗        | Null if anonymous                       |
| event_type        | Enum        | ✓        | login, logout, error, data_change       |
| module            | String      | ✗        | Triggering part of app (e.g., Shop)     |
| source_ip         | String      | ✗        | IPv4/IPv6 address                       |
| user_agent        | String      | ✗        | Browser/device string                   |
| event_data        | JSON        | ✗        | Payload or metadata snapshot            |
| created_at        | Datetime    | ✓        | Time of occurrence                      |

## 10. SESSION & PRESENCE TRACKING

Stores current and past user interaction sessions.

### 10.1 Entity: `UserSessionLog`

| Field           | Type       | Required | Description                               |
|-----------------|------------|----------|-------------------------------------------|
| session_id      | UUID       | ✓        | Unique session identifier                 |
| user_id         | UUID       | ✗        | If known                                  |
| start_time      | Datetime   | ✓        | Start of session                          |
| end_time        | Datetime   | ✗        | Session closed                            |
| device_type     | Enum       | ✓        | desktop, mobile, VR, other                |
| geo_location    | String     | ✗        | Geo-IP region string                      |
| time_on_platform| Integer    | ✗        | Auto-generated duration (seconds)         |

## 11. COMMUNITY & SOCIAL ENTITIES

Necessary to support forums, messaging, reactions, and gamification.

### 11.1 Entity: `ForumThread`

| Field             | Type       | Required | Description                          |
|-------------------|------------|----------|--------------------------------------|
| thread_id         | UUID       | ✓        |                                     |
| user_id           | UUID       | ✓        | Thread creator                       |
| title             | String     | ✓        | Thread title                         |
| content           | Text       | ✓        | Opening post content                 |
| tags              | Array<String> | ✗     | Optional labels                      |
| is_pinned         | Boolean    | ✓        | Priority flag                        |
| created_at        | Datetime   | ✓        | Timestamp                            |

### 11.2 Entity: `CommunityVote`

| Field             | Type       | Required | Description                          |
|-------------------|------------|----------|--------------------------------------|
| vote_id           | UUID       | ✓        |                                     |
| user_id           | UUID       | ✓        | Who voted                            |
| vote_target_type  | Enum       | ✓        | post, design, comment                |
| vote_target_id    | UUID       | ✓        | Target's ID                          |
| vote_type         | Enum       | ✓        | up, down                             |
| created_at        | Datetime   | ✓        | Vote time                            |

## 12. NFT & TOKEN MODEL (for Token Layer compatibility)

If implementing optional Web3 features.

### 12.1 Entity: `TokenProfile`

| Field             | Type         | Required | Description                        |
|-------------------|--------------|----------|------------------------------------|
| token_id          | UUID         | ✓        | On-chain/off-chain ID              |
| owner_wallet      | Address      | ✓        | User-linked Web3 wallet addr       |
| metadata_uri      | String (URI) | ✓        | IPFS/Arweave NFT metadata          |
| token_type        | Enum         | ✓        | points, proof, access, reward      |
| status            | Enum         | ✓        | minted, burned, active, revoked    |
| created_at        | Datetime     | ✓        | Time of mint                       |

## 13. CANNABIS-SPECIFIC REGULATORY MODEL

Helps enforce state/country-specific compliance and visibility within the data schema.

### 13.1 Entity: `LegalRegionRule`

| Field             | Type           | Required | Description                          |
|-------------------|----------------|----------|--------------------------------------|
| jurisdiction_id   | UUID           | ✓        | Unique legislative block             |
| region_code       | String (ISO)   | ✓        | e.g., US-CA                          |
| allowed_categories| Array<Enum>    | ✓        | flower, edible, grow gear, etc.      |
| min_age           | Integer        | ✓        | Legal minimum age to access          |
| ai_restrictions   | Boolean        | ✗        | Restrict LLM strain recommendations  |
| ar_content_banned | Boolean        | ✗        | Hide AR visualizations in this region|
| delivery_legal    | Boolean        | ✓        | Is home delivery allowed             |

## 14. SCHEMA VERSIONING & MIGRATION

Ensure version control and backward compatibility for schema migrations.

### 14.1 Entity: `SchemaVersionLog`

| Field           | Type       | Required | Description                         |
|-----------------|------------|----------|-------------------------------------|
| version_id      | String     | ✓        | X.Y.Z format                        |
| released_on     | Datetime   | ✓        | Migration apply time                |
| description     | Text       | ✓        | Notes about structural changes      |
| affected_tables | Array      | ✗       | Product, Design, Order, etc.        |
| migration_file  | String     | ✗        | Reference to the migration script   |

## 15. SEARCH & INDEXING STRUCTURE (Optional for full-text + AI)

For multi-entity search and LLM retrieval-augmented modules.

### 15.1 Entity: `SearchIndexMap`

| Field           | Type       | Required | Description                            |
|-----------------|------------|----------|----------------------------------------|
| term_id         | UUID       | ✓        | Unique hash of term                    |
| term            | String     | ✓        | Tokenized keyword                      |
| type            | Enum       | ✓        | strain, product, article, faq          |
| source_id       | UUID       | ✓        | Entity ID reference                    |
| ranking_score   | Float      | ✓        | TF-IDF or ML-driven ranking            |
| language        | String     | ✗        | i18n compatibility                      
|-----------------|------------|----------|-----------------------------------------|
| English         | Hello      | ✓        | Fully supported                         |
| Spanish         | Hola       | ✓        | Fully supported                         |
| French          | Bonjour    | ✓        | Fully supported                         |
| German          | Hallo      | ✓        | Fully supported                         |
| Chinese         | 你好       | ✓        | Fully supported                         |
| Japanese        | こんにちは | ✓        | Fully supported                         |
| Russian         | Привет     | ✓        | Fully supported                         |
| Arabic          | مرحبا      | ✓        | Fully supported                         |
| Hindi           | नमस्ते     | ✓        | Fully supported                         |
| Portuguese      | Olá        | ✓        | Fully supported                         |
