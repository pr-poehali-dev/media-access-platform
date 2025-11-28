import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  menuItems: Array<{ id: string; label: string; icon: string }>;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, menuItems, onSectionChange }: NavigationProps) => {
  return (
    <nav className="bg-card/50 border-b border-border sticky top-[73px] z-40 backdrop-blur-sm">
      <ScrollArea className="w-full">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 py-3">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onSectionChange(item.id)}
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
  );
};

export default Navigation;
