const version_date="2020-09-05";
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
  {word:"август", cat:"easy"},
  {word:"авеню", cat:"common"},
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
  {word:"автобиография", cat:"common"},
  {word:"автобус", cat:"easy"},
  {word:"автоген", cat:"easy"},
  {word:"автограф", cat:"common"},
  {word:"автодром", cat:"uncommon"},
  {word:"автожир", cat:"uncommon"},
  {word:"автоклав", cat:"uncommon"},
  {word:"автократия", cat:"common"},
  {word:"автоматизация", cat:"common"},
  {word:"автоматизм", cat:"common"},
  {word:"автоматика", cat:"common"},
  {word:"автомеханик", cat:"common"},
  {word:"автономия", cat:"common"},
  {word:"автопарк", cat:"common"},
  {word:"автопилот", cat:"common"},
  {word:"автопокрышка", cat:"common"},
  {word:"автопортрет", cat:"common"},
  {word:"автопробег", cat:"common"},
  {word:"автор", cat:"easy"},
  {word:"автореферат", cat:"uncommon"},
  {word:"авторизация", cat:"common"},
  {word:"авторитаризм", cat:"common"},
  {word:"авторитет", cat:"common"},
  {word:"авторучка", cat:"easy"},
  {word:"автостоп", cat:"common"},
  {word:"автотранспорт", cat:"common"},
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
  {word:"агрокультура", cat:"uncommon"},
  {word:"агроном", cat:"common"},
  {word:"агукание", cat:"common"},
  {word:"ад", cat:"common"},
  {word:"адаптация", cat:"common"},
  {word:"адаптер", cat:"common"},
  {word:"адвентизм", cat:"uncommon"},
  {word:"адвокатура", cat:"common"},
  {word:"адгезия", cat:"uncommon"},
  {word:"адекватность", cat:"common"},
  {word:"аденома", cat:"uncommon"},
  {word:"адепт", cat:"common"},
  {word:"аджика", cat:"common"},
  {word:"администрирование", cat:"common"},
  {word:"адмиралтейство", cat:"uncommon"},
  {word:"адреналин", cat:"uncommon"},
  {word:"адрес", cat:"easy"},
  {word:"адюльтер", cat:"common"},
  {word:"ажиотаж", cat:"common"},
  {word:"азарт", cat:"common"},
  {word:"азимут", cat:"common"},
  {word:"азур", cat:"uncommon"},
  {word:"азы", cat:"common"},
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
  {word:"альт", cat:"uncommon"},
  {word:"альтернатива", cat:"common"},
  {word:"альтиметр", cat:"uncommon"},
  {word:"альтруизм", cat:"common"},
  {word:"амбар", cat:"easy"},
  {word:"амбиции", cat:"common"},
  {word:"амбразура", cat:"common"},
  {word:"амбулатория", cat:"common"},
  {word:"аммонал", cat:"uncommon"},
  {word:"амнистия", cat:"common"},
  {word:"амплитуда", cat:"common"},
  {word:"амулет", cat:"easy"},
  {word:"анабиоз", cat:"common"},
  {word:"анализ", cat:"common"},
  {word:"аналитика", cat:"common"},
  {word:"аналог", cat:"common"},
  {word:"аналогия", cat:"common"},
  {word:"анархия", cat:"common"},
  {word:"анатомия", cat:"common"},
  {word:"анафема", cat:"common"},
  {word:"анахронизм", cat:"uncommon"},
  {word:"ангар", cat:"easy"},
  {word:"анекдот", cat:"easy"},
  {word:"анестезия", cat:"common"},
  {word:"анимализм", cat:"uncommon"},
  {word:"анимизм", cat:"uncommon"},
  {word:"анкета", cat:"easy"},
  {word:"аномалия", cat:"common"},
  {word:"анонс", cat:"common"},
  {word:"антиподы", cat:"easy"},
  {word:"антисемитизм", cat:"easy"},
  {word:"антитела", cat:"uncommon"},
  {word:"антифашизм", cat:"common"},
  {word:"антрацит", cat:"uncommon"},
  {word:"антресоли", cat:"common"},
  {word:"апокриф", cat:"uncommon"},
  {word:"апология", cat:"uncommon"},
  {word:"апофеоз", cat:"common"},
  {word:"аппарат", cat:"common"},
  {word:"арахис", cat:"common"},
  {word:"арбалет", cat:"easy"},
  {word:"арбитраж", cat:"common"},
  {word:"аргон", cat:"uncommon"},
  {word:"аргумент", cat:"common"},
  {word:"ареал", cat:"common"},
  {word:"арена", cat:"easy"},
  {word:"аренда", cat:"common"},
  {word:"арест", cat:"easy"},
  {word:"аристократия", cat:"common"},
  {word:"арифметика", cat:"common"},
  {word:"арифмометр", cat:"easy"},
  {word:"ария", cat:"common"},
  {word:"аркада", cat:"uncommon"},
  {word:"арлекин", cat:"easy"},
  {word:"армада", cat:"common"},
  {word:"арматура", cat:"easy"},
  {word:"армирование", cat:"common"},
  {word:"армия", cat:"common"},
  {word:"армяк", cat:"uncommon"},
  {word:"аромат", cat:"common"},
  {word:"арсенал", cat:"easy"},
  {word:"артель", cat:"common"},
  {word:"артерия", cat:"common"},
  {word:"артикль", cat:"common"},
  {word:"артиллерия", cat:"common"},
  {word:"артистизм", cat:"common"},
  {word:"архаика", cat:"common"},
  {word:"археология", cat:"common"},
  {word:"архетип", cat:"common"},
  {word:"архив", cat:"easy"},
  {word:"архитектура", cat:"common"},
  {word:"арьергард", cat:"common"},
  {word:"асептика", cat:"common"},
  {word:"аскетизм", cat:"common"},
  {word:"аспирантура", cat:"common"},
  {word:"ассигнация", cat:"easy"},
  {word:"ассигнования", cat:"common"},
  {word:"ассимиляция", cat:"common"},
  {word:"ассистирование", cat:"common"},
  {word:"ассорти", cat:"common"},
  {word:"ассортимент", cat:"common"},
  {word:"ассоциация", cat:"common"},
  {word:"астероид", cat:"easy"},
  {word:"астрология", cat:"common"},
  {word:"астролябия", cat:"uncommon"},
  {word:"астронавтика", cat:"common"},
  {word:"асфальт", cat:"easy"},
  {word:"асфиксия", cat:"uncommon"},
  {word:"атавизм", cat:"uncommon"},
  {word:"атака", cat:"common"},
  {word:"атаман", cat:"common"},
  {word:"атеизм", cat:"common"},
  {word:"ателье", cat:"common"},
  {word:"атеросклероз", cat:"uncommon"},
  {word:"атипичность", cat:"common"},
  {word:"атлант", cat:"easy"},
  {word:"атлас", cat:"easy"},
  {word:"атлетика", cat:"easy"},
  {word:"атмосфера", cat:"easy"},
  {word:"атрибут", cat:"common"},
  {word:"атропин", cat:"uncommon"},
  {word:"атрофия", cat:"uncommon"},
  {word:"аттестация", cat:"common"},
  {word:"аттракцион", cat:"common"},
  {word:"аудиенция", cat:"common"},
  {word:"аудитор", cat:"common"},
  {word:"аудитория", cat:"common"},
  {word:"аукцион", cat:"easy"},
  {word:"афера", cat:"common"},
  {word:"афиширование", cat:"common"},
  {word:"афоризм", cat:"common"},
  {word:"аффект", cat:"common"},
  {word:"ацетон", cat:"uncommon"},
  {word:"аэробика", cat:"common"},
  {word:"аэродинамика", cat:"common"},
  {word:"аэродром", cat:"common"},
  {word:"аэрозоль", cat:"common"},
  {word:"аэроплан", cat:"common"},
  {word:"аэропорт", cat:"common"},
  {word:"аэростат", cat:"common"},
  {word:"баба", cat:"easy"},
  {word:"бабуин", cat:"common"},
  {word:"багаж", cat:"common"},
  {word:"багажник", cat:"easy"},
  {word:"багги", cat:"easy"},
  {word:"багет", cat:"common"},
  {word:"багор", cat:"common"},
  {word:"бадминтон", cat:"easy"},
  {word:"база", cat:"common"},
  {word:"базар", cat:"easy"},
  {word:"байка", cat:"common"},
  {word:"балаган", cat:"common"},
  {word:"барбарис", cat:"common"},
  {word:"барин", cat:"common"},
  {word:"баритон", cat:"common"},
  {word:"барк", cat:"uncommon"},
  {word:"барокко", cat:"uncommon"},
  {word:"барометр", cat:"common"},
  {word:"баронство", cat:"common"},
  {word:"баротравма", cat:"common"},
  {word:"баррель", cat:"easy"},
  {word:"баррикада", cat:"easy"},
  {word:"барс", cat:"easy"},
  {word:"бархан", cat:"common"},
  {word:"бархат", cat:"common"},
  {word:"барыш", cat:"common"},
  {word:"барьер", cat:"easy"},
  {word:"бас", cat:"common"},
  {word:"баскетбол", cat:"easy"},
  {word:"басня", cat:"common"},
  {word:"батончик", cat:"easy"},
  {word:"батрачество", cat:"common"},
  {word:"баул", cat:"easy"},
  {word:"бахилы", cat:"easy"},
  {word:"бахча", cat:"easy"},
  {word:"бацилла", cat:"easy"},
  {word:"башмак", cat:"easy"},
  {word:"баян", cat:"easy"},
  {word:"бдение", cat:"common"},
  {word:"бдительность", cat:"common"},
  {word:"бегство", cat:"common"},
  {word:"беда", cat:"easy"},
  {word:"бедствие", cat:"common"},
  {word:"беженство", cat:"common"},
  {word:"беллетристика", cat:"uncommon"},
  {word:"белок", cat:"common"},
  {word:"белошвейка", cat:"uncommon"},
  {word:"берданка", cat:"uncommon"},
  {word:"бердыш", cat:"uncommon"},
  {word:"береста", cat:"uncommon"},
  {word:"взятка", cat:"common"},
  {word:"виадук", cat:"uncommon"},
  {word:"вибрация", cat:"common"},
  {word:"винтаж", cat:"uncommon"},
  {word:"витамин", cat:"common"},
  {word:"виток", cat:"common"},
  {word:"витрина", cat:"common"},
  {word:"витязь", cat:"common"},
  {word:"вихор", cat:"common"},
  {word:"вихрь", cat:"common"},
  {word:"вклад", cat:"common"},
  {word:"вкус", cat:"common"},
  {word:"влага", cat:"common"},
  {word:"владение", cat:"common"},
  {word:"влажность", cat:"common"},
  {word:"власть", cat:"common"},
  {word:"влюблённость", cat:"common"},
  {word:"вменяемость", cat:"common"},
  {word:"вмятина", cat:"easy"},
  {word:"водка", cat:"common"},
  {word:"водоворот", cat:"common"},
  {word:"водоём", cat:"common"},
  {word:"водоизмещение", cat:"common"},
  {word:"водокачка", cat:"common"},
  {word:"водолаз", cat:"common"},
  {word:"водолей", cat:"common"},
  {word:"водолечение", cat:"common"},
  {word:"водомер", cat:"common"},
  {word:"водомерка", cat:"common"},
  {word:"водомёт", cat:"common"},
  {word:"водопад", cat:"common"},
  {word:"водопой", cat:"common"},
  {word:"водопровод", cat:"common"},
  {word:"водораздел", cat:"common"},
  {word:"водорез", cat:"common"},
  {word:"водосвятие", cat:"uncommon"},
  {word:"водосток", cat:"common"},
  {word:"водохранилище", cat:"common"},
  {word:"время", cat:"common"},
  {word:"времянка", cat:"common"},
  {word:"гать", cat:"uncommon"},
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
  {word:"жало", cat:"easy"},
  {word:"жанр", cat:"common"},
  {word:"жара", cat:"common"},
  {word:"жезл", cat:"easy"},
  {word:"железа", cat:"common"},
  {word:"железо", cat:"easy"},
  {word:"культура", cat:"common"},
  {word:"культуризм", cat:"common"},
  {word:"культуртрегерство", cat:"uncommon"},
  {word:"культя", cat:"easy"},
  {word:"кумовство", cat:"common"},
  {word:"купание", cat:"easy"},
  {word:"купе", cat:"easy"},
  {word:"купель", cat:"uncommon"},
  {word:"купечество", cat:"common"},
  {word:"куплет", cat:"easy"},
  {word:"купля", cat:"common"},
  {word:"купол", cat:"easy"},
  {word:"купон", cat:"easy"},
  {word:"купорос", cat:"uncommon"},
  {word:"купчая", cat:"common"},
  {word:"курабье", cat:"uncommon"},
  {word:"курага", cat:"easy"},
  {word:"курдюк", cat:"uncommon"},
  {word:"курение", cat:"easy"},
  {word:"курень", cat:"uncommon"},
  {word:"курилка", cat:"easy"},
  {word:"курлыкание", cat:"uncommon"},
  {word:"курорт", cat:"common"},
  {word:"курс", cat:"common"},
  {word:"курсы", cat:"common"},
  {word:"куртуазность", cat:"common"},
  {word:"курятина", cat:"easy"},
  {word:"курятник", cat:"easy"},
  {word:"кусачки", cat:"easy"},
  {word:"кусок", cat:"common"},
  {word:"куст", cat:"easy"},
  {word:"кустарность", cat:"common"},
  {word:"кутёж", cat:"common"},
  {word:"кутюрье", cat:"common"},
  {word:"кухня", cat:"easy"},
  {word:"кучер", cat:"easy"},
  {word:"кучность", cat:"uncommon"},
  {word:"кушак", cat:"uncommon"},
  {word:"лабиринт", cat:"easy"},
  {word:"лаборатория", cat:"common"},
  {word:"лава", cat:"easy"},
  {word:"лавочничество", cat:"uncommon"},
  {word:"лавр", cat:"easy"},
  {word:"лавра", cat:"uncommon"},
  {word:"лагерь", cat:"common"},
  {word:"лагуна", cat:"uncommon"},
  {word:"лад", cat:"uncommon"},
  {word:"ладан", cat:"uncommon"},
  {word:"ладонка", cat:"uncommon"},
  {word:"ладушки", cat:"common"},
  {word:"лазейка", cat:"common"},
  {word:"лазурь", cat:"uncommon"},
  {word:"ливень", cat:"common"},
  {word:"ливер", cat:"uncommon"},
  {word:"лига", cat:"common"},
  {word:"лигирование", cat:"uncommon"},
  {word:"лидерство", cat:"common"},
  {word:"лик", cat:"easy"},
  {word:"ликвидация", cat:"common"},
  {word:"ликвидность", cat:"uncommon"},
  {word:"ликёр", cat:"common"},
  {word:"ликование", cat:"common"},
  {word:"лилипут", cat:"easy"},
  {word:"лиман", cat:"common"},
  {word:"лимит", cat:"common"},
  {word:"лимонад", cat:"easy"},
  {word:"лимонка", cat:"easy"},
  {word:"лимузин", cat:"easy"},
  {word:"лингвистика", cat:"common"},
  {word:"линкор", cat:"common"},
  {word:"линолеум", cat:"common"},
  {word:"лист", cat:"common"},
  {word:"мальтузианство", cat:"uncommon"},
  {word:"мальчишество", cat:"common"},
  {word:"мальчишник", cat:"common"},
  {word:"мама", cat:"easy"},
  {word:"маман", cat:"common"},
  {word:"мамба", cat:"uncommon"},
  {word:"мамбо", cat:"uncommon"},
  {word:"мамонт", cat:"common"},
  {word:"манатки", cat:"uncommon"},
  {word:"манеры", cat:"common"},
  {word:"манжета", cat:"common"},
  {word:"маниакальность", cat:"uncommon"},
  {word:"манипуляция", cat:"common"},
  {word:"манифест", cat:"common"},
  {word:"мания", cat:"common"},
  {word:"манка", cat:"common"},
  {word:"манок", cat:"common"},
  {word:"манто", cat:"common"},
  {word:"манул", cat:"common"},
  {word:"мануфактура", cat:"common"},
  {word:"маоизм", cat:"uncommon"},
  {word:"маразм", cat:"common"},
  {word:"марал", cat:"uncommon"},
  {word:"марафон", cat:"common"},
  {word:"маргарин", cat:"common"},
  {word:"маренго", cat:"uncommon"},
  {word:"новолуние", cat:"common"},
  {word:"новоселье", cat:"common"},
  {word:"новость", cat:"easy"},
  {word:"новшество", cat:"common"},
  {word:"ногайка", cat:"easy"},
  {word:"нокаут", cat:"common"},
  {word:"нокдаун", cat:"uncommon"},
  {word:"ноктюрн", cat:"uncommon"},
  {word:"номенклатура", cat:"common"},
  {word:"номер", cat:"easy"},
  {word:"номинал", cat:"common"},
  {word:"номинация", cat:"uncommon"},
  {word:"нора", cat:"easy"},
  {word:"норма", cat:"common"},
  {word:"нормализация", cat:"common"},
  {word:"нормаль", cat:"uncommon"},
  {word:"норматив", cat:"common"},
  {word:"носка", cat:"common"},
  {word:"ностальгия", cat:"common"},
  {word:"ночник", cat:"common"},
  {word:"ночь", cat:"easy"},
  {word:"ноша", cat:"common"},
  {word:"обдув", cat:"common"},
  {word:"письменность", cat:"common"},
  {word:"план", cat:"common"},
  {word:"планка", cat:"easy"},
  {word:"пластик", cat:"common"},
  {word:"пластика", cat:"common"},
  {word:"плата", cat:"easy"},
  {word:"плато", cat:"common"},
  {word:"платформа", cat:"easy"},
  {word:"плач", cat:"easy"},
  {word:"плен", cat:"common"},
  {word:"пленум", cat:"uncommon"},
  {word:"плесень", cat:"common"},
  {word:"плеск", cat:"common"},
  {word:"плетение", cat:"common"},
  {word:"плетень", cat:"easy"},
  {word:"плеяда", cat:"uncommon"},
  {word:"плита", cat:"easy"},
  {word:"плов", cat:"common"},
  {word:"плод", cat:"easy"},
  {word:"пломбир", cat:"easy"},
  {word:"плоскогубцы", cat:"easy"},
  {word:"плот", cat:"easy"},
  {word:"плотина", cat:"easy"},
  {word:"плоть", cat:"common"},
  {word:"плутовство", cat:"common"},
  {word:"плутократия", cat:"uncommon"},
  {word:"плутоний", cat:"common"},
  {word:"побег", cat:"easy"},
  {word:"победа", cat:"easy"},
  {word:"повеса", cat:"common"},
  {word:"поворот", cat:"easy"},
  {word:"попугай", cat:"easy"},
  {word:"популизм", cat:"common"},
  {word:"популяризация", cat:"common"},
  {word:"популярность", cat:"common"},
  {word:"попустительство", cat:"common"},
  {word:"попутчик", cat:"common"},
  {word:"попытка", cat:"common"},
  {word:"послание", cat:"common"},
  {word:"последовательность", cat:"common"},
  {word:"пословица", cat:"common"},
  {word:"послушание", cat:"common"},
  {word:"пособничество", cat:"common"},
  {word:"посольство", cat:"common"},
  {word:"посох", cat:"easy"},
  {word:"поспешность", cat:"common"},
  {word:"посрамление", cat:"common"},
  {word:"посредничество", cat:"common"},
  {word:"посредственность", cat:"common"},
  {word:"пост", cat:"common"},
  {word:"постель", cat:"easy"},
  {word:"постриг", cat:"uncommon"},
  {word:"постулат", cat:"uncommon"},
  {word:"поступок", cat:"common"},
  {word:"поступь", cat:"common"},
  {word:"постылость", cat:"uncommon"},
  {word:"посуда", cat:"easy"},
  {word:"посылка", cat:"easy"},
  {word:"посягательство", cat:"common"},
  {word:"потакание", cat:"uncommon"},
  {word:"потворство", cat:"common"},
  {word:"потенциал", cat:"common"},
  {word:"потепление", cat:"common"},
  {word:"потеря", cat:"common"},
  {word:"потеха", cat:"common"},
  {word:"поток", cat:"easy"},
  {word:"потолок", cat:"easy"},
  {word:"потомство", cat:"easy"},
  {word:"потоп", cat:"easy"},
  {word:"потребление", cat:"common"},
  {word:"потрошение", cat:"uncommon"},
  {word:"потуги", cat:"common"},
  {word:"поучение", cat:"common"},
  {word:"похищение", cat:"common"},
  {word:"похмелье", cat:"common"},
  {word:"поход", cat:"common"},
  {word:"походка", cat:"common"},
  {word:"почерк", cat:"common"},
  {word:"почёт", cat:"common"},
  {word:"почка", cat:"common"},
  {word:"почта", cat:"easy"},
  {word:"почтение", cat:"common"},
  {word:"пошив", cat:"common"},
  {word:"пошлина", cat:"common"},
  {word:"поэзия", cat:"common"},
  {word:"поясница", cat:"easy"},
  {word:"правда", cat:"easy"},
  {word:"правило", cat:"common"},
  {word:"правительство", cat:"common"},
  {word:"правка", cat:"common"},
  {word:"право", cat:"common"},
  {word:"православие", cat:"common"},
  {word:"правоспособность", cat:"uncommon"},
  {word:"правосудие", cat:"uncommon"},
  {word:"прагматизм", cat:"common"},
  {word:"праздник", cat:"common"},
  {word:"праздность", cat:"common"},
  {word:"практика", cat:"common"},
  {word:"превосходство", cat:"common"},
  {word:"предательство", cat:"common"},
  {word:"предвидение", cat:"common"},
  {word:"предводительство", cat:"uncommon"},
  {word:"предвосхищение", cat:"uncommon"},
  {word:"предел", cat:"common"},
  {word:"пуля", cat:"easy"},
  {word:"пума", cat:"common"},
  {word:"пункт", cat:"common"},
  {word:"пунктир", cat:"easy"},
  {word:"пункция", cat:"uncommon"},
  {word:"пунш", cat:"uncommon"},
  {word:"пупс", cat:"common"},
  {word:"пурга", cat:"common"},
  {word:"пурпур", cat:"uncommon"},
  {word:"пуск", cat:"common"},
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
  {word:"хорей", cat:"uncommon"},
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
  {word:"эскиз", cat:"common"},
  {word:"эспаньолка", cat:"easy"},
  {word:"эссе", cat:"common"},
  {word:"эстакада", cat:"uncommon"},
  {word:"эстафета", cat:"easy"},
  {word:"эстетика", cat:"common"},
  {word:"эстрада", cat:"common"},
  {word:"этаж", cat:"common"},
  {word:"этажерка", cat:"easy"},
  {word:"эталон", cat:"common"},
  {word:"этанол", cat:"common"},
  {word:"этап", cat:"common"},
  {word:"этика", cat:"common"},
  {word:"этикет", cat:"common"},
  {word:"этимология", cat:"common"},
  {word:"этиология", cat:"uncommon"},
  {word:"этнография", cat:"common"},
  {word:"этнос", cat:"common"},
  {word:"этюд", cat:"uncommon"},
  {word:"эфемерность", cat:"common"},
  {word:"эфес", cat:"uncommon"},
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
  {word:"як", cat:"common"},
  {word:"ял", cat:"uncommon"},
  {word:"ямб", cat:"uncommon"},
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
  {word:"яровые", cat:"uncommon"},
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
