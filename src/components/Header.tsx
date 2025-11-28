import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  onAIOrderClick: () => void;
  onVideoCallClick: () => void;
  onAdminChatClick: () => void;
  onMenuClick: () => void;
}

const Header = ({ onAIOrderClick, onVideoCallClick, onAdminChatClick, onMenuClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
      <div className="flex items-center justify-between px-4 py-3">
        <Button variant="ghost" size="icon" onClick={onMenuClick}>
          <Icon name="Menu" size={24} />
        </Button>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
            <Icon name="Star" size={16} className="text-primary-foreground" />
          </div>
          <h1 className="text-lg font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Кинозвезда
          </h1>
        </div>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={onAIOrderClick}>
            <Icon name="Bot" size={20} />
          </Button>
          <Button variant="ghost" size="icon" onClick={onAdminChatClick}>
            <Icon name="MessageSquare" size={20} />
          </Button>
        </div>
      </div>

      <div className="px-4 pb-3">
        <div className="relative">
          <Input placeholder="Поиск фильмов, сериалов, аниме..." className="pl-10" />
          <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>
    </header>
  );
};

export default Header;
