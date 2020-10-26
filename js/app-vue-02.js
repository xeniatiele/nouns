  const elem = (id) => document.getElementById(id)
  const log = elem('log');
  const print = (s) => {
    log.value = s + '\n' + log.value
  };

  let wordsList = [];

  const cats = ['easy', 'common', 'uncommon']

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

  const Nouns = {
    data() {
      return {
        cats: cats,
        changeHandle: optionsChanged,
      }
    },
    methods: {
      catChange() {
        console.log('catChange')
        this.changeHandle()
      }
    }
  };

  const app = Vue.createApp(Nouns)

  app.component('check-box', {
    props: ['title'],
    emits: ['change'],
    data() {
      return {checked: true}
    },
    methods: {
      onClick() {
        console.log('onClick', this.title)
        this.checked = !this.checked
        setTimeout(() => {this.$emit('change')},1)
      },
    },
    template: '<div @click="onClick()" :id="\'id_\' + title" :class=\'checked ? "active": ""\'>{{title}}</div>',
  })
  app.mount('#header')


  // go!
  // const cats1 = getCats()
  // console.log(cats1)

  print(`words base from: ${version_date}`);
  print(`${temporary_disabled.length} words temporary disabled`);
  optionsChanged();
