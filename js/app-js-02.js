  const write = (s) => { document.write(s); };
  const elem = (id) => document.getElementById(id)

  let wordsList = [];

  const cats = ['easy', 'common', 'uncommon']

  const renderCheckbox = (cat) => {
    write('<div class="category">' +
      `<div onclick="checkBoxClickHandle(this)" id="id_${cat}" class="active">${cat}</div>` +
      '</div>\n'
    );
  }

  const checkBoxClickHandle = (ctx) => {
    ctx.classList.toggle('active')
    optionsChanged()
  };

  const renderHeader = () => {
    write('<div id="header">\n');
    for (const v of cats) {
      renderCheckbox(v);
    }
    write('<div><button id="btn" onclick="commandGen();">Gen</button></div>\n');
    write('</div>\n');
  };

  const renderApp = () => {
    write('<div id="app">\n');
    renderHeader();
    write('<textarea id="log" readonly></textarea>');
    write('</div>\n');
  };

  renderApp();

  const log = elem('log');
  const print = (s) => {
    log.value = s + '\n' + log.value
  };

  const getCats = () => {
    return cats.filter( v => elem('id_'+v).classList.contains('active'))
  };

  const filterWords = (cats) => {
    wordsList = words.filter(v => cats.includes(v.cat)
      && !temporary_disabled.includes(v.word));
  };

  const optionsChanged = () => {
    const cats = getCats();
    filterWords(cats);
    print(wordsList.length + ' words loaded: ' + cats)
  };

  const commandGen = () => {
    const limit = wordsList.length;
    if (!limit) { return; }
    const index = Math.floor(Math.random() * limit);
    const item = wordsList[index];
    print(`${item.word} (${item.cat})`);
  };

  // go!
  // const cats1 = getCats()
  // console.log(cats1)

  print(`words base from: ${version_date}`);
  print(`${temporary_disabled.length} words temporary disabled`);
  optionsChanged();
