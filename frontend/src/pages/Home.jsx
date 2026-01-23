import React, { useState } from 'react';
import { mockData } from '../mock';
import { 
  Gamepad2, MapPin, Award, Star, TrendingUp, Clock, Users, 
  Filter, Search, ThumbsUp, Youtube, MessageCircle, Video,
  CheckCircle, Shield, Trophy, Instagram, Github
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

const iconMap = {
  'gamepad-2': Gamepad2,
  'shield': Shield,
  'trophy': Trophy,
  'star': Star,
  'check-circle': CheckCircle,
  'video': Video,
  'youtube': Youtube,
  'gamepad': Gamepad2,
  'message-circle': MessageCircle,
  'twitch': Video,
  'clock': Clock,
  'award': Award,
  'instagram': Instagram,
  'github': Github
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [selectedGame, setSelectedGame] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);

  const { profile, currentlyPlaying, games, recentActivity, reviews } = mockData;

  const getStatusColor = (status) => {
    switch(status) {
      case 'online': return 'bg-emerald-500';
      case 'offline': return 'bg-zinc-600';
      case 'in-game': return 'bg-blue-500';
      default: return 'bg-zinc-600';
    }
  };

  const filteredGames = games
    .filter(game => game.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'playtime') return b.hours - a.hours;
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src={profile.avatar} 
                alt={profile.username}
                className="w-12 h-12 rounded-lg border-2 border-blue-500"
              />
              <div>
                <h1 className="text-xl font-bold">{profile.username}</h1>
                <p className="text-sm text-zinc-400">{profile.role}</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#games" className="text-zinc-300 hover:text-white transition-colors">Games</a>
              <a href="#activity" className="text-zinc-300 hover:text-white transition-colors">Activity</a>
              <a href="#reviews" className="text-zinc-300 hover:text-white transition-colors">Reviews</a>
              <Button onClick={() => setContactOpen(true)} size="sm" className="bg-blue-600 hover:bg-blue-700">
                Contact
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={profile.banner} 
          alt="Profile banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end gap-6">
              <img 
                src={profile.avatar} 
                alt={profile.username}
                className="w-32 h-32 rounded-xl border-4 border-zinc-900 shadow-2xl"
              />
              <div className="flex-1 pb-2">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl font-bold">{profile.username}</h1>
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(profile.status)} shadow-lg shadow-emerald-500/50`} />
                </div>
                <p className="text-xl text-zinc-300 mb-2">{profile.displayName}</p>
                <div className="flex items-center gap-4 text-sm text-zinc-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {profile.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Trophy className="w-4 h-4 text-amber-500" />
                    Level {profile.level}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-emerald-500" />
                    {profile.xp} XP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Currently Playing */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-400">
                  <Gamepad2 className="w-5 h-5" />
                  Currently Playing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <img 
                    src={currentlyPlaying.thumbnail}
                    alt={currentlyPlaying.game}
                    className="w-24 h-16 rounded object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{currentlyPlaying.game}</h3>
                    <p className="text-sm text-zinc-400">{currentlyPlaying.status}</p>
                    <p className="text-xs text-zinc-500 mt-1">{currentlyPlaying.playtime} this session</p>
                  </div>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                </div>
              </CardContent>
            </Card>

            {/* Games Library */}
            <div id="games">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Games Library</h2>
                <Badge variant="secondary" className="bg-zinc-800">{games.length} Games</Badge>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <Input 
                    placeholder="Search games..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-zinc-900 border-zinc-800"
                  />
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-48 bg-zinc-900 border-zinc-800">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Recently Played</SelectItem>
                    <SelectItem value="playtime">Most Played</SelectItem>
                    <SelectItem value="name">Name (A-Z)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredGames.map(game => (
                  <Card 
                    key={game.id}
                    className="bg-zinc-900 border-zinc-800 hover:border-blue-500 transition-all cursor-pointer group"
                    onClick={() => setSelectedGame(game)}
                  >
                    <CardContent className="p-0">
                      <img 
                        src={game.thumbnail}
                        alt={game.title}
                        className="w-full h-40 object-cover rounded-t-lg"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">{game.title}</h3>
                        <div className="flex items-center justify-between text-sm text-zinc-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {game.hours} hrs
                          </span>
                          <span>Last: {game.lastPlayed}</span>
                        </div>
                        {game.achievements.total > 0 && (
                          <div className="mt-3">
                            <div className="flex items-center justify-between text-xs text-zinc-500 mb-1">
                              <span>Achievements</span>
                              <span>{game.achievements.current}/{game.achievements.total}</span>
                            </div>
                            <div className="w-full bg-zinc-800 rounded-full h-1.5">
                              <div 
                                className="bg-blue-500 h-1.5 rounded-full transition-all"
                                style={{ width: `${(game.achievements.current / game.achievements.total) * 100}%` }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div id="activity">
              <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-4">
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => {
                      const Icon = iconMap[activity.icon] || Clock;
                      return (
                        <div key={index} className="flex items-start gap-3 pb-4 border-b border-zinc-800 last:border-0 last:pb-0">
                          <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{activity.game}</p>
                            <p className="text-sm text-zinc-400">{activity.action}</p>
                            <p className="text-xs text-zinc-500 mt-1">{activity.time}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Reviews */}
            <div id="reviews">
              <h2 className="text-2xl font-bold mb-4">My Reviews</h2>
              <div className="space-y-4">
                {reviews.map(review => (
                  <Card key={review.id} className="bg-zinc-900 border-zinc-800">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{review.game}</h3>
                          <p className="text-sm text-zinc-400">{review.hours} hours played • {review.date}</p>
                        </div>
                        <Badge className={review.rating === 'positive' ? 'bg-emerald-600' : 'bg-red-600'}>
                          {review.rating === 'positive' ? 'Recommended' : 'Not Recommended'}
                        </Badge>
                      </div>
                      <p className="text-zinc-300 mb-3">{review.content}</p>
                      <div className="flex items-center gap-2 text-sm text-zinc-500">
                        <ThumbsUp className="w-4 h-4" />
                        {review.helpful} people found this helpful
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Badges */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-lg">Badges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {profile.badges.map(badge => {
                    const Icon = iconMap[badge.icon] || Star;
                    return (
                      <div key={badge.id} className="flex flex-col items-center text-center">
                        <div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center mb-2"
                          style={{ backgroundColor: badge.color + '20', color: badge.color }}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs text-zinc-400">{badge.name}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-lg">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {profile.socialLinks.map((link, index) => {
                    const Icon = iconMap[link.icon] || MessageCircle;
                    return (
                      <Button 
                        key={index}
                        variant="outline" 
                        className="w-full justify-start gap-2 bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
                        asChild
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <Icon className="w-4 h-4" />
                          {link.platform}
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Game Detail Modal */}
      <Dialog open={!!selectedGame} onOpenChange={() => setSelectedGame(null)}>
        <DialogContent className="bg-zinc-900 border-zinc-800 text-zinc-100">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedGame?.title}</DialogTitle>
            <DialogDescription className="text-zinc-400">
              {selectedGame?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <img 
              src={selectedGame?.thumbnail}
              alt={selectedGame?.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-800 p-4 rounded-lg">
                <p className="text-sm text-zinc-400 mb-1">Total Playtime</p>
                <p className="text-2xl font-bold">{selectedGame?.hours} hrs</p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg">
                <p className="text-sm text-zinc-400 mb-1">Last Played</p>
                <p className="text-2xl font-bold">{selectedGame?.lastPlayed}</p>
              </div>
            </div>
            {selectedGame?.achievements.total > 0 && (
              <div className="bg-zinc-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-zinc-400">Achievements</p>
                  <p className="font-semibold">
                    {selectedGame?.achievements.current}/{selectedGame?.achievements.total}
                  </p>
                </div>
                <div className="w-full bg-zinc-700 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all"
                    style={{ width: `${(selectedGame?.achievements.current / selectedGame?.achievements.total) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Contact Modal */}
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="bg-zinc-900 border-zinc-800 text-zinc-100">
          <DialogHeader>
            <DialogTitle>Get in Touch</DialogTitle>
            <DialogDescription className="text-zinc-400">
              Connect with me on social platforms or send a message!
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {profile.socialLinks.map((link, index) => {
                const Icon = iconMap[link.icon] || MessageCircle;
                return (
                  <Button 
                    key={index}
                    variant="outline" 
                    className="justify-start gap-2 bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <Icon className="w-4 h-4" />
                      {link.platform}
                    </a>
                  </Button>
                );
              })}
            </div>
            <div className="pt-4 border-t border-zinc-800">
              <p className="text-sm text-zinc-400 text-center">
                Thanks for visiting my gamer portfolio!
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="mt-12 border-t border-zinc-800 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-zinc-400 text-sm">
            <p>© 2025 {profile.username} - Gamer Portfolio</p>
            <p className="mt-2">Built with passion for gaming</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;