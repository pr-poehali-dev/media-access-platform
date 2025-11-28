import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface ContentSectionsProps {
  activeSection: string;
  contentCards: any[];
  animeCards: any[];
  activeRooms: any[];
}

const ContentSections = ({ activeSection, contentCards, animeCards, activeRooms }: ContentSectionsProps) => {
  return (
    <main className="container mx-auto px-4 py-8">
      {activeSection === 'home' && (
        <div className="space-y-8 animate-fade-in">
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

      {activeSection === 'anime' && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-heading font-bold flex items-center gap-2">
              <Icon name="Sparkles" size={32} className="text-primary" />
              Аниме
            </h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Жанры</Button>
              <Button variant="outline" size="sm">Топ</Button>
              <Button variant="outline" size="sm">Онгоинги</Button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-6">
              <div className="text-8xl">🍥</div>
              <div className="flex-1">
                <Badge className="mb-2">Популярная коллекция</Badge>
                <h3 className="text-3xl font-heading font-bold mb-2">Вселенная Наруто</h3>
                <p className="text-muted-foreground mb-4">Полная коллекция: Наруто, Наруто: Ураганные хроники, Боруто. Более 1000 эпизодов легендарной истории о ниндзя.</p>
                <Button size="lg" className="gap-2">
                  <Icon name="Play" size={20} />
                  Начать просмотр
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {animeCards.map((item, idx) => (
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
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{item.episodes} эп.</span>
                    <Badge variant="outline" className="text-xs">{item.status}</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
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
  );
};

export default ContentSections;
