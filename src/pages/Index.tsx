import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const vipTiers = [
    {
      name: 'Venom',
      price: '59₽',
      color: 'bg-green-600',
      textColor: 'text-green-400',
      features: [
        'Префикс [Venom] в чате',
        'Доступ к /kit venom',
        '2 дома (/sethome)',
        'Цветной ник',
        'Приоритет входа на сервер'
      ],
      icon: 'Gem'
    },
    {
      name: 'AntiVenom',
      price: '129₽',
      color: 'bg-blue-600',
      textColor: 'text-blue-400',
      features: [
        'Всё из Venom',
        'Префикс [AntiVenom] в чате',
        'Доступ к /kit antivenom',
        '5 домов (/sethome)',
        'Команда /fly',
        'Больше слотов в аукционе'
      ],
      icon: 'Crown'
    },
    {
      name: 'Toxin',
      price: '209₽',
      color: 'bg-purple-600',
      textColor: 'text-purple-400',
      features: [
        'Всё из AntiVenom',
        'Префикс [Toxin] в чате',
        'Доступ к /kit toxin',
        '10 домов (/sethome)',
        'Команда /heal и /feed',
        'Приватные варпы',
        'Эксклюзивные эмодзи в чате'
      ],
      icon: 'Trophy'
    },
    {
      name: 'Fag',
      price: '309₽',
      color: 'bg-yellow-600',
      textColor: 'text-yellow-400',
      features: [
        'Всё из Toxin',
        'Префикс [Fag] в чате',
        'Доступ к /kit fag',
        'Неограниченно домов',
        'Команда /god',
        'Личный варп сервер',
        'Уникальные партиклы',
        'Доступ в закрытую зону'
      ],
      icon: 'Sword'
    },
    {
      name: 'Carnage',
      price: '409₽',
      color: 'bg-red-600',
      textColor: 'text-red-400',
      features: [
        'Всё из Fag',
        'Префикс [Carnage] в чате',
        'Доступ к /kit carnage',
        'Персональный мир',
        'Команда /vanish',
        'Эксклюзивные скины',
        'VIP зона с ресурсами',
        'Особые эффекты и анимации'
      ],
      icon: 'Flame'
    }
  ];

  const rules = [
    {
      category: 'Общие правила',
      items: [
        'Запрещено использование читов и модов, дающих преимущество',
        'Уважайте других игроков, нецензурная брань запрещена',
        'Запрещен спам в чате и реклама других серверов',
        'Гриферство и воровство строго запрещены'
      ]
    },
    {
      category: 'Правила строительства',
      items: [
        'Запрещены лаг-машины и механизмы, нагружающие сервер'
      ]
    },
    {
      category: 'Правила торговли',
      items: [
        'Все сделки на свой страх и риск'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a4d2e] to-[#0d2818]">
      <nav className="sticky top-0 z-50 border-b-4 border-[#8B4513] bg-[#2d5016] shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="pixel-font text-2xl md:text-3xl text-yellow-400 drop-shadow-lg">
              ⛏️ MINECRAFT SERVER
            </h1>
            <div className="flex gap-2 md:gap-4">
              <Button
                onClick={() => setActiveSection('home')}
                variant={activeSection === 'home' ? 'default' : 'outline'}
                className="pixel-font text-xs md:text-sm border-2 border-[#8B4513]"
              >
                Главная
              </Button>
              <Button
                onClick={() => setActiveSection('donate')}
                variant={activeSection === 'donate' ? 'default' : 'outline'}
                className="pixel-font text-xs md:text-sm border-2 border-[#8B4513]"
              >
                Донат
              </Button>
              <Button
                onClick={() => setActiveSection('rules')}
                variant={activeSection === 'rules' ? 'default' : 'outline'}
                className="pixel-font text-xs md:text-sm border-2 border-[#8B4513]"
              >
                Правила
              </Button>
              <Button
                onClick={() => setActiveSection('terms')}
                variant={activeSection === 'terms' ? 'default' : 'outline'}
                className="pixel-font text-xs md:text-sm border-2 border-[#8B4513]"
              >
                Соглашение
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <div className="animate-fade-in">
            <section className="mb-16 text-center">
              <div className="mb-8 relative">
                <h2 className="pixel-font text-4xl md:text-6xl text-yellow-400 mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                  ДОБРО ПОЖАЛОВАТЬ!
                </h2>
                <p className="text-xl md:text-2xl text-green-300 mb-8">
                  Лучший сервер анархии без правил
                </p>
              </div>

              <Card className="border-4 border-[#8B4513] bg-[#3a5a2a]/90 backdrop-blur max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="pixel-font text-2xl text-yellow-400">
                    Присоединяйся прямо сейчас!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/50 p-6 border-2 border-[#FFD700] mb-6">
                    <p className="text-green-400 text-xl font-mono mb-2">IP Адрес сервера:</p>
                    <p className="pixel-font text-2xl md:text-3xl text-yellow-400 select-all">
                      play.server.net
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
                    <div className="bg-blue-800/50 p-4 border-2 border-blue-600">
                      <Icon name="Globe" className="mx-auto mb-2 text-blue-400" size={32} />
                      <p className="text-blue-300 text-sm">Версия</p>
                      <p className="pixel-font text-xl text-yellow-400">1.16.5</p>
                    </div>
                    <div className="bg-red-800/50 p-4 border-2 border-red-600">
                      <Icon name="Skull" className="mx-auto mb-2 text-red-400" size={32} />
                      <p className="text-red-300 text-sm">Режим</p>
                      <p className="pixel-font text-lg text-yellow-400">Анархия</p>
                    </div>
                    <div className="bg-orange-800/50 p-4 border-2 border-orange-600">
                      <Icon name="Clock" className="mx-auto mb-2 text-orange-400" size={32} />
                      <p className="text-orange-300 text-sm">Аптайм</p>
                      <p className="pixel-font text-xl text-yellow-400">99.9%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>


          </div>
        )}

        {activeSection === 'donate' && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="pixel-font text-4xl md:text-5xl text-yellow-400 mb-4">
                💎 VIP ПРИВИЛЕГИИ
              </h2>
              <p className="text-xl text-green-300">
                Поддержи сервер и получи уникальные возможности!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {vipTiers.map((tier, index) => (
                <Card
                  key={index}
                  className={`border-4 ${tier.color} bg-[#2d2d2d]/95 hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
                >
                  <CardHeader className="text-center">
                    <Icon name={tier.icon as any} className={tier.textColor} size={48} />
                    <CardTitle className={`pixel-font text-2xl ${tier.textColor} mt-4`}>
                      {tier.name}
                    </CardTitle>
                    <div className="my-4">
                      <Badge className={`${tier.color} text-white pixel-font text-xl px-6 py-2 border-2 border-white`}>
                        {tier.price}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-green-200">
                          <span className="text-green-400 text-xl">✔</span>
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full mt-6 pixel-font ${tier.color} hover:brightness-110 border-2 border-white text-white`}
                    >
                      Купить
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-12 border-4 border-yellow-600 bg-yellow-900/20">
              <CardContent className="p-8 text-center">
                <Icon name="Info" className="mx-auto mb-4 text-yellow-400" size={48} />
                <h3 className="pixel-font text-2xl text-yellow-400 mb-4">
                  Способы оплаты
                </h3>
                <div className="flex flex-wrap justify-center gap-4 text-green-300">
                  <Badge variant="outline" className="border-2 border-green-500 text-green-300 px-4 py-2">
                    💳 Банковская карта
                  </Badge>
                  <Badge variant="outline" className="border-2 border-green-500 text-green-300 px-4 py-2">
                    📱 СБП
                  </Badge>
                  <Badge variant="outline" className="border-2 border-green-500 text-green-300 px-4 py-2">
                    💰 Киви
                  </Badge>
                  <Badge variant="outline" className="border-2 border-green-500 text-green-300 px-4 py-2">
                    🎮 Steam
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'terms' && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="pixel-font text-4xl md:text-5xl text-yellow-400 mb-4">
                📋 ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ
              </h2>
              <p className="text-xl text-green-300">
                Условия использования сервера
              </p>
            </div>

            <Card className="border-4 border-[#8B4513] bg-[#3a5a2a]/90 mb-8">
              <CardContent className="p-8">
                <div className="space-y-6 text-green-200">
                  <section>
                    <h3 className="pixel-font text-xl text-yellow-400 mb-3">1. ОБЩИЕ ПОЛОЖЕНИЯ</h3>
                    <p className="mb-2">
                      1.1. Настоящее Пользовательское соглашение регулирует отношения между администрацией Minecraft сервера (далее - "Сервер") и пользователем (далее - "Игрок").
                    </p>
                    <p className="mb-2">
                      1.2. Начиная игру на Сервере, Игрок автоматически соглашается со всеми условиями данного соглашения.
                    </p>
                    <p>
                      1.3. Администрация оставляет за собой право изменять условия соглашения без предварительного уведомления.
                    </p>
                  </section>

                  <section>
                    <h3 className="pixel-font text-xl text-yellow-400 mb-3">2. ПРАВИЛА ИСПОЛЬЗОВАНИЯ</h3>
                    <p className="mb-2">
                      2.1. Игрок обязуется не использовать читы, моды и другие программы, дающие преимущество в игре.
                    </p>
                    <p className="mb-2">
                      2.2. Игрок несет полную ответственность за безопасность своего аккаунта.
                    </p>
                    <p>
                      2.3. Запрещены действия, направленные на нарушение работы Сервера или ухудшение игрового процесса других Игроков.
                    </p>
                  </section>

                  <section>
                    <h3 className="pixel-font text-xl text-yellow-400 mb-3">3. ДОНАТ И ВОЗВРАТЫ</h3>
                    <p className="mb-2">
                      3.1. Все донат-привилегии предоставляются на добровольной основе в качестве поддержки проекта.
                    </p>
                    <p className="mb-2">
                      3.2. Возврат средств за донат не производится, за исключением случаев технической ошибки при обработке платежа.
                    </p>
                    <p className="mb-2">
                      3.3. В случае блокировки аккаунта за нарушение правил, донат-привилегии не возвращаются и не переносятся.
                    </p>
                    <p>
                      3.4. Администрация не несет ответственности за потерю привилегий вследствие технических сбоев или закрытия проекта.
                    </p>
                  </section>

                  <section>
                    <h3 className="pixel-font text-xl text-yellow-400 mb-3">4. ОТВЕТСТВЕННОСТЬ СТОРОН</h3>
                    <p className="mb-2">
                      4.1. Администрация не несет ответственности за потерю игровых предметов, построек или прогресса.
                    </p>
                    <p className="mb-2">
                      4.2. Сервер предоставляется "как есть", без каких-либо гарантий стабильной работы.
                    </p>
                    <p>
                      4.3. Администрация оставляет за собой право заблокировать доступ к Серверу любому Игроку без объяснения причин.
                    </p>
                  </section>

                  <section>
                    <h3 className="pixel-font text-xl text-yellow-400 mb-3">5. ПЕРСОНАЛЬНЫЕ ДАННЫЕ</h3>
                    <p className="mb-2">
                      5.1. Сервер собирает минимально необходимую информацию: игровой ник, IP-адрес для обеспечения безопасности.
                    </p>
                    <p className="mb-2">
                      5.2. Персональные данные не передаются третьим лицам и используются только для функционирования Сервера.
                    </p>
                    <p>
                      5.3. Игрок имеет право запросить удаление своих данных, обратившись к администрации.
                    </p>
                  </section>

                  <section>
                    <h3 className="pixel-font text-xl text-yellow-400 mb-3">6. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ</h3>
                    <p className="mb-2">
                      6.1. Настоящее соглашение вступает в силу с момента начала использования Сервера.
                    </p>
                    <p className="mb-2">
                      6.2. Все споры решаются путем переговоров с администрацией.
                    </p>
                    <p>
                      6.3. Продолжая играть на Сервере, Игрок подтверждает свое согласие с условиями данного соглашения.
                    </p>
                  </section>
                </div>

                <div className="mt-8 bg-blue-900/30 border-2 border-blue-600 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="Info" className="text-blue-400" size={32} />
                    <h3 className="pixel-font text-xl text-blue-400">Контакты</h3>
                  </div>
                  <p className="text-blue-200">
                    По всем вопросам, связанным с соглашением, обращайтесь к администрации через Discord или Telegram.
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-green-300 text-sm">
                    Дата последнего обновления: 28.10.2025
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'rules' && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="pixel-font text-4xl md:text-5xl text-yellow-400 mb-4">
                📜 ПРАВИЛА СЕРВЕРА
              </h2>
              <p className="text-xl text-green-300">
                Соблюдение правил обязательно для всех игроков
              </p>
            </div>

            <Card className="border-4 border-[#8B4513] bg-[#3a5a2a]/90 mb-8">
              <CardContent className="p-8">
                <div className="bg-red-900/30 border-2 border-red-600 p-6 mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="AlertTriangle" className="text-red-400" size={32} />
                    <h3 className="pixel-font text-xl text-red-400">ВАЖНО!</h3>
                  </div>
                  <p className="text-red-200">
                    Незнание правил не освобождает от ответственности. За нарушения выдаются предупреждения, 
                    муты, кики или баны в зависимости от серьезности проступка.
                  </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {rules.map((section, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-2 border-[#8B4513] bg-[#2d2d2d]/50 px-4"
                    >
                      <AccordionTrigger className="pixel-font text-yellow-400 hover:text-yellow-300">
                        {section.category}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3 pt-4">
                          {section.items.map((rule, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-green-200">
                              <span className="text-yellow-400 pixel-font text-sm">{idx + 1}.</span>
                              <span>{rule}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-8 bg-green-900/30 border-2 border-green-600 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="MessageCircle" className="text-green-400" size={32} />
                    <h3 className="pixel-font text-xl text-green-400">Связь с администрацией</h3>
                  </div>
                  <p className="text-green-200 mb-4">
                    По вопросам нарушений, апелляций или предложений:
                  </p>
                  <div className="space-y-2">
                    <p className="text-green-300">📧 Discord: discord.gg/server</p>
                    <p className="text-green-300">💬 Telegram: @admin_server</p>
                    <p className="text-green-300">🎮 В игре: /report [ник] [причина]</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="border-t-4 border-[#8B4513] bg-[#1a3a1a] mt-20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="pixel-font text-yellow-400 mb-2">⛏️ MINECRAFT SERVER 2025</p>
          <p className="text-green-300 text-sm">
            Создан игроками для игроков. Удачной игры! 🎮
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;