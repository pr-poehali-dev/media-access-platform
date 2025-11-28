import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  menuItems: Array<{ id: string; label: string; icon: string }>;
  onSectionChange: (section: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Navigation = ({ activeSection, menuItems, onSectionChange, isOpen, onClose }: NavigationProps) => {
  const handleSectionChange = (id: string) => {
    onSectionChange(id);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 animate-fade-in"
          onClick={onClose}
        />
      )}
      
      <nav 
        className={`fixed top-0 left-0 h-full w-72 bg-card border-r border-border z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <Icon name="Star" size={16} className="text-primary-foreground" />
            </div>
            <h2 className="font-heading font-bold">Меню</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <Icon name="X" size={20} />
          </Button>
        </div>

        <div className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? 'default' : 'ghost'}
              className="w-full justify-start gap-3"
              onClick={() => handleSectionChange(item.id)}
            >
              <Icon name={item.icon as any} size={20} />
              <span>{item.label}</span>
            </Button>
          ))}
        </div>
      </nav>

      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-30 pb-safe">
        <div className="flex items-center justify-around px-2 py-2">
          <Button
            variant={activeSection === 'home' ? 'default' : 'ghost'}
            size="sm"
            className="flex-col h-auto py-2 px-4 gap-1"
            onClick={() => onSectionChange('home')}
          >
            <Icon name="Home" size={20} />
            <span className="text-xs">Главная</span>
          </Button>
          <Button
            variant={activeSection === 'anime' ? 'default' : 'ghost'}
            size="sm"
            className="flex-col h-auto py-2 px-4 gap-1"
            onClick={() => onSectionChange('anime')}
          >
            <Icon name="Sparkles" size={20} />
            <span className="text-xs">Аниме</span>
          </Button>
          <Button
            variant={activeSection === 'movies' ? 'default' : 'ghost'}
            size="sm"
            className="flex-col h-auto py-2 px-4 gap-1"
            onClick={() => onSectionChange('movies')}
          >
            <Icon name="Film" size={20} />
            <span className="text-xs">Фильмы</span>
          </Button>
          <Button
            variant={activeSection === 'rooms' ? 'default' : 'ghost'}
            size="sm"
            className="flex-col h-auto py-2 px-4 gap-1"
            onClick={() => onSectionChange('rooms')}
          >
            <Icon name="Users" size={20} />
            <span className="text-xs">Комнаты</span>
          </Button>
          <Button
            variant={activeSection === 'profile' ? 'default' : 'ghost'}
            size="sm"
            className="flex-col h-auto py-2 px-4 gap-1"
            onClick={() => onSectionChange('profile')}
          >
            <Icon name="User" size={20} />
            <span className="text-xs">Профиль</span>
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
