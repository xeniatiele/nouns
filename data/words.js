const version_date="2020-08-18";
const words = [
  {word:"абак", cat:"uncommon"},
  {word:"аббат", cat:"common"},
  {word:"аббатство", cat:"common"},
  {word:"аббревиатура", cat:"easy"},
  {word:"аберрация", cat:"uncommon"},
  {word:"абзац", cat:"easy"},
  {word:"абитуриент", cat:"common"},
  {word:"аболиционизм", cat:"uncommon"},
  {word:"абонемент", cat:"common"},
  {word:"абонент", cat:"common"},
  {word:"абордаж", cat:"common"},
  {word:"абориген", cat:"easy"},
  {word:"абразив", cat:"common"},
  {word:"абракадабра", cat:"easy"},
  {word:"абрис", cat:"uncommon"},
  {word:"абсент", cat:"uncommon"},
  {word:"абсолют", cat:"common"},
  {word:"абсолютизм", cat:"common"},
  {word:"абсорбция", cat:"uncommon"},
  {word:"абстракт", cat:"uncommon"},
  {word:"абстракционизм", cat:"common"},
  {word:"абстракция", cat:"common"},
  {word:"абсурд", cat:"common"},
  {word:"абсцесс", cat:"uncommon"},
  {word:"абсцисса", cat:"uncommon"},
  {word:"авангард", cat:"common"},
  {word:"авангардизм", cat:"common"},
  {word:"аванпост", cat:"common"},
  {word:"аванс", cat:"common"},
  {word:"авансцена", cat:"uncommon"},
  {word:"авантюра", cat:"common"},
  {word:"авантюризм", cat:"common"},
  {word:"авантюрин", cat:"uncommon"},
  {word:"авария", cat:"common"},
  {word:"авгур", cat:"common"},
  {word:"август", cat:"common"},
  {word:"авиабаза", cat:"common"},
  {word:"авиабомба", cat:"easy"},
  {word:"авиаконструктор", cat:"common"},
  {word:"авиалайнер", cat:"easy"},
  {word:"авиалиния", cat:"easy"},
  {word:"авиаматка", cat:"uncommon"},
  {word:"авиамеханик", cat:"common"},
  {word:"авианосец", cat:"easy"},
  {word:"авиация", cat:"common"},
  {word:"авизо", cat:"uncommon"},
  {word:"авокадо", cat:"common"},
  {word:"авось", cat:"common"},
  {word:"авоська", cat:"easy"},
  {word:"аврал", cat:"common"},
  {word:"автаркия", cat:"uncommon"},
  {word:"автобиография", cat:"common"},
  {word:"автобус", cat:"easy"},
  {word:"автоген", cat:"easy"},
  {word:"автограф", cat:"common"},
  {word:"автожир", cat:"uncommon"},
  {word:"автоклав", cat:"uncommon"},
  {word:"автократия", cat:"common"},
  {word:"автоматизация", cat:"common"},
  {word:"автоматизм", cat:"common"},
  {word:"автоматика", cat:"common"},
  {word:"автономия", cat:"common"},
  {word:"автопилот", cat:"common"},
  {word:"автопортрет", cat:"common"},
  {word:"автор", cat:"easy"},
  {word:"авторизация", cat:"common"},
  {word:"авторитаризм", cat:"common"},
  {word:"авторитет", cat:"common"},
  {word:"авторучка", cat:"easy"},
  {word:"автостоп", cat:"common"},
  {word:"автохтон", cat:"uncommon"},
  {word:"агава", cat:"uncommon"},
  {word:"агама", cat:"uncommon"},
  {word:"агат", cat:"uncommon"},
  {word:"агглютинация", cat:"uncommon"},
  {word:"агент", cat:"common"},
  {word:"агитация", cat:"common"},
  {word:"агломерация", cat:"common"},
  {word:"агностицизм", cat:"common"},
  {word:"агония", cat:"common"},
  {word:"аграрий", cat:"common"},
  {word:"агрегация", cat:"uncommon"},
  {word:"агрессия", cat:"common"},
  {word:"агукание", cat:"common"},
  {word:"ад", cat:"common"},
  {word:"адаптер", cat:"common"},
  {word:"адаптивность", cat:"common"},
  {word:"адвентизм", cat:"uncommon"},
  {word:"адвокатура", cat:"common"},
  {word:"адгезия", cat:"uncommon"},
  {word:"адекватность", cat:"common"},
  {word:"адепт", cat:"common"},
  {word:"администрирование", cat:"common"},
  {word:"адрес", cat:"easy"},
  {word:"адюльтер", cat:"common"},
  {word:"ажиотаж", cat:"common"},
  {word:"азарт", cat:"common"},
  {word:"азимут", cat:"common"},
  {word:"азур", cat:"uncommon"},
  {word:"аист", cat:"easy"},
  {word:"академик", cat:"common"},
  {word:"академия", cat:"common"},
  {word:"акварель", cat:"common"},
  {word:"акватория", cat:"common"},
  {word:"акведук", cat:"uncommon"},
  {word:"аквилон", cat:"uncommon"},
  {word:"акклиматизация", cat:"common"},
  {word:"аккредитация", cat:"common"},
  {word:"аккумулятор", cat:"easy"},
  {word:"аккумуляция", cat:"common"},
  {word:"акмеизм", cat:"uncommon"},
  {word:"акробатика", cat:"common"},
  {word:"аксакал", cat:"common"},
  {word:"актив", cat:"common"},
  {word:"активация", cat:"common"},
  {word:"активизм", cat:"common"},
  {word:"активность", cat:"common"},
  {word:"акула", cat:"easy"},
  {word:"акустика", cat:"common"},
  {word:"акушерство", cat:"common"},
  {word:"акцент", cat:"common"},
  {word:"акционер", cat:"common"},
  {word:"акция", cat:"common"},
  {word:"алармизм", cat:"uncommon"},
  {word:"алгебра", cat:"common"},
  {word:"алгоритм", cat:"common"},
  {word:"алебарда", cat:"easy"},
  {word:"алиби", cat:"common"},
  {word:"алименты", cat:"common"},
  {word:"алкоголизм", cat:"common"},
  {word:"алкоголь", cat:"common"},
  {word:"аллегория", cat:"common"},
  {word:"аллея", cat:"easy"},
  {word:"аллилуйя", cat:"uncommon"},
  {word:"время", cat:"common"},
  {word:"времянка", cat:"common"},
  {word:"герметичность", cat:"common"},
  {word:"героизм", cat:"common"},
  {word:"героин", cat:"common"},
  {word:"геронтократия", cat:"common"},
  {word:"геронтология", cat:"uncommon"},
  {word:"герпетология", cat:"uncommon"},
  {word:"герцогство", cat:"common"},
  {word:"год", cat:"common"},
  {word:"годность", cat:"common"},
  {word:"граф", cat:"common"},
  {word:"графа", cat:"common"},
  {word:"графомания", cat:"common"},
  {word:"граффити", cat:"easy"},
  {word:"гребля", cat:"easy"},
  {word:"грелка", cat:"easy"},
  {word:"грех", cat:"common"},
  {word:"гречиха", cat:"common"},
  {word:"гречка", cat:"common"},
  {word:"грива", cat:"common"},
  {word:"гривенник", cat:"common"},
  {word:"гриль", cat:"easy"},
  {word:"грим", cat:"easy"},
  {word:"гримаса", cat:"common"},
  {word:"грипп", cat:"common"},
  {word:"гриф", cat:"common"},
  {word:"гробница", cat:"easy"},
  {word:"гроза", cat:"easy"},
  {word:"гром", cat:"easy"},
  {word:"громкость", cat:"common"},
  {word:"грот", cat:"common"},
  {word:"гротеск", cat:"common"},
  {word:"грохот", cat:"common"},
  {word:"грош", cat:"common"},
  {word:"грубость", cat:"common"},
  {word:"груз", cat:"common"},
  {word:"грузовик", cat:"easy"},
  {word:"грузооборот", cat:"common"},
  {word:"грунт", cat:"common"},
  {word:"группа", cat:"common"},
  {word:"грусть", cat:"common"},
  {word:"грыжа", cat:"uncommon"},
  {word:"дань", cat:"common"},
  {word:"дар", cat:"common"},
  {word:"дарвинизм", cat:"common"},
  {word:"дебют", cat:"easy"},
  {word:"девальвация", cat:"common"},
  {word:"девиация", cat:"common"},
  {word:"девиз", cat:"common"},
  {word:"дегустация", cat:"common"},
  {word:"дед", cat:"easy"},
  {word:"дедукция", cat:"common"},
  {word:"декада", cat:"common"},
  {word:"декаданс", cat:"common"},
  {word:"дело", cat:"common"},
  {word:"делопроизводство", cat:"common"},
  {word:"дельтаплан", cat:"easy"},
  {word:"демагогия", cat:"common"},
  {word:"демиург", cat:"common"},
  {word:"демография", cat:"common"},
  {word:"демократия", cat:"common"},
  {word:"демон", cat:"easy"},
  {word:"демонополизация", cat:"common"},
  {word:"демонстрация", cat:"common"},
  {word:"демонтаж", cat:"common"},
  {word:"день", cat:"common"},
  {word:"деньги", cat:"common"},
  {word:"департамент", cat:"common"},
  {word:"депо", cat:"common"},
  {word:"депозит", cat:"common"},
  {word:"депортация", cat:"common"},
  {word:"депрессия", cat:"common"},
  {word:"депутат", cat:"common"},
  {word:"попугай", cat:"easy"},
  {word:"популизм", cat:"common"},
  {word:"популяризация", cat:"common"},
  {word:"популярность", cat:"common"},
  {word:"попустительство", cat:"common"},
  {word:"попутчик", cat:"common"},
  {word:"попытка", cat:"common"},
  {word:"пух", cat:"easy"},
  {word:"пуховик", cat:"easy"},
  {word:"пучина", cat:"common"},
  {word:"пучок", cat:"common"},
  {word:"пушинка", cat:"common"},
  {word:"пушка", cat:"easy"},
  {word:"пуща", cat:"common"},
  {word:"пшеница", cat:"common"},
  {word:"пшено", cat:"common"},
  {word:"пыж", cat:"uncommon"},
  {word:"пыл", cat:"common"},
  {word:"пыль", cat:"common"},
  {word:"работа", cat:"common"},
  {word:"работорговля", cat:"common"},
  {word:"работоспособность", cat:"common"},
  {word:"рабство", cat:"common"},
  {word:"раввин", cat:"common"},
  {word:"равенство", cat:"easy"},
  {word:"равнение", cat:"common"},
  {word:"равнина", cat:"common"},
  {word:"равновесие", cat:"common"},
  {word:"равноденствие", cat:"uncommon"},
  {word:"равнодушие", cat:"common"},
  {word:"равнозначность", cat:"common"},
  {word:"равномерность", cat:"common"},
  {word:"равноправие", cat:"common"},
  {word:"равноценность", cat:"common"},
  {word:"рагу", cat:"common"},
  {word:"радар", cat:"easy"},
  {word:"радение", cat:"uncommon"},
  {word:"раджа", cat:"uncommon"},
  {word:"радиан", cat:"uncommon"},
  {word:"радиатор", cat:"easy"},
  {word:"радиация", cat:"easy"},
  {word:"радикализм", cat:"uncommon"},
  {word:"радикулит", cat:"uncommon"},
  {word:"радио", cat:"common"},
  {word:"радиоактивность", cat:"common"},
  {word:"радиовещание", cat:"common"},
  {word:"радиоволна", cat:"common"},
  {word:"радиус", cat:"easy"},
  {word:"радость", cat:"common"},
  {word:"радуга", cat:"easy"},
  {word:"радушие", cat:"common"},
  {word:"разбой", cat:"common"},
  {word:"разборка", cat:"common"},
  {word:"разброс", cat:"common"},
  {word:"разведка", cat:"common"},
  {word:"развенчивание", cat:"common"},
  {word:"развёртывание", cat:"common"},
  {word:"фашизм", cat:"common"},
  {word:"фаэтон", cat:"common"},
  {word:"февраль", cat:"easy"},
  {word:"человеколюбие", cat:"easy"},
  {word:"человечество", cat:"easy"},
  {word:"челюсть", cat:"easy"},
  {word:"чемпион", cat:"common"},
  {word:"чемпионат", cat:"common"},
  {word:"чепец", cat:"easy"},
  {word:"чепрак", cat:"uncommon"},
  {word:"чепуха", cat:"common"},
  {word:"червь", cat:"easy"},
  {word:"чердак", cat:"easy"},
  {word:"эрудиция", cat:"common"},
  {word:"эскадра", cat:"common"},
  {word:"эссе", cat:"common"},
  {word:"эстетика", cat:"common"},
  {word:"эстрада", cat:"common"},
  {word:"этаж", cat:"common"},
  {word:"эталон", cat:"common"},
  {word:"этанол", cat:"common"},
  {word:"этап", cat:"common"},
  {word:"этика", cat:"common"},
  {word:"этикет", cat:"common"},
  {word:"этимология", cat:"common"},
  {word:"этнография", cat:"common"},
  {word:"этнос", cat:"common"},
  {word:"эфир", cat:"common"},
  {word:"эффект", cat:"common"},
  {word:"эффективность", cat:"common"},
  {word:"эхо", cat:"common"},
  {word:"эхолот", cat:"uncommon"},
  {word:"эшафот", cat:"easy"},
  {word:"эшелон", cat:"common"},
  {word:"юбилей", cat:"common"},
  {word:"ювелир", cat:"common"},
  {word:"юдоль", cat:"uncommon"},
  {word:"южанин", cat:"common"},
  {word:"юз", cat:"uncommon"},
  {word:"юмор", cat:"common"},
  {word:"юнга", cat:"common"},
  {word:"юнкер", cat:"common"},
  {word:"юннат", cat:"common"},
  {word:"юность", cat:"common"},
  {word:"юноша", cat:"common"},
  {word:"юпитер", cat:"common"},
  {word:"юрисдикция", cat:"common"},
  {word:"юриспруденция", cat:"common"},
  {word:"юрист", cat:"common"},
  {word:"юродство", cat:"common"},
  {word:"юрта", cat:"easy"},
  {word:"юстировка", cat:"uncommon"},
  {word:"юстиция", cat:"common"},
  {word:"явление", cat:"common"},
  {word:"ягнятина", cat:"common"},
  {word:"ягода", cat:"easy"},
  {word:"ягуар", cat:"common"},
  {word:"яд", cat:"easy"},
  {word:"ядовитость", cat:"common"},
  {word:"язва", cat:"common"},
  {word:"языкознание", cat:"common"},
  {word:"язычество", cat:"common"},
  {word:"яичница", cat:"easy"},
  {word:"як", cat:"common"},
  {word:"ял", cat:"uncommon"},
  {word:"ямб", cat:"common"},
  {word:"ямщик", cat:"easy"},
  {word:"январь", cat:"easy"},
  {word:"янки", cat:"common"},
  {word:"янтарь", cat:"common"},
  {word:"янычар", cat:"common"},
  {word:"ярд", cat:"common"},
  {word:"яркость", cat:"common"},
  {word:"ярлык", cat:"easy"},
  {word:"ярмарка", cat:"common"},
  {word:"ярмо", cat:"easy"},
  {word:"ярость", cat:"common"},
  {word:"ярус", cat:"common"},
  {word:"ярь", cat:"uncommon"},
  {word:"ясень", cat:"uncommon"},
  {word:"ясли", cat:"common"},
  {word:"ясновидец", cat:"common"},
  {word:"ясность", cat:"common"},
  {word:"ястреб", cat:"easy"},
  {word:"ятаган", cat:"common"},
  {word:"яхонт", cat:"uncommon"},
  {word:"ячейка", cat:"common"},
  {word:"ячмень", cat:"common"},
  {word:"яшма", cat:"uncommon"},
  {word:"ящер", cat:"common"},
  {word:"ящик", cat:"easy"},
  {word:"ящур", cat:"uncommon"},
  {word:"ящурка", cat:"uncommon"},
];
