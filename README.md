# 🎮 AMULPAPPU Gamer Portfolio

A modern, Steam-inspired gamer portfolio showcasing your gaming stats, library, achievements, and activity.

## ✨ Features

- **Profile Dashboard** - Level, XP, badges, and online status
- **Currently Playing Widget** - Live gaming status
- **Games Library** - Search, filter, and sort your game collection
- **Game Details Modal** - View detailed stats for each game
- **Recent Activity Feed** - Track your gaming journey
- **Reviews Section** - Share your game reviews
- **Social Links** - Connect via YouTube, Instagram, Github, Steam

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **Python** (v3.8 or higher) - [Download here](https://www.python.org/)
- **Yarn** - Install with: `npm install -g yarn`

### Installation

1. **Extract the ZIP file** to your desired location

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   yarn install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

### Running the Application

#### Option 1: Development Mode (Recommended)

**Terminal 1 - Frontend:**
```bash
cd frontend
yarn start
```
The frontend will open at `http://localhost:3000`

**Terminal 2 - Backend:**
```bash
cd backend
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```
The backend will run at `http://localhost:8001`

#### Option 2: Production Build

**Build Frontend:**
```bash
cd frontend
yarn build
```

**Run Backend:**
```bash
cd backend
uvicorn server:app --host 0.0.0.0 --port 8001
```

## 📁 Project Structure

```
gamer-portfolio/
├── frontend/              # React application
│   ├── src/
│   │   ├── pages/        # Page components
│   │   │   └── Home.jsx  # Main portfolio page
│   │   ├── components/   # UI components (Shadcn)
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility functions
│   │   ├── mock.js       # Mock data (currently used)
│   │   ├── App.js        # Main app component
│   │   ├── App.css       # Global styles
│   │   └── index.js      # Entry point
│   ├── public/           # Static files
│   ├── package.json      # Dependencies
│   └── .env.example     # Copy to .env (never commit .env)
│
├── backend/              # FastAPI application
│   ├── server.py        # Main server file
│   ├── requirements.txt # Python dependencies
│   └── .env.example    # Copy to .env (never commit .env)
│
└── README.md           # This file
```

## 🎨 Customization

### Update Your Profile Data

Edit `frontend/src/mock.js` to customize:

- **Profile Info** - Username, location, level, XP
- **Games** - Add/remove games, update playtime
- **Badges** - Customize your achievement badges
- **Social Links** - Update your social media URLs
- **Reviews** - Add your game reviews
- **Recent Activity** - Update activity feed

### Example: Add a New Game

```javascript
{
  id: 7,
  title: "Your Game Name",
  hours: 50,
  lastPlayed: "Today",
  achievements: { current: 25, total: 50 },
  thumbnail: "https://your-image-url.jpg",
  status: "playing",
  description: "Your game description"
}
```

### Change Colors

Edit `frontend/src/App.css` and Tailwind classes in components.

Current color scheme:
- Background: `#0e0e10` (Very Dark)
- Secondary: `#18181b`, `#27272a`
- Accent Blue: `#3b82f6`
- Success Green: `#10b981`
- Amber: `#f59e0b`

## 🔧 Configuration

### Frontend Environment Variables

Copy `frontend/.env.example` to `frontend/.env`, then edit:
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

### Backend Environment Variables

Copy `backend/.env.example` to `backend/.env`, then edit:
```
MONGO_URL=your_mongodb_connection_string
DB_NAME=your_database_name
```

**Note:** The current version uses mock data. Backend integration is ready but not yet implemented.

## 📦 Tech Stack

### Frontend
- **React** - UI framework
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Shadcn/ui** - UI components
- **Lucide React** - Icons
- **Axios** - HTTP client

### Backend
- **FastAPI** - Python web framework
- **Motor** - Async MongoDB driver
- **Pydantic** - Data validation
- **Python-dotenv** - Environment management

## 🚧 Next Steps (Backend Integration)

Currently, the app uses mock data from `mock.js`. To make it fully dynamic:

1. **Setup MongoDB** - Create a database
2. **Update Backend** - Add API endpoints for games, activities, reviews
3. **Connect Frontend** - Replace mock data with API calls
4. **Add Authentication** - Secure your portfolio (optional)

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000 (frontend)
npx kill-port 3000

# Kill process on port 8001 (backend)
npx kill-port 8001
```

### Module Not Found
```bash
# Reinstall frontend dependencies
cd frontend
rm -rf node_modules yarn.lock
yarn install

# Reinstall backend dependencies
cd backend
pip install -r requirements.txt --force-reinstall
```

### Styles Not Loading
```bash
cd frontend
yarn add -D tailwindcss postcss autoprefixer
```

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📄 License

This project is open source and available for personal use.

## 🤝 Support

For issues or questions:
- Check console logs in browser (F12)
- Verify all dependencies are installed
- Ensure ports 3000 and 8001 are available

## 🎉 Credits

Built with passion for gaming! Powered by React, FastAPI, and modern web technologies.

---

**Enjoy your gamer portfolio! Happy Gaming! 🎮**
