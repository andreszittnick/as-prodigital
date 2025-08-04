# Overview

This is a modern full-stack web application built for a digital agency called "AS ProDigital". The application serves as a professional portfolio and contact website, featuring services like web design, SEO optimization, and AI solutions. It's built with a React frontend using modern UI components and an Express.js backend with PostgreSQL database integration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Library**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with CSS variables for theming
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations
- **API Design**: RESTful API endpoints with proper error handling
- **Development Setup**: Vite for development server with hot module replacement
- **Session Management**: Session-based storage configuration (connect-pg-simple)

## Database Schema
- **Primary Database**: PostgreSQL with Neon serverless driver
- **Tables**: 
  - `users` - User authentication and management
  - `contact_inquiries` - Contact form submissions with validation
- **Schema Management**: Drizzle migrations with push-based deployment

## Data Storage Solutions
- **Production**: PostgreSQL database via Neon serverless
- **Development**: In-memory storage fallback for development/testing
- **Validation**: Zod schemas for runtime type checking and form validation

## Authentication & Authorization
- **Strategy**: Session-based authentication prepared (storage interface defined)
- **Security**: CORS and security headers configuration
- **User Management**: UUID-based user identification

## Build & Deployment
- **Frontend Build**: Vite bundler with React plugin
- **Backend Build**: esbuild for Node.js server bundling
- **Development**: Hot reload with Vite development server
- **Production**: Static file serving with Express

# External Dependencies

## Core Technologies
- **Database**: Neon PostgreSQL serverless database
- **Deployment**: Replit-optimized configuration with development banner integration

## UI & Design
- **Component Library**: Radix UI primitives for accessible components
- **Icons**: Lucide React icon library
- **Animations**: Framer Motion for complex animations
- **Carousel**: Embla Carousel for image/content carousels

## Development Tools
- **Type Safety**: TypeScript with strict configuration
- **Code Quality**: ESLint and TypeScript compiler checks
- **Hot Reload**: Vite with React Fast Refresh
- **Error Handling**: Runtime error overlay for development

## Third-Party Services
- **Email Integration**: Prepared for email service integration (contact form notifications)
- **Analytics**: Ready for analytics service integration
- **CDN**: Unsplash for placeholder images in portfolio section

## Development Environment
- **Replit Integration**: Cartographer plugin for enhanced development experience
- **Environment Variables**: DATABASE_URL for PostgreSQL connection
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)