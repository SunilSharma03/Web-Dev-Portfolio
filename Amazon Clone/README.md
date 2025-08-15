# 🛒 Amazon Clone

[![Next.js](https://img.shields.io/badge/Next.js-13.4+-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

A modern, fully responsive e-commerce platform that replicates the core functionality and user experience of Amazon. Built with Next.js, React, TypeScript, and Tailwind CSS.

![Amazon Clone Preview](https://via.placeholder.com/800x400?text=Amazon+Clone+Preview)

## ✨ Features

- 📱 **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- 🏬 **Product Catalog** - Browse products with data from external API and mock products
- 🛍️ **Shopping Cart** - Add/remove items with real-time updates using Zustand state management
- 💳 **Checkout Process** - Streamlined checkout experience
- 🔐 **User Authentication** - Login and registration functionality
- 📄 **Pagination** - Navigate through product listings efficiently
- 🎨 **Amazon-inspired UI** - Familiar user interface with modern touches

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) with App Router
- **UI Library**: [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) for global state
- **API Integration**: [Axios](https://axios-http.com/) for data fetching
- **Data Source**: [FakeStore API](https://fakestoreapi.com/) with custom mock products

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/sunbyte16/amazon-clone.git
   cd amazon-clone
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📂 Project Structure

```
/
├── public/            # Static assets
│   └── images/        # Image files
├── src/
│   ├── app/           # Next.js app router pages
│   │   ├── checkout/  # Checkout page
│   │   ├── login/     # Login page
│   │   └── register/  # Registration page
│   ├── components/    # Reusable React components
│   │   ├── Banner.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── ProductCard.tsx
│   │   └── ProductFeed.tsx
│   ├── lib/           # Utilities, API functions, and types
│   │   ├── api.ts
│   │   ├── mockProducts.ts
│   │   ├── store.ts
│   │   └── types.ts
│   └── styles/        # Global styles
└── next.config.js     # Next.js configuration
```

## 🔮 Future Enhancements

- 🔍 Advanced product search and filtering
- 📊 Order history and tracking
- 💰 Payment processing integration
- ⭐ Product reviews and ratings
- 👨‍💼 Seller dashboard
- 🎯 Personalized recommendations
- 🥽 AR/VR product visualization

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to help improve this project.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Created by

Sunil Sharma
- [GitHub](https://github.com/sunbyte16)
- [LinkedIn](https://www.linkedin.com/in/sunil-kumar-bb88bb31a/)
- Email: sharmasunil22528@gmail.com

---

⭐ Star this repository if you found it useful! ⭐
