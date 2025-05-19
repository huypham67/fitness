# MixiFitness React

This project is a React conversion of the MixiFitness website, using modern React practices and the Ant Design UI library.

## Project Structure

The project follows a modular, component-based architecture that ensures reusability, maintainability, and scalability.

### Key Directories:

- `/src/assets/` - Static assets like images, fonts, and global styles
- `/src/components/` - Reusable UI components
  - `/common/` - Basic UI elements (Button, Card, Modal, etc.)
  - `/layout/` - Layout components (Header, Footer)
  - `/sections/` - Larger content sections used on multiple pages (Hero, PricingSection)
- `/src/features/` - Feature-specific components organized by feature
  - `/{feature-name}/components/` - Components specific to a feature
  - `/{feature-name}/hooks/` - Custom hooks specific to a feature
- `/src/layouts/` - Page layout templates
- `/src/pages/` - Page components that represent routes
- `/src/services/` - API service layer
- `/src/hooks/` - Global custom hooks
- `/src/utils/` - Utility functions

### Component Organization:

Each significant component follows a consistent structure:
- `index.js` - Export file for clean imports
- `Component.jsx` - Component logic and rendering
- `Component.styles.js` - Styled components (when applicable)

## Page Components

The application includes the following main pages:

1. **HomePage** - Landing page with hero section, categories, and pricing
2. **ListFitnessCenterPage** - List of fitness centers with filtering options
3. **DetailFitnessPage** - Detailed view of a specific fitness center
4. **RegisterPage** - User registration page
5. **ForgotPasswordPage** - Password recovery page
6. **ContactPage** - Contact form and information
7. **InformationCustomerPage** - User profile information

## Component Reusability

The project emphasizes component reusability:

1. **Common Components** - Foundational UI elements used throughout the application
2. **Layout Components** - Consistent page structure elements
3. **Section Components** - Larger content blocks that may be reused across pages
4. **Feature Components** - Specialized components for specific features

## Styling Approach

Styling is implemented using:
1. Styled-components for component-specific styling
2. Theme customization for Ant Design components
3. The Ant Design component library as the UI foundation

## Getting Started

1. Install dependencies:
```
npm install
```

2. Start the development server:
```
npm start
```

3. Build for production:
```
npm run build
```

## Best Practices Implemented

- Component decomposition for better maintainability
- Separation of concerns (styling, logic, markup)
- Consistent naming conventions
- Prop validation with PropTypes
- Clear component interfaces
- Responsive design considerations
- Clean import statements using index.js files 