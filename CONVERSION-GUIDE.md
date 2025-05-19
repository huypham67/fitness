# MixiFitness Conversion Guide

This guide provides instructions for further refactoring the remaining page components in the MixiFitness React project to follow the established component structure.

## Current Status

- ✅ Project structure established
- ✅ Common components created (Button, Card, Modal)
- ✅ Layout components implemented (Header, Footer)
- ✅ HomePage fully refactored
- ⚠️ Other pages partially converted but need further refactoring

## Pages to Refactor

Following the HomePage example, these pages need to be refactored into the component-based structure:

### 1. ListFitnessCenterPage

Current: `src/pages/ListFitnessCenterPage.js`
Target structure:
```
src/pages/ListFitnessCenterPage/
  ├── index.js
  ├── ListFitnessCenterPage.jsx
  └── ListFitnessCenterPage.styles.js (if needed)
```

Components to extract:
- `src/features/fitnessCenter/components/FilterSidebar.jsx`
- `src/features/fitnessCenter/components/FitnessCenterCard.jsx`
- `src/features/fitnessCenter/components/SearchBar.jsx` 
- `src/features/fitnessCenter/components/SortControls.jsx`

### 2. DetailFitnessPage

Current: `src/pages/DetailFitnessPage.js`
Target structure:
```
src/pages/DetailFitnessPage/
  ├── index.js
  ├── DetailFitnessPage.jsx
  └── DetailFitnessPage.styles.js (if needed)
```

Components to extract:
- `src/features/fitnessCenter/components/ImageCarousel.jsx`
- `src/features/fitnessCenter/components/InfoHeader.jsx`
- `src/features/fitnessCenter/components/AmenityList.jsx`
- `src/features/fitnessCenter/components/ReviewSection.jsx`
- `src/features/fitnessCenter/components/MembershipOptions.jsx`
- `src/features/fitnessCenter/components/ContactForm.jsx`

### 3. RegisterPage

Current: `src/pages/RegisterPage.js`
Target structure:
```
src/pages/RegisterPage/
  ├── index.js
  ├── RegisterPage.jsx
  └── RegisterPage.styles.js (if needed)
```

Components to extract:
- `src/features/auth/components/RegisterForm.jsx`
- `src/features/auth/components/SocialAuthOptions.jsx`

### 4. ForgotPasswordPage

Current: `src/pages/ForgotPasswordPage.js`
Target structure:
```
src/pages/ForgotPasswordPage/
  ├── index.js
  ├── ForgotPasswordPage.jsx
  └── ForgotPasswordPage.styles.js (if needed)
```

Components to extract:
- `src/features/auth/components/PasswordResetForm.jsx`

### 5. ContactPage

Current: `src/pages/ContactPage.js`
Target structure:
```
src/pages/ContactPage/
  ├── index.js
  ├── ContactPage.jsx
  └── ContactPage.styles.js (if needed)
```

Components to extract:
- `src/features/contact/components/ContactForm.jsx`
- `src/features/contact/components/ContactInfo.jsx`
- `src/features/contact/components/MapSection.jsx`

### 6. InformationCustomerPage

Current: `src/pages/InformationCustomerPage.js`
Target structure:
```
src/pages/InformationCustomerPage/
  ├── index.js
  ├── InformationCustomerPage.jsx
  └── InformationCustomerPage.styles.js (if needed)
```

Components to extract:
- `src/features/userProfile/components/ProfileForm.jsx`
- `src/features/userProfile/components/UserStats.jsx`
- `src/features/userProfile/components/MembershipInfo.jsx`

## Refactoring Process

Follow this process for each page:

1. **Create the directory structure** for the page
2. **Extract components** to their respective feature folders
3. **Update imports** in the main page component
4. **Split styles** into their own files
5. **Verify functionality** after refactoring

## Code Organization Guidelines

1. **Component Naming**:
   - Use PascalCase for component names and their files
   - Be descriptive and specific (e.g., `FitnessCenterCard` instead of just `Card`)

2. **File Structure**:
   - Group related files together
   - Use index.js for clean exports
   - Keep styles separate from component logic

3. **Component Design**:
   - Each component should have a single responsibility
   - Pass data via props, not through global state when possible
   - Document props with PropTypes

4. **Styling**:
   - Use styled-components for component-specific styling
   - Use CSS variables for common values
   - Follow the established theme colors and patterns

## Best Practices

1. **Component Size**:
   - If a component exceeds 100-150 lines, consider splitting it
   - Extract repeated patterns into their own components

2. **State Management**:
   - Keep state as close to where it's used as possible
   - Use custom hooks to abstract complex logic

3. **Performance**:
   - Use React.memo for pure components that render often
   - Avoid unnecessary re-renders

## Example: Refactoring ListFitnessCenterPage

1. Create folder structure:
```
mkdir -p src/pages/ListFitnessCenterPage
mkdir -p src/features/fitnessCenter/components
```

2. Create index.js:
```jsx
// src/pages/ListFitnessCenterPage/index.js
export { default } from './ListFitnessCenterPage';
```

3. Extract components:
```jsx
// src/features/fitnessCenter/components/FitnessCenterCard.jsx
import React from 'react';
import { Card, Typography, Tag, Rate } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Extract styling and component implementation
```

4. Create main page component:
```jsx
// src/pages/ListFitnessCenterPage/ListFitnessCenterPage.jsx
import React, { useState } from 'react';
import { Row, Col } from 'antd';
import FilterSidebar from '../../features/fitnessCenter/components/FilterSidebar';
import FitnessCenterCard from '../../features/fitnessCenter/components/FitnessCenterCard';
import SearchBar from '../../features/fitnessCenter/components/SearchBar';
import SortControls from '../../features/fitnessCenter/components/SortControls';

// Implement page logic using the extracted components
``` 