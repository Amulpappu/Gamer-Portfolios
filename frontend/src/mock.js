export const mockData = {
  profile: {
    username: "AMULPAPPU",
    displayName: "LOHITH",
    location: "Madurai, Tamil Nadu, India",
    role: "GAMER",
    level: 6,
    xp: 200,
    status: "online",
    avatar: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=400&fit=crop",
    banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=400&fit=crop",
    badges: [
      { id: 1, name: "Community Ambassador", icon: "shield", color: "#3b82f6" },
      { id: 2, name: "Level 6", icon: "trophy", color: "#f59e0b" },
      { id: 3, name: "200 XP", icon: "star", color: "#10b981" },
      { id: 4, name: "Pro Gamer", icon: "gamepad-2", color: "#8b5cf6" },
      { id: 5, name: "Verified", icon: "check-circle", color: "#06b6d4" },
      { id: 6, name: "Streamer", icon: "video", color: "#ec4899" }
    ],
    socialLinks: [
      { platform: "YouTube", url: "https://www.youtube.com/@AMULPAPPU_001", icon: "youtube" },
      { platform: "Instagram", url: "https://www.instagram.com/lohith_x/", icon: "instagram" },
      { platform: "Github", url: "https://github.com/Amulpappu", icon: "github" },
      { platform: "Steam", url: "https://steamcommunity.com/profiles/76561199497363742/", icon: "gamepad" }
    ]
  },
  currentlyPlaying: {
    game: "Grand Theft Auto V",
    playtime: "2.5 hours",
    status: "In Mission",
    thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=200&fit=crop"
  },
  games: [
    {
      id: 1,
      title: "Once Human",
      hours: 625,
      lastPlayed: "23 Jan",
      achievements: { current: 77, total: 77 },
      thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=150&fit=crop",
      status: "completed",
      description: "Post-apocalyptic survival game with intense multiplayer action"
    },
    {
      id: 2,
      title: "Grand Theft Auto V Legacy",
      hours: 142,
      lastPlayed: "23 Jan",
      achievements: { current: 77, total: 77 },
      thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=300&h=150&fit=crop",
      status: "playing",
      description: "Open-world action-adventure game set in Los Santos"
    },
    {
      id: 3,
      title: "FiveM",
      hours: 3.6,
      lastPlayed: "22 Jan",
      achievements: { current: 0, total: 0 },
      thumbnail: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=300&h=150&fit=crop",
      status: "playing",
      description: "GTA V multiplayer modification framework"
    },
    {
      id: 4,
      title: "Counter-Strike 2",
      hours: 89,
      lastPlayed: "20 Jan",
      achievements: { current: 45, total: 100 },
      thumbnail: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=300&h=150&fit=crop",
      status: "playing",
      description: "Tactical first-person shooter"
    },
    {
      id: 5,
      title: "Valorant",
      hours: 234,
      lastPlayed: "18 Jan",
      achievements: { current: 60, total: 80 },
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=150&fit=crop",
      status: "playing",
      description: "5v5 character-based tactical shooter"
    },
    {
      id: 6,
      title: "Apex Legends",
      hours: 156,
      lastPlayed: "15 Jan",
      achievements: { current: 34, total: 60 },
      thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=300&h=150&fit=crop",
      status: "playing",
      description: "Fast-paced battle royale game"
    }
  ],
  recentActivity: [
    { game: "Once Human", action: "Played for 57 hours", time: "past 2 weeks", icon: "gamepad-2" },
    { game: "Grand Theft Auto V", action: "142 hrs on record", time: "last played on 23 Jan", icon: "trophy" },
    { game: "Once Human", action: "Achievement Unlocked +72", time: "23 Jan", icon: "star" },
    { game: "FiveM", action: "3.6 hrs on record", time: "last played on 22 Jan", icon: "clock" },
    { game: "Counter-Strike 2", action: "Won 5 matches", time: "20 Jan", icon: "award" }
  ],
  reviews: [
    {
      id: 1,
      game: "Grand Theft Auto V",
      rating: "positive",
      hours: 142,
      date: "22 Jan",
      content: "Absolutely incredible game! The storyline is engaging, graphics are stunning, and the online mode keeps me coming back. Best open-world experience.",
      helpful: 45
    },
    {
      id: 2,
      game: "Once Human",
      rating: "positive",
      hours: 625,
      date: "20 Jan",
      content: "Amazing survival game with great multiplayer features. The crafting system is deep and rewarding. Highly recommended for survival game fans!",
      helpful: 78
    },
    {
      id: 3,
      game: "Counter-Strike 2",
      rating: "positive",
      hours: 89,
      date: "18 Jan",
      content: "The new CS2 update brings fresh life to the classic. Improved graphics and smoother gameplay. Still the best tactical shooter out there.",
      helpful: 34
    },
    {
      id: 4,
      game: "Valorant",
      rating: "positive",
      hours: 234,
      date: "15 Jan",
      content: "Great blend of tactical shooting and unique agent abilities. Competitive scene is thriving. One of the best FPS games in recent years.",
      helpful: 56
    }
  ]
};