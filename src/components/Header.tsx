import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  onAIOrderClick: () => void;
  onVideoCallClick: () => void;
  onAdminChatClick: () => void;
}

const Header = ({ onAIOrderClick, onVideoCallClick, onAdminChatClick }: HeaderProps) => {
  return (
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
              onClick={onAIOrderClick}
              className="relative"
            >
              <Icon name="Bot" size={20} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onVideoCallClick}
            >
              <Icon name="Video" size={20} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onAdminChatClick}
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
  );
};

export default Header;
