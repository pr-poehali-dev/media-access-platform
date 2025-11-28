import { useState } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import ContentSections from '@/components/ContentSections';
import Modals from '@/components/Modals';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showAdminChat, setShowAdminChat] = useState(false);
  const [showVideoCall, setShowVideoCall] = useState(false);
  const [showAIOrder, setShowAIOrder] = useState(false);
  const [aiOrderAmount, setAiOrderAmount] = useState('');
  const [aiOrderDescription, setAiOrderDescription] = useState('');

  const menuItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'anime', label: 'Аниме', icon: 'Sparkles' },
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

  const animeCards = [
    { title: 'Наруто: Ураганные хроники', type: 'Аниме', rating: 9.5, image: '🍥', episodes: 500, status: 'Завершён' },
    { title: 'Наруто', type: 'Аниме', rating: 9.3, image: '🦊', episodes: 220, status: 'Завершён' },
    { title: 'Боруто', type: 'Аниме', rating: 8.2, image: '⚡', episodes: 293, status: 'Онгоинг' },
    { title: 'Атака титанов', type: 'Аниме', rating: 9.8, image: '⚔️', episodes: 87, status: 'Завершён' },
    { title: 'Моя геройская академия', type: 'Аниме', rating: 9.1, image: '💥', episodes: 138, status: 'Онгоинг' },
    { title: 'Ванпанчмен', type: 'Аниме', rating: 9.2, image: '👊', episodes: 24, status: 'Онгоинг' },
    { title: 'Клинок, рассекающий демонов', type: 'Аниме', rating: 9.4, image: '🗡️', episodes: 44, status: 'Онгоинг' },
    { title: 'Токийский гуль', type: 'Аниме', rating: 8.9, image: '🎭', episodes: 48, status: 'Завершён' },
  ];

  const aiServices = [
    { name: 'Базовый', price: 500, features: ['Простые запросы', 'До 10 запросов/день', 'Базовая поддержка'], icon: 'Zap' },
    { name: 'Продвинутый', price: 1500, features: ['Сложные запросы', 'До 50 запросов/день', 'Приоритетная поддержка', 'API доступ'], icon: 'Sparkles', popular: true },
    { name: 'Профессиональный', price: 5000, features: ['Неограниченные запросы', 'Кастомные модели', 'VIP поддержка 24/7', 'Интеграции'], icon: 'Rocket' },
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
      <Header 
        onAIOrderClick={() => setShowAIOrder(!showAIOrder)}
        onVideoCallClick={() => setShowVideoCall(!showVideoCall)}
        onAdminChatClick={() => setShowAdminChat(!showAdminChat)}
      />

      <Navigation 
        activeSection={activeSection}
        menuItems={menuItems}
        onSectionChange={setActiveSection}
      />

      <ContentSections 
        activeSection={activeSection}
        contentCards={contentCards}
        animeCards={animeCards}
        activeRooms={activeRooms}
      />

      <Modals 
        showAIOrder={showAIOrder}
        showVideoCall={showVideoCall}
        showAdminChat={showAdminChat}
        aiOrderAmount={aiOrderAmount}
        aiOrderDescription={aiOrderDescription}
        aiServices={aiServices}
        chatMessages={chatMessages}
        onCloseAIOrder={() => setShowAIOrder(false)}
        onCloseVideoCall={() => setShowVideoCall(false)}
        onCloseAdminChat={() => setShowAdminChat(false)}
        onAIAmountChange={setAiOrderAmount}
        onAIDescriptionChange={setAiOrderDescription}
        onToggleVideoCall={() => setShowVideoCall(!showVideoCall)}
      />
    </div>
  );
};

export default Index;
