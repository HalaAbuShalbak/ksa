# E-Commerce Platform - Landing Page & Dashboard

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Quick Start Guide](#quick-start-guide)
- [Project Structure](#project-structure)
- [Main Pages & Elements](#main-pages--elements)
- [For Backend Developers](#for-backend-developers)
- [For Frontend Developers](#for-frontend-developers)
- [For Content Editors & Data Entry](#for-content-editors--data-entry)
- [Technologies Used](#technologies-used)
- [Color Palette & Design System](#color-palette--design-system)

---

## 🎯 Project Overview

This is a comprehensive e-commerce platform landing page and dashboard system built with HTML, CSS, JavaScript, and Tailwind CSS. The platform showcases an integrated e-commerce solution that includes:

- **E-Store Creation & Management**: Professional, customizable online stores
- **Order & Sales Management**: Centralized dashboard for orders and sales
- **Payment & Shipping Integration**: Multiple payment gateways and shipping companies
- **Marketing & Automation Tools**: Discounts, coupons, loyalty programs
- **Digital Menu System**: Interactive QR-based menus for restaurants/cafes
- **Multi-platform UI/UX**: Responsive design supporting multiple languages

### Key Features
- ✅ Fully responsive (mobile-first design)
- ✅ RTL (Right-to-Left) support for Arabic content
- ✅ Dynamic content management via `content.js`
- ✅ Interactive animations and micro-interactions
- ✅ Modern glassmorphism and gradient effects
- ✅ Burger menu for mobile/tablet navigation
- ✅ Support modal with form submission
- ✅ Signup modal with plan selection
- ✅ Dashboard for ad management

---

## 🚀 Quick Start Guide

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)
- Text editor or IDE (VS Code recommended)

### Running the Project

#### Option 1: Direct File Opening
Simply open `index.html` in your web browser. Note: Some features may require a local server.

#### Option 2: Local Development Server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

### File Structure
```
KSA/
├── index.html          # Main landing page
├── signin.html         # Sign in page
├── signup.html         # Sign up page
├── dashboard.html      # User dashboard
├── header.html         # Standalone hero section
├── content.js          # Content data file
├── main.js             # Main JavaScript logic
```

---

## 📁 Project Structure

### Core Files

#### `index.html`
The main landing page containing:
- Header with navigation (desktop + mobile burger menu)
- Hero section with animated blobs and circular feature window
- Features section
- How It Works section
- Pricing section
- FAQ section
- CTA banner
- Footer
- Support modal
- Signup modal

#### `signin.html`
User authentication page with:
- Sign in form (mobile/email + password)
- Password visibility toggle
- Remember me checkbox
- Forgot password link
- Form validation
- API integration ready

#### `signup.html`
User registration page with:
- Sign up form (full name, service name, email, mobile, service type)
- Form validation
- Real-time email/mobile validation
- API integration ready

#### `dashboard.html`
User dashboard containing:
- Sidebar navigation (responsive)
- Subscription details section
- Ads management grid
- Plans selection section
- Ad detail modal
- Payment methods modal
- Add new ad modal
- Pagination system

#### `content.js`
Centralized content management file containing:
- Hero section content
- Features list
- How It Works steps
- Pricing plans
- FAQ items
- CTA banner content
- Footer content
- Support modal content

#### `main.js`
Main JavaScript file handling:
- Mobile menu toggle
- Content population from `content.js`
- Scroll animations (Intersection Observer)
- FAQ accordion functionality
- Modal interactions
- Form submissions
- Plan selection

#### `header.html`
Standalone hero section file that can be included in other pages.

---

## 🎨 Main Pages & Elements

### 1. Landing Page (`index.html`)

#### Header Section
- **Location**: Top of page, sticky
- **Desktop**: Horizontal navigation with logo, nav links, and CTA buttons
- **Mobile/Tablet**: Burger menu button that toggles dropdown menu
- **Features**: 
  - Smooth scroll to sections
  - Active state management
  - Responsive breakpoints at 768px (md)

#### Hero Section
- **Purpose**: Primary value proposition and visual showcase
- **Elements**:
  - Main headline (mono color)
  - Subheadline
  - Two CTA buttons (Primary: "ابدأ الآن", Secondary: "شاهد كيف يعمل")
  - Statistics cards (3 cards: 1000+ clients, 50K+ orders, 99.9% uptime)
  - Circular window with rotating feature cards (6 cards)
  - Animated blurred blobs background (9 blobs)
- **Animations**: Fade-in-up, blob floating, card rotation
- **Responsive**: Text-first on mobile, window below

#### Features Section
- **ID**: `#features`
- **Content Source**: `content.js` → `features` array
- **Layout**: 3-column grid (1 col mobile, 2 cols tablet, 3 cols desktop)
- **Elements**: 6 feature cards with titles and descriptions

#### How It Works Section
- **ID**: `#how-it-works`
- **Content Source**: `content.js` → `howItWorks` array
- **Layout**: 4-step process with icons
- **Elements**: Step cards with numbers, titles, and descriptions

#### Pricing Section
- **ID**: `#pricing`
- **Content Source**: `content.js` → `pricing` array
- **Layout**: 3 pricing plan cards
- **Features**: Highlighted plan, feature lists, CTA buttons
- **Interaction**: Opens signup modal with selected plan

#### FAQ Section
- **ID**: `#faq`
- **Content Source**: `content.js` → `faq` array
- **Layout**: Accordion-style expandable items
- **Interaction**: Click to expand/collapse answers

#### CTA Banner
- **Purpose**: Final call-to-action before footer
- **Content Source**: `content.js` → `ctaBanner` object
- **Elements**: Title, subtitle, button

#### Footer
- **Content Source**: `content.js` → `footer` object
- **Sections**: Logo/copyright, quick links, social media
- **Layout**: 3-column grid (responsive)

#### Support Modal
- **Trigger**: Floating button (bottom-right)
- **Features**: Contact form, social links, illustration
- **Content Source**: `content.js` → `supportModal` object

#### Signup Modal
- **Trigger**: "اختر الباقة" buttons in pricing section
- **Features**: Form with plan pre-selection
- **Fields**: Full name, service name, email, mobile, service type

### 2. Sign In Page (`signin.html`)

#### Main Elements
- **Form Fields**:
  - Identifier (mobile number or email)
  - Password (with visibility toggle)
  - Remember me checkbox
  - Forgot password link
- **Validation**: Client-side validation before API call
- **API Endpoint**: `API_ENDPOINT` variable (line 341)
- **Success Flow**: Stores token → Redirects to `index.html`

### 3. Sign Up Page (`signup.html`)

#### Main Elements
- **Form Fields**:
  - Full name
  - Service name
  - Email (with real-time validation)
  - Mobile number (with pattern validation: 05XXXXXXXX)
  - Service type (dropdown)
- **Validation**: Real-time email/mobile validation
- **API Endpoint**: `API_ENDPOINT` variable (line 336)

### 4. Dashboard (`dashboard.html`)

#### Sidebar Navigation
- **Desktop**: Always visible on left (RTL: right)
- **Mobile**: Hidden by default, slides in from right on burger click
- **Sections**: My Ads, Plans, Add New Ad

#### Main Content Areas
- **Subscription Details**: Start date, end date, subscription type
- **Ads Grid**: Paginated grid of ad cards (6 per page)
- **Plans Section**: 3 subscription plans with payment integration

#### Modals
- **Ad Detail Modal**: Shows full ad information
- **Payment Modal**: Payment method selection
- **Add Ad Modal**: Form to create new ads

---

## 👨‍💻 For Backend Developers

### API Integration Points

#### 1. Sign In API (`signin.html`)

**Endpoint**: `API_ENDPOINT` (currently: `https://your-api-endpoint.com/api/signin`)

**Request**:
```javascript
POST /api/signin
Content-Type: application/json

{
  "identifier": "user@example.com" | "05XXXXXXXX",
  "password": "password123",
  "rememberMe": true
}
```

**Expected Response**:
```javascript
{
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "name": "User Name",
    "email": "user@example.com"
  }
}
```

**Error Handling**:
- `401`: Invalid credentials → Show: "رقم الجوال/البريد الإلكتروني أو كلمة المرور غير صحيحة"
- `404`: Account not found → Show: "الحساب غير موجود"
- `403`: Account disabled → Show: "تم تعطيل حسابك"
- `0`: Network error → Show: "لا يمكن الاتصال بالخادم"

**Local Storage**:
- `authToken`: JWT token
- `userData`: User object (JSON stringified)
- `rememberMe`: "true" if checked

---

#### 2. Sign Up API (`signup.html`)

**Endpoint**: `API_ENDPOINT` (currently: `https://your-api-endpoint.com/api/signup`)

**Request**:
```javascript
POST /api/signup
Content-Type: application/json

{
  "fullName": "اسم المستخدم",
  "serviceName": "اسم الخدمة",
  "email": "user@example.com",
  "mobileNumber": "05XXXXXXXX",
  "serviceType": "restaurant" | "cafe" | "bakery" | "fast-food" | "other"
}
```

**Expected Response**:
```javascript
{
  "success": true,
  "message": "تم إنشاء الحساب بنجاح",
  "user": { ... }
}
```

**Error Handling**:
- `400`: Invalid data → Show: "البيانات المدخلة غير صحيحة"
- `409`: Account exists → Show: "هذا الحساب موجود بالفعل"
- `0`: Network error → Show: "لا يمكن الاتصال بالخادم"

---

#### 3. Dashboard APIs (`dashboard.html`)

**Configuration**: Lines 913-914
```javascript
const API_BASE = '/api';
const API_ADS = `${API_BASE}/ads`;
```

##### 3.1. Get Subscription Data
**Endpoint**: `GET /api/subscription`

**Expected Response**:
```javascript
{
  "data": {
    "startDate": "2024-01-15",
    "endDate": "2024-12-31",
    "type": "بريميوم"
  }
}
```

**Fallback**: Uses placeholder data if API fails

---

##### 3.2. Get Ads List
**Endpoint**: `GET /api/ads`

**Expected Response**:
```javascript
{
  "data": [
    {
      "id": 1,
      "name": "اسم الإعلان",
      "title": "عنوان الإعلان",
      "image": "url_to_image",
      "asset": "url_to_asset",
      "description": "وصف الإعلان",
      "price": "100.00",
      "discount": 10,
      "discountStartDate": "2024-01-01",
      "discountEndDate": "2024-12-31",
      "expirationDate": "2024-12-31",
      "status": "نشط",
      "created": "2024-01-01",
      "coupons": [
        {
          "code": "DISCOUNT10",
          "discount": 10,
          "expirationDate": "2024-12-31"
        }
      ]
    }
  ]
}
```

**Alternative Response Format** (also supported):
```javascript
[
  { "id": 1, "name": "...", ... },
  { "id": 2, "name": "...", ... }
]
```

**Pagination**: Handled client-side (6 items per page)

---

##### 3.3. Get Single Ad Details
**Endpoint**: `GET /api/ads/{id}`

**Expected Response**:
```javascript
{
  "data": {
    "id": 1,
    "name": "اسم الإعلان",
    "title": "عنوان الإعلان",
    "image": "url_to_image",
    "description": "وصف كامل",
    "price": "100.00",
    "discount": 10,
    "discountStartDate": "2024-01-01",
    "discountEndDate": "2024-12-31",
    "expirationDate": "2024-12-31",
    "status": "نشط",
    "created": "2024-01-01",
    "coupons": [ ... ]
  }
}
```

---

##### 3.4. Create New Ad
**Endpoint**: `POST /api/ads`

**Request**: `FormData` (multipart/form-data)
```javascript
{
  "title": "عنوان الإعلان",
  "description": "وصف الإعلان",
  "asset": File, // Image file
  "price": "100.00",
  "discount": "10",
  "discountStartDate": "2024-01-01",
  "discountEndDate": "2024-12-31",
  "expirationDate": "2024-12-31",
  "coupons": "[{\"code\":\"CODE10\",\"discount\":10,\"expirationDate\":\"2024-12-31\"}]"
}
```

**Expected Response**:
```javascript
{
  "success": true,
  "message": "تم إضافة الإعلان بنجاح",
  "data": { "id": 1, ... }
}
```

---

##### 3.5. Process Payment
**Endpoint**: `POST /api/payment/process` (TODO - not yet implemented)

**Expected Request**:
```javascript
{
  "plan": "نصف سنوي",
  "price": "499",
  "method": "mada" | "visa" | "mastercard" | "stc-pay" | "apple-pay" | "tamara"
}
```

**Expected Response**:
```javascript
{
  "paymentUrl": "https://payment-gateway.com/checkout/...",
  "transactionId": "txn_123456"
}
```

---

### Data Format Requirements

#### Date Format
- **Input**: ISO 8601 format (`YYYY-MM-DD` or `YYYY-MM-DDTHH:mm:ssZ`)
- **Display**: Arabic format (`DD Month YYYY`)

#### Price Format
- **Storage**: String or number (e.g., `"100.00"` or `100.00`)
- **Display**: `"100.00 ر.س"` (with 2 decimal places)

#### Mobile Number Format
- **Pattern**: `05XXXXXXXX` (10 digits starting with 05)
- **Validation**: Regex: `/^05\d{8}$/`

#### Email Format
- **Validation**: Standard email regex
- **Pattern**: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

---

### Authentication

#### Token Storage
- **Location**: `localStorage.getItem('authToken')`
- **Usage**: Include in API requests as `Authorization: Bearer {token}`

#### Protected Routes
- **Dashboard**: Check for `authToken` on page load
- **Redirect**: If no token, redirect to `signin.html`

---

### CORS Configuration

If your API is on a different domain, ensure CORS headers:
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

---

## 🎨 For Frontend Developers

### Technology Stack

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (CDN)
- **JavaScript (ES6+)**: Modern JavaScript
- **jQuery 3.7.1**: DOM manipulation and AJAX
- **Font Awesome 6.5.1**: Icons
- **Google Fonts**: Cairo (headings) & Tajawal (body)

---

### Color Palette

Defined in Tailwind config (all HTML files):
```javascript
colors: {
  primary: "#FF8059",      // Orange - Main CTA, highlights
  secondary: "#5FD2BB",    // Teal - Secondary elements, glass effects
  accent: "#FFCA3A",       // Yellow - Accents, badges
  background: "#F7F9FA",   // Light gray - Page background
  contrast: "#22242A",     // Dark gray - Text, borders
  card: "#FFFFFF",         // White - Card backgrounds
  border: "#E0E3EB",       // Light gray - Borders
  muted: "#B0B2B8",        // Gray - Muted text
}
```

---

### Typography

- **Headings**: `font-cairo` (Cairo, bold 700-900)
- **Body Text**: `font-tajawal` (Tajawal, regular 400-600)
- **Direction**: RTL (Right-to-Left) for Arabic

---

### Responsive Breakpoints

Tailwind default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

**Mobile Menu**: Shows on screens < 768px (md breakpoint)

---

### Key CSS Classes & Utilities

#### Custom Animations
- `.animate-fade-in-up`: Fade in from bottom
- `.animate-blob-float`: Floating blob animation
- `.animate-pop-up`: Scale and fade in
- `.animate-on-scroll`: Triggered by Intersection Observer

#### Custom Components
- `.btn`: Base button style
- `.btn-primary`: Primary button (orange)
- `.btn-secondary`: Secondary button (outlined)
- `.form-input`: Form input styling
- `.form-label`: Form label styling

---

### JavaScript Architecture

#### Main Functions (`main.js`)

1. **Mobile Menu Toggle**
   - Toggles `hidden` class on `#mobile-menu`
   - Auto-closes on link click

2. **Content Population**
   - Reads from `content.js`
   - Dynamically injects content into DOM
   - Handles: hero, features, howItWorks, pricing, FAQ, footer, support modal

3. **Scroll Animations**
   - Uses Intersection Observer API
   - Triggers `.animate-on-scroll` class
   - Threshold: 10% visibility

4. **FAQ Accordion**
   - Toggle expand/collapse
   - Smooth slide animation
   - Icon rotation on expand

5. **Modal Management**
   - Open/close animations
   - Overlay click to close
   - Escape key to close
   - Body scroll prevention

6. **Form Handling**
   - Client-side validation
   - Error message display
   - Loading states
   - Success/error feedback

---

### Hero Section Special Features

#### Circular Window Card Rotation
- **Location**: Hero section right column
- **Function**: Rotates through 6 feature cards
- **Interval**: 3 seconds per card
- **Animation**: Fade + scale transition
- **JavaScript**: Lines 1771-1803 in `index.html`

#### Blob Background Animation
- **Count**: 9 animated blobs
- **Animation**: `blob-float` keyframe (20s infinite)
- **Parallax**: Scroll-based parallax effect
- **JavaScript**: Lines 1805-1819 in `index.html`

---

### Dashboard JavaScript (`dashboard.html`)

#### Key Functions

1. **`initializeDashboard()`**
   - Loads subscription data
   - Loads ads list
   - Syncs usernames

2. **`loadAds()`**
   - Fetches from `GET /api/ads`
   - Falls back to placeholder data
   - Renders paginated grid

3. **`renderAds(ads)`**
   - Creates ad cards
   - Handles pagination (6 per page)
   - Attaches click handlers

4. **`openAdModal(adId)`**
   - Fetches ad details
   - Populates modal
   - Handles image errors

5. **`openPaymentModal(planName, planPrice)`**
   - Shows payment methods
   - Handles selection
   - Processes payment

6. **`submitAdForm()`**
   - Collects form data
   - Handles file upload
   - Submits to API

---

### Customization Guide

#### Changing Colors
Edit Tailwind config in `<script>` tag (all HTML files):
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#YOUR_COLOR",
        // ...
      }
    }
  }
}
```

#### Adding New Sections
1. Add HTML structure in `index.html`
2. Add content object in `content.js`
3. Add population logic in `main.js`
4. Add scroll animation trigger

#### Modifying Animations
Edit CSS in `<style>` section:
- Keyframes: `@keyframes animation-name`
- Classes: `.animate-animation-name`

---

### Performance Optimization

#### Images
- Use optimized images (WebP recommended)
- Lazy loading for below-fold images
- Responsive images with `srcset`

#### JavaScript
- jQuery loaded from CDN (cached)
- Content loaded asynchronously
- Intersection Observer for scroll animations (efficient)

#### CSS
- Tailwind CDN (purged in production)
- Minimal custom CSS
- Hardware-accelerated animations (`transform`, `opacity`)

---

## 📝 For Content Editors & Data Entry

### Content Management File: `content.js`

All editable content is centralized in `content.js`. **Never edit HTML directly for content changes.**

---

### Editing Content

#### 1. Hero Section

**Location**: `content.js` → `hero` object

```javascript
hero: {
  title: "حلول متكاملة لإدارة متجرك الإلكتروني",
  subtitle: "منصة شاملة تجمع بين...",
  ctas: [
    { label: "ابدأ الآن", action: "signup.html" },
    { label: "شاهد كيف يعمل", action: "#features" }
  ],
  stats: [
    { label: "عميل راضٍ", value: "1000+" },
    { label: "طلب شهرياً", value: "50K+" },
    { label: "وقت تشغيل", value: "99.9%" }
  ]
}
```

**To Edit**:
- Change `title` and `subtitle` text
- Modify `stats` values and labels
- Update CTA button labels and actions

---

#### 2. Features Section

**Location**: `content.js` → `features` array

```javascript
features: [
  {
    title: "إنشاء وإدارة المتجر الإلكتروني",
    description: "إنشاء متجر إلكتروني جاهز..."
  },
  // ... 5 more features
]
```

**To Edit**:
- Modify `title` and `description` for each feature
- Add/remove features (update HTML if adding)
- Keep descriptions concise (2-3 sentences)

---

#### 3. How It Works

**Location**: `content.js` → `howItWorks` array

```javascript
howItWorks: [
  {
    step: 1,
    title: "سجل حسابك",
    description: "ابدأ بإنشاء حسابك..."
  },
  // ... 3 more steps
]
```

**To Edit**:
- Update step numbers (1-4)
- Modify titles and descriptions
- Keep steps in logical order

---

#### 4. Pricing Plans

**Location**: `content.js` → `pricing` array

```javascript
pricing: [
  {
    plan: "أساسي",
    price: "99 رس",
    period: "ربع سنوي",
    highlighted: false,
    features: [
      "قائمة رقمية واحدة",
      "50 منتج كحد أقصى",
      // ...
    ],
    cta: "اختر الباقة الأساسية"
  },
  // ... 2 more plans
]
```

**To Edit**:
- Change plan names, prices, periods
- Modify feature lists (add/remove items)
- Set `highlighted: true` for featured plan
- Update CTA button text

---

#### 5. FAQ Section

**Location**: `content.js` → `faq` array

```javascript
faq: [
  {
    question: "ما هي الخدمات التي تقدمها المنصة؟",
    answer: "نقدم منصة متكاملة..."
  },
  // ... more FAQ items
]
```

**To Edit**:
- Add new Q&A pairs
- Modify existing questions/answers
- Keep answers concise (2-4 sentences)

---

#### 6. CTA Banner

**Location**: `content.js` → `ctaBanner` object

```javascript
ctaBanner: {
  title: "جاهز لبدء متجرك الإلكتروني؟",
  subtitle: "انضم إلى آلاف التجار...",
  button: { label: "ابدأ الآن مجاناً", action: "signup.html" }
}
```

**To Edit**:
- Update title and subtitle
- Change button label and action URL

---

#### 7. Footer

**Location**: `content.js` → `footer` object

```javascript
footer: {
  logo: "شعارك",
  quickLinks: [
    { label: "الرئيسية", href: "#hero" },
    { label: "المميزات", href: "#features" },
    // ...
  ],
  socials: [
    { icon: "fab fa-facebook-f", href: "#" },
    { icon: "fab fa-x", href: "#" },
    // ...
  ],
  copyright: "جميع الحقوق محفوظة 2025"
}
```

**To Edit**:
- Change logo text
- Update quick links (add/remove, change hrefs)
- Modify social media links and icons
- Update copyright year

**Social Media Icons** (Font Awesome classes):
- Facebook: `fab fa-facebook-f`
- Twitter/X: `fab fa-x`
- Instagram: `fab fa-instagram`
- LinkedIn: `fab fa-linkedin-in`
- WhatsApp: `fab fa-whatsapp`

---

#### 8. Support Modal

**Location**: `content.js` → `supportModal` object

```javascript
supportModal: {
  title: "كيف يمكننا مساعدتك؟",
  subtitle: "املأ النموذج...",
  formFields: [
    { id: "name", label: "الاسم الكامل", type: "text", ... },
    // ...
  ],
  socialLinks: [
    { icon: "fab fa-whatsapp", href: "#" },
    // ...
  ],
  confirmationMessage: "شكراً لك!..."
}
```

**To Edit**:
- Update title and subtitle
- Modify form field labels and placeholders
- Change social links
- Update confirmation message

---

### Best Practices for Content Editing

1. **Always edit `content.js`, never HTML**
   - HTML is populated dynamically
   - Changes in HTML will be overwritten

2. **Maintain JSON Syntax**
   - Use double quotes for strings
   - Add commas between array items
   - Close all brackets and braces

3. **Text Formatting**
   - Use Arabic text only
   - Keep descriptions concise
   - Use proper Arabic punctuation

4. **Links & Actions**
   - Internal links: Use relative paths (`signup.html`, `#features`)
   - External links: Use full URLs (`https://...`)
   - Anchor links: Start with `#` (`#hero`, `#pricing`)

5. **Testing**
   - Save `content.js`
   - Refresh browser (hard refresh: Ctrl+F5)
   - Check all sections for updates





## 🛠️ Technologies Used

### Core Technologies
- **HTML5**: Semantic markup, accessibility
- **CSS3**: Custom animations, Tailwind utilities
- **JavaScript (ES6+)**: Modern JS features
- **jQuery 3.7.1**: DOM manipulation, AJAX

### Frameworks & Libraries
- **Tailwind CSS 3.x** (CDN): Utility-first CSS
- **Font Awesome 6.5.1**: Icon library
- **Google Fonts**: Cairo & Tajawal

### Design Patterns
- **Mobile-First**: Design for mobile, enhance for desktop
- **RTL Support**: Right-to-left layout for Arabic
- **Component-Based**: Reusable components
- **Separation of Concerns**: Content (JS) separate from structure (HTML)

---

## 🎨 Color Palette & Design System

### Primary Colors
- **Primary (#FF8059)**: Main CTAs, highlights, active states
- **Secondary (#5FD2BB)**: Glass effects, secondary elements
- **Accent (#FFCA3A)**: Badges, special highlights

### Neutral Colors
- **Background (#F7F9FA)**: Page background
- **Contrast (#22242A)**: Text, borders, dark elements
- **Card (#FFFFFF)**: Card backgrounds
- **Border (#E0E3EB)**: Borders, dividers
- **Muted (#B0B2B8)**: Muted text, placeholders

### Usage Guidelines
- **Primary**: Use for primary actions, important highlights
- **Secondary**: Use for glassmorphism, subtle accents
- **Accent**: Use for badges, special offers, warnings
- **Contrast**: Use for all text content
- **Muted**: Use for secondary text, hints

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px (default)
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px+

### Mobile-Specific Features
- Burger menu (replaces horizontal nav)
- Stacked layouts
- Full-width cards
- Larger touch targets
- Simplified animations

### Desktop-Specific Features
- Horizontal navigation
- Multi-column grids
- Hover effects
- Side-by-side layouts

---

## 🔧 Development Workflow

### Making Content Changes
1. Open `content.js`
2. Locate the section to edit
3. Update the content
4. Save the file
5. Refresh browser

### Making Style Changes
1. Edit Tailwind classes in HTML
2. Or add custom CSS in `<style>` section
3. Test on multiple screen sizes

### Making Functional Changes
1. Edit `main.js` for landing page logic
2. Edit inline scripts for page-specific logic
3. Test all interactions

---

## 🐛 Troubleshooting

### Content Not Updating
- **Issue**: Changes in `content.js` not showing
- **Solution**: Hard refresh browser (Ctrl+F5 / Cmd+Shift+R)
- **Check**: JavaScript console for errors

### Mobile Menu Not Working
- **Issue**: Burger menu doesn't open
- **Solution**: Check jQuery is loaded, check `main.js` is included
- **Check**: Browser console for JavaScript errors

### API Calls Failing
- **Issue**: Forms not submitting
- **Solution**: Update `API_ENDPOINT` variables in HTML files
- **Check**: Network tab in browser DevTools

### Styling Issues
- **Issue**: Styles not applying
- **Solution**: Check Tailwind CDN is loaded
- **Check**: Verify class names are correct

---



## 📄 License & Credits

- **Fonts**: Google Fonts (Cairo, Tajawal)
- **Icons**: Font Awesome
- **CSS Framework**: Tailwind CSS
- **JavaScript Library**: jQuery

---

## 🔄 Version History

- **v1.0**: Initial release with landing page, sign in/up, and dashboard
- Features: Hero section, features, pricing, FAQ, support modal, dashboard

---

**Last Updated**: 2025

