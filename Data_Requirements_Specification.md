```markdown
# 📄 GanjaGuru Data Requirements Specification (DRS)

## Document ID  
`gg-datareqspec-v1.0`

## Project Name  
GanjaGuru: Gravity-Gone Cannabis Metaverse

## Purpose  
To formally define all required data inputs, outputs, structures, flows, ownership, validation, dependencies, and retention logic for GanjaGuru platform components that interface with business, AI, voice, commerce, AR, and personalization systems.

---

## 1. DATA OVERVIEW

### 1.1 Scope of Data
- User Identity & Preferences
- Product & Strain Catalog
- Behavioral Analytics
- AR/3D Model Metadata
- Voice Interaction Logs
- Design & 3DPoD Objects
- Orders & Fulfillment Records
- IoT Grow Room Readings
- Subscription Tiers & Payments
- Legal Compliance Domains

### 1.2 Source Types
- User-Generated Data
- External APIs (Cannabis Databases, Fulfillment Networks)
- Platform-Generated Events
- 3D/AR Asset Stores
- System Configuration Objects
- Blockchain Metadata (Optional)

---

## 2. DATA ENTITIES REQUIREMENT MATRIX

### 2.1 UserProfile

| Attribute            | Type        | Source       | Required | Validation                 | Notes                                |
|----------------------|-------------|--------------|----------|----------------------------|--------------------------------------|
| user_id             | UUID        | System       | Yes      | UUIDv4                     | Unique global ID                     |
| email               | String      | User         | Yes      | Format, Uniqueness         | Verified via OTP                     |
| display_name        | String      | User         | Yes      | 3–20 chars, profanity safe | Unique                |
| region              | String      | GeoAPI       | Yes      | ISO-3166 country/state     | Used for compliance gating           |
| guru_persona_default| Enum        | User         | No       | match [GuruPersona]        | Optional chat profile default        |

### 2.2 Product

| Attribute         | Type      | Source        | Required | Validation               | Notes                                |
|-------------------|-----------|---------------|----------|--------------------------|--------------------------------------|
| product_id        | UUID      | System        | Yes      | Unique, indexed          | Catalog primary key                  |
| name              | String    | Vendor        | Yes      | ≥ 3 characters           | Display name                         |
| price             | Decimal   | Vendor        | Yes      | ≥ 0                      | In selected currency                 |
| category          | Enum      | CMS           | Yes      | From [CategoryTaxonomy]  |                                     |
| strain_linked     | UUID      | StrainCatalog | No       | FK constraint            | Optional strain mapping              |

### 2.3 Order

| Attribute           | Type       | Source        | Required | Validation             | Notes                        |
|---------------------|------------|---------------|----------|------------------------|------------------------------|
| order_id            | UUID       | System        | Yes      | Unique, autonumber     | Order root key              |
| user_id             | UUID       | UserProfile   | Yes      | FK                     | Buyer ID                    |
| order_items         | JSON[]     | Cart Object   | Yes      | ≥ 1                    | Product ID, quantity pairs  |
| payment_processed   | Boolean    | Payment API   | Yes      | True if confirmed      | Stripe/Wallet API returns   |
| status              | Enum       | Backend       | Yes      | `created`→`fulfilled`  | Lifecycle trace             |

### 2.4 Strain

| Attribute         | Type     | Source      | Required | Validation           | Notes                          |
|-------------------|----------|-------------|----------|----------------------|--------------------------------|
| strain_id         | UUID     | External/Mod| Yes      | Indexed FK           | Used in recs/chat              |
| name              | String   | Source API  | Yes      | ≥ 2 chars            | Display name                   |
| genetics          | Enum     | Source API  | Yes      | Indica/Sativa/Hybrid| Used in filters                |
| effects           | String[] | CMS         | Yes      | Non-empty            | Used in onboarding/training    |

### 2.5 VoiceCommandHistory

| Attribute           | Type     | Source     | Required | Validation              | Notes                          |
|---------------------|----------|------------|----------|-------------------------|--------------------------------|
| command_id          | UUID     | AppClient  | Yes      | UUIDv4                  | Event hash                     |
| user_id             | UUID     | AppClient  | No       | Nullable                 | Anonymous allowed              |
| raw_input           | String   | Stt Engine | Yes      | ≤ 300 char              | Transcript                     |
| interpreted_intent  | String   | NLP Engine | Yes      | ISO intent map          | Classification result          |
| confidence_score    | Float    | NLP Engine | Yes      | 0.0–1.0                 | Trigger for fallback handling  |

---

## 3. DATA FIELD DEFINITIONS

### 3.1 Common Data Types

| Type          | Format/Note                    |
|---------------|--------------------------------|
| UUID          | RFC4122-compliant              |
| Datetime      | ISO 8601 UTC (e.g. 2025-08-07T04:45:00Z) |
| Email         | RFC 5322 regex  
| Enum          | Validated against taxonomy list|
| Decimal       | Float with 2 precision digits  |
| Text          | Any string ≤ 5000 chars        |
| JSON Object   | Nested key:value validated     |
| JSON Array    | One-dimensional                 |

---

## 4. DATA SOURCES

| Source Name        | Type         | Authenticated | Data Flow Direction | Description                                   |
|--------------------|--------------|---------------|----------------------|-----------------------------------------------|
| GanjaGuru CMS      | Internal API | Yes           | Write/Read           | Platform control of product/strain data       |
| Strainbase API     | Public API   | No            | Read-only            | Source of verified cannabis strain metadata   |
| Voice STT Layer    | Client API   | No            | Client → Engine      | Whisper / Coqui-powered speech recognition    |
| Dropship Partner   | External API | Yes           | Write                | Vendor product sync + inventory procurement   |
| User Devices       | Client Side  | Yes           | Input & Sensor Sync  | Location, AR, sensor, haptics, voice/gesture  |

---

## 5. DATA TRANSFORMATION LOGIC

### 5.1 Voice-to-Intent

| Step | Input Field        | Output Field         | Description                                      |
|------|--------------------|----------------------|--------------------------------------------------|
| 1    | raw_audio          | raw_input            | Transcribed using speech engine                 |
| 2    | raw_input          | interpreted_intent   | Parsed intent label using NLP pipeline          |
| 3    | interpreted_intent | matched_handler_call | Routed to internal module / overlay action      |

### 5.2 Product AR Execution

| Step | Trigger Source | Transformation Target | Description                         |
|------|----------------|-----------------------|-------------------------------------|
| Tap  | product_id     | AR model query        | Fetch .glb asset                    |
| AR   | model_uri      | AR overlay container  | Applied to physical surface mapper |

---

## 6. DATA VOLUME ESTIMATES

| Entity Name      | Daily Inserts (Est) | Total (Year 1) | Notes                             |
|------------------|---------------------|----------------|-----------------------------------|
| UserProfile      | 2,000               | ~700,000       | Includes registered + guest cache |
| ProductOrder     | 5,000               | 1.6M+          | Includes cart → order pipeline    |
| VoiceCommand     | 110,000             | 40M+           | Average 4/day/user during session |
| Design           | 15,000              | 5M             | AR/3DPoD saved configurations     |

---

## 7. DATA RETENTION & CLEANUP

### 7.1 Timelines

| Data Category       | Retention Period     | Deletion Type        |
|---------------------|----------------------|----------------------|
| VoiceCommandHistory | 180 days             | Soft delete/anonymize|
| SavedDesign         | Permanent (unless removed by user) | User-controlled |
| Order Logs          | 7 years              | Legal record (hard)  |
| Audit Events        | 24 months            | Archival             |

### 7.2 Logging Security

- All access logged (device + IP)
- Pseudonymization on PII fallback tables
- Tamper-proof AuditLog structure  

---

## 8. OWNERSHIP & ACCESS CONTROL

| Entity              | Owner Role         | Editable By             | Readable By             |
|---------------------|--------------------|--------------------------|--------------------------|
| UserProfile         | user               | user, admin              | system, user             |
| Product             | vendor, admin      | CMS admin, vendor self   | all users                |
| VoiceCommandHistory | system             | voice_engine             | AI team, anonymized read |
| Orders              | user               | user, fulfillment admin  | payment system, user     |
| LegalRules          | compliance team    | legal staff              | all systems              |

---

## 9. DATA VALIDATION RULES

### 9.1 API Schemas

- Enforced via OpenAPI 3.1 spec
- Type validation on every submitted field
- Range tests on decimals
- Regex test for email/enum fields

### 9.2 Frontend Forms

- Client-side JSON schema validation (AJV)
- Real-time informative error messages
- Region-aware checks on strain/product visibility

---

## 10. COMPLIANCE MAPPINGS

| Data Element             | Regulatory Scope         | Handling                            |
|--------------------------|--------------------------|-------------------------------------|
| Email, Phone             | GDPR + CCPA              | Encrypted at REST, deletable        |
| Payment Data             | PCI-DSS Level 1          | Tokenized via Stripe or equivalent  |
| Medical Use Strings      | HIPAA-Adjacent           | Unlinked from personal identities   |
| Voice Recordings         | Custom T&C Consent       | Optional logging; user-deletable    |
| Regional Access Logs     | Legal Audit Trail        | Secure, expirable via jurisdiction  |

---

## 11. DATA DELIVERY & IMPORT FORMATS

| Module                     | Format            | Direction | Purpose                            |
|----------------------------|-------------------|-----------|------------------------------------|
| Product Catalog Import     | CSV / XLSX        | Import    | Vendor product onboarding          |
| SavedDesign Export         | JSON / STL / .glb | Export    | Share or 3DPoD printout            |
| Strain Directory Sync      | JSON API          | Import    | Scheduled external updates         |
| Voice Command Archive      | CSV / JSONL       | Export    | Logs for training or audit         |

---

## 12. APPENDICES

### 12.1 Reference Taxonomy Endpoints
- `/taxonomies/guru-personas`
- `/taxonomies/strain-effects`
- `/taxonomies/shop-categories`

### 12.2 Public-Facing Data Dictionaries  
- `/docs/datadict/v1.json`  
- `/openapi/ganjaguru.yaml`

---

**End of Document**  
Document Version: 1.0  
Prepared for: Engineering · Data · Compliance · AI Systems · DevOps  
File ID: `gg-datareqspec-v1.0`
