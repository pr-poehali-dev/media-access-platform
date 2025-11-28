import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showAdminChat, setShowAdminChat] = useState(false);
  const [showVideoCall, setShowVideoCall] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'movies', label: 'Фильмы', icon: 'Film' },
    { id: 'series', label: 'Сериалы', icon: 'Tv' },
    { id: 'games', label: 'Игры', icon: 'Gamepad2' },
    { id: 'music', label: 'Музыка', icon: 'Music' },
    { id: 'streams', label: 'Трансляции', icon: 'Radio' },
    { id: 'rooms', label: 'Комнаты', icon: 'Users' },
    { id: 'chats', label: 'Чаты', icon: 'MessageCircle' },
    { id: 'profile', label: 'Профиль', icon: 'User' },
    { id: 'subscriptions', label: 'Подписки', icon: 'CreditCard' },
  ];

  const contentCards = [
    { title: 'Начало времён', type: 'Фильм', rating: 8.5, image: '🎬', category: 'movies' },
    { title: 'Космические приключения', type: 'Сериал', rating: 9.2, image: '🚀', category: 'series' },
    { title: 'Cyberpunk 2088', type: 'Игра', rating: 9.0, image: '🎮', category: 'games' },
    { title: 'Синтвейв микс', type: 'Музыка', rating: 8.8, image: '🎵', category: 'music' },
    { title: 'Прямой эфир: Концерт', type: 'Трансляция', rating: 8.3, image: '📡', category: 'streams' },
    { title: 'Тайны вселенной', type: 'Фильм', rating: 8.7, image: '🌌', category: 'movies' },
  ];

  const activeRooms = [
    { name: 'Любители кино', users: 234, topic: 'Обсуждаем новинки' },
    { name: 'Геймеры', users: 567, topic: 'Киберспорт турнир' },
    { name: 'Меломаны', users: 123, topic: 'Новые релизы недели' },
  ];

  const chatMessages = [
    { user: 'Администратор', message: 'Здравствуйте! Чем могу помочь?', time: '14:32', isAdmin: true },
    { user: 'Вы', message: 'Здравствуйте! Хочу узнать о подписках', time: '14:33', isAdmin: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <Icon name="Sparkles" size={20} className="text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                MediaHub
              </h1>
            </div>

            <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-8">
              <Input placeholder="Поиск контента..." className="bg-background/50" />
              <Button size="icon" variant="ghost">
                <Icon name="Search" size={20} />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setShowVideoCall(!showVideoCall)}
              >
                <Icon name="Video" size={20} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setShowAdminChat(!showAdminChat)}
              >
                <Icon name="MessageSquare" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
              <Avatar className="w-9 h-9">
                <AvatarFallback className="bg-primary text-primary-foreground">U</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-card/50 border-b border-border sticky top-[73px] z-40 backdrop-blur-sm">
        <ScrollArea className="w-full">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 py-3">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveSection(item.id)}
                  className="gap-2 whitespace-nowrap"
                >
                  <Icon name={item.icon as any} size={16} />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </ScrollArea>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-8 animate-fade-in">
            {/* Hero Section */}
            <div className="relative rounded-2xl overflow-hidden h-[400px] bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <h2 className="text-5xl font-heading font-bold">Добро пожаловать в MediaHub</h2>
                  <p className="text-xl text-muted-foreground">Фильмы, сериалы, игры, музыка и многое другое</p>
                  <div className="flex gap-3 justify-center mt-6">
                    <Button size="lg" className="gap-2">
                      <Icon name="Play" size={20} />
                      Начать просмотр
                    </Button>
                    <Button size="lg" variant="outline" className="gap-2">
                      <Icon name="Upload" size={20} />
                      Загрузить контент
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Trending */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-heading font-bold flex items-center gap-2">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                  Популярное сейчас
                </h3>
                <Button variant="ghost">Смотреть всё</Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {contentCards.map((item, idx) => (
                  <Card key={idx} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-video bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-6xl relative overflow-hidden">
                      {item.image}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <Button size="icon" variant="secondary" className="rounded-full">
                          <Icon name="Play" size={20} />
                        </Button>
                        <Button size="icon" variant="secondary" className="rounded-full">
                          <Icon name="Plus" size={20} />
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{item.type}</Badge>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Icon name="Star" size={14} />
                          <span className="text-sm font-medium">{item.rating}</span>
                        </div>
                      </div>
                      <h4 className="font-heading font-semibold">{item.title}</h4>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Active Rooms */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-heading font-bold flex items-center gap-2">
                  <Icon name="Users" size={24} className="text-accent" />
                  Активные комнаты
                </h3>
                <Button variant="ghost" className="gap-2">
                  <Icon name="Plus" size={16} />
                  Создать комнату
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activeRooms.map((room, idx) => (
                  <Card key={idx} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-heading font-semibold text-lg">{room.name}</h4>
                        <p className="text-sm text-muted-foreground">{room.topic}</p>
                      </div>
                      <Badge variant="outline" className="gap-1">
                        <Icon name="Users" size={12} />
                        {room.users}
                      </Badge>
                    </div>
                    <Button className="w-full gap-2" size="sm">
                      <Icon name="LogIn" size={16} />
                      Войти в комнату
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'profile' && (
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <Card className="p-8">
              <div className="flex items-start gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-2xl">US</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-4">
                  <div>
                    <h2 className="text-2xl font-heading font-bold">Мой профиль</h2>
                    <p className="text-muted-foreground">user@example.com</p>
                  </div>
                  <div className="flex gap-3">
                    <Button className="gap-2">
                      <Icon name="Upload" size={16} />
                      Загрузить контент
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Icon name="Settings" size={16} />
                      Настройки
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Tabs defaultValue="content" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="content">Мой контент</TabsTrigger>
                <TabsTrigger value="subscriptions">Подписки</TabsTrigger>
                <TabsTrigger value="donations">Донаты</TabsTrigger>
              </TabsList>
              <TabsContent value="content" className="space-y-4">
                <Card className="p-6 text-center">
                  <Icon name="Upload" size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <h3 className="font-heading font-semibold mb-2">Загрузите свой контент</h3>
                  <p className="text-muted-foreground mb-4">Поделитесь фильмами, музыкой, играми с миллионами пользователей</p>
                  <Button className="gap-2">
                    <Icon name="Plus" size={16} />
                    Начать загрузку
                  </Button>
                </Card>
              </TabsContent>
              <TabsContent value="subscriptions" className="space-y-4">
                <Card className="p-6">
                  <h3 className="font-heading font-semibold mb-4">Активные подписки</h3>
                  <p className="text-muted-foreground">У вас пока нет активных подписок</p>
                </Card>
              </TabsContent>
              <TabsContent value="donations" className="space-y-4">
                <Card className="p-6">
                  <h3 className="font-heading font-semibold mb-4">История донатов</h3>
                  <p className="text-muted-foreground">История пуста</p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {['movies', 'series', 'games', 'music', 'streams'].includes(activeSection) && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-heading font-bold capitalize">{
                activeSection === 'movies' ? 'Фильмы' :
                activeSection === 'series' ? 'Сериалы' :
                activeSection === 'games' ? 'Игры' :
                activeSection === 'music' ? 'Музыка' : 'Трансляции'
              }</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Жанры</Button>
                <Button variant="outline" size="sm">Популярное</Button>
                <Button variant="outline" size="sm">Новинки</Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {contentCards.filter(c => c.category === activeSection).map((item, idx) => (
                <Card key={idx} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-6xl relative overflow-hidden">
                    {item.image}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <Button size="icon" variant="secondary" className="rounded-full">
                        <Icon name="Play" size={20} />
                      </Button>
                      <Button size="icon" variant="secondary" className="rounded-full">
                        <Icon name="Plus" size={20} />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{item.type}</Badge>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Icon name="Star" size={14} />
                        <span className="text-sm font-medium">{item.rating}</span>
                      </div>
                    </div>
                    <h4 className="font-heading font-semibold">{item.title}</h4>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Admin Chat Sidebar */}
      {showAdminChat && (
        <div className="fixed right-0 top-0 h-full w-96 bg-card border-l border-border shadow-2xl z-50 flex flex-col animate-fade-in">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">A</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-heading font-semibold">Чат с администратором</h3>
                <p className="text-xs text-muted-foreground">Онлайн</p>
              </div>
            </div>
            <div className="flex gap-1">
              <Button size="icon" variant="ghost" onClick={() => setShowVideoCall(!showVideoCall)}>
                <Icon name="Video" size={18} />
              </Button>
              <Button size="icon" variant="ghost">
                <Icon name="Phone" size={18} />
              </Button>
              <Button size="icon" variant="ghost" onClick={() => setShowAdminChat(false)}>
                <Icon name="X" size={18} />
              </Button>
            </div>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex gap-2 ${!msg.isAdmin ? 'flex-row-reverse' : ''}`}>
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className={msg.isAdmin ? 'bg-primary' : 'bg-secondary'}>
                      {msg.isAdmin ? 'A' : 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`flex-1 ${!msg.isAdmin ? 'text-right' : ''}`}>
                    <div className={`inline-block p-3 rounded-lg ${msg.isAdmin ? 'bg-muted' : 'bg-primary text-primary-foreground'}`}>
                      <p className="text-sm">{msg.message}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 border-t border-border space-y-2">
            <div className="flex gap-2">
              <Button size="icon" variant="outline">
                <Icon name="Image" size={18} />
              </Button>
              <Button size="icon" variant="outline">
                <Icon name="Paperclip" size={18} />
              </Button>
              <Button size="icon" variant="outline">
                <Icon name="Smile" size={18} />
              </Button>
            </div>
            <div className="flex gap-2">
              <Input placeholder="Введите сообщение..." />
              <Button size="icon">
                <Icon name="Send" size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Video Call Modal */}
      {showVideoCall && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
          <Card className="w-full max-w-4xl h-[600px] flex flex-col">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <h3 className="font-heading font-semibold flex items-center gap-2">
                <Icon name="Video" size={20} className="text-primary" />
                Видеозвонок с администратором
              </h3>
              <Button size="icon" variant="ghost" onClick={() => setShowVideoCall(false)}>
                <Icon name="X" size={20} />
              </Button>
            </div>
            
            <div className="flex-1 bg-muted relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <Icon name="Video" size={48} className="text-primary" />
                  </div>
                  <p className="text-muted-foreground">Ожидание подключения...</p>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 w-48 h-36 bg-card rounded-lg border border-border overflow-hidden">
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <Icon name="User" size={32} className="text-muted-foreground" />
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-border flex justify-center gap-4">
              <Button size="icon" variant="outline" className="rounded-full w-12 h-12">
                <Icon name="Mic" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full w-12 h-12">
                <Icon name="Video" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full w-12 h-12">
                <Icon name="Camera" size={20} />
              </Button>
              <Button size="icon" variant="destructive" className="rounded-full w-12 h-12" onClick={() => setShowVideoCall(false)}>
                <Icon name="PhoneOff" size={20} />
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;
