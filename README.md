# Furniro: Furniture E-Commerce Marketplace

A modern furniture marketplace built with Next.js, Sanity CMS, and integrated APIs. Designed for scalability and user experience.



## Features
- **Dynamic Product Listings** with filters & search
- **Product Detail Pages** (Dynamic Routing)
- **Shopping Cart & Checkout** (Mock Payment)
- **Responsive Design** (Mobile-first approach)
- **CMS Backend** (Sanity.io integration)
- **Performance Optimized** (Lighthouse Score: 100)

## Tech Stack
**Frontend:** Next.js 14 | Tailwind CSS | TypeScript  
**Backend:** Sanity CMS
**Tools:** Cypress | Postman | Vercel | GitHub Actions

## Key Implementation

### Day 1-2: Planning Phase
- Defined marketplace type (Standard e-Commerce)
- Created data schema for:
  - Products (Title, Price, Images, tags)
  - Orders (Customer Info, Payment Status)
  - Inventory Management

Day 3: API & CMS Integration

Endpoint	Method	Description
/api/products	GET	Fetch all products
/api/product[slug]	GET	Fetch single product details
/api/shipping	GET	Track shipment status


Sanity Schema Example:


// product.ts
export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'price', type: 'number' },
    { name: 'images', type: 'array', of: [{ type: 'image' }] }
  ]
}
Day 4: Frontend Components
Product Grid

Lazy loading images

Category filters

Cart System

Context API for state management

Local storage persistence

Checkout Flow

Form validation

Error boundaries

Day 5: Testing & Optimization
Performance Enhancements:

Image optimization (WebP format)

Code splitting (Dynamic imports)

Cache strategies (SWR)

Security Measures:

Environment variables for API keys

Input sanitization

HTTPS enforcement

Day 6: Deployment
Vercel Configuration

CI/CD pipeline

Preview deployments

Environment Variables

env
Copy
NEXT_PUBLIC_SANITY_ID=your_project_id
STRIPE_API_KEY=sk_test_...
Monitoring Setup

Logging (Sentry.io)

Analytics (Google Tag Manager)

Getting Started
Clone repository


git clone https://github.com/yourusername/furniro.git


Project Structure
Copy
furniro/
├── src/
│   ├── app/          # Next.js routes
│   ├── components/   # Reusable UI
│   └── sanity/       # CMS schemas
├── scripts/ # Data migration

Lessons Learned
CMS Integration: Sanity.io's real-time preview capabilities

Performance: Importance of image optimization

Error Handling: Graceful degradation patterns

Testing: Value of automated E2E tests