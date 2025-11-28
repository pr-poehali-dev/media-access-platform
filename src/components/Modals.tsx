import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

interface ModalsProps {
  showAIOrder: boolean;
  showVideoCall: boolean;
  showAdminChat: boolean;
  aiOrderAmount: string;
  aiOrderDescription: string;
  aiServices: any[];
  chatMessages: any[];
  onCloseAIOrder: () => void;
  onCloseVideoCall: () => void;
  onCloseAdminChat: () => void;
  onAIAmountChange: (value: string) => void;
  onAIDescriptionChange: (value: string) => void;
  onToggleVideoCall: () => void;
}

const Modals = ({
  showAIOrder,
  showVideoCall,
  showAdminChat,
  aiOrderAmount,
  aiOrderDescription,
  aiServices,
  chatMessages,
  onCloseAIOrder,
  onCloseVideoCall,
  onCloseAdminChat,
  onAIAmountChange,
  onAIDescriptionChange,
  onToggleVideoCall
}: ModalsProps) => {
  return (
    <>
      {showAIOrder && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
          <Card className="w-full max-w-4xl max-h-[90vh] flex flex-col">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h3 className="text-2xl font-heading font-semibold flex items-center gap-2">
                <Icon name="Bot" size={24} className="text-primary" />
                Заказ ИИ подразделения
              </h3>
              <Button size="icon" variant="ghost" onClick={onCloseAIOrder}>
                <Icon name="X" size={20} />
              </Button>
            </div>
            
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {aiServices.map((service, idx) => (
                    <Card 
                      key={idx} 
                      className={`p-6 cursor-pointer transition-all hover:shadow-lg relative ${service.popular ? 'border-primary border-2' : ''}`}
                    >
                      {service.popular && (
                        <Badge className="absolute -top-2 -right-2">Популярное</Badge>
                      )}
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                          <Icon name={service.icon as any} size={32} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-xl mb-2">{service.name}</h4>
                          <div className="text-3xl font-bold text-primary mb-4">{service.price} ₽</div>
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {service.features.map((feature: string, i: number) => (
                            <li key={i} className="flex items-center gap-2">
                              <Icon name="Check" size={16} className="text-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full">Выбрать</Button>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="font-heading font-semibold text-lg mb-4">Индивидуальный заказ</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Сумма (₽)</label>
                      <Input 
                        type="number" 
                        placeholder="Введите сумму" 
                        value={aiOrderAmount}
                        onChange={(e) => onAIAmountChange(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Описание задачи</label>
                      <textarea 
                        className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Опишите, какое ИИ подразделение вам нужно и какие задачи оно должно решать..."
                        value={aiOrderDescription}
                        onChange={(e) => onAIDescriptionChange(e.target.value)}
                      />
                    </div>
                    <Button size="lg" className="w-full gap-2">
                      <Icon name="Send" size={20} />
                      Отправить заказ
                    </Button>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Info" size={16} className="text-primary" />
                    Что такое ИИ подразделение?
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Это персонализированный ИИ ассистент, который будет работать специально для ваших задач: создание контента, 
                    модерация, аналитика, автоматизация процессов и многое другое. Выберите готовый тариф или закажите 
                    индивидуальное решение под ваши нужды.
                  </p>
                </div>
              </div>
            </ScrollArea>
          </Card>
        </div>
      )}

      {showVideoCall && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
          <Card className="w-full max-w-4xl h-[600px] flex flex-col">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <h3 className="font-heading font-semibold flex items-center gap-2">
                <Icon name="Video" size={20} className="text-primary" />
                Видеозвонок с администратором
              </h3>
              <Button size="icon" variant="ghost" onClick={onCloseVideoCall}>
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
              <Button size="icon" variant="destructive" className="rounded-full w-12 h-12" onClick={onCloseVideoCall}>
                <Icon name="PhoneOff" size={20} />
              </Button>
            </div>
          </Card>
        </div>
      )}

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
              <Button size="icon" variant="ghost" onClick={onToggleVideoCall}>
                <Icon name="Video" size={18} />
              </Button>
              <Button size="icon" variant="ghost">
                <Icon name="Phone" size={18} />
              </Button>
              <Button size="icon" variant="ghost" onClick={onCloseAdminChat}>
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
    </>
  );
};

export default Modals;
