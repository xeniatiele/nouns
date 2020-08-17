from datetime import date

fname = 'data/nouns.txt'
fout = 'data/words.js'

categories = (
    'none',
    '0', '0+',
    '1', '1+',
    '2', '2+',
    '3', '3+',
    '4', '4+',
    '5', '5+',
    '6', '6+',
    '7', '7+',
    '8', '8+',
    '9', '9+',
    '?',
    'block',
    'other',
)

base_categories = ('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '?', 'block')

filter_categories = {'1': 'easy', '2': 'common', '6': 'uncommon'}

test_cases = [
    'японоведение:4 a',
    'абаз',
    'ять:?',
    'яхтовладелец:0 a',
]

# * start


def parse_line(line):
    (word, *description) = line.split(':')
    # print(word, description)
    if not len(description):
        return word, 'none'

    (cat, *comments) = ''.join(description).split(' ')
    if cat not in base_categories:
        print(line, cat)
        return word, 'other'

    # else cat in base categories
    if cat not in ('?', 'block') and len(comments):
        cat += '+'

    return word, cat


def process_case(line, fo):
    (word, cat) = parse_line(line)
    group = filter_categories.get(cat, None)
    if group:
        s = f'  {{word:"{word}", cat:"{group}"}},'
        fo.write(s+'\n')


timestamp = date.today().strftime("%Y-%m-%d")
with open(fout, 'w', encoding='utf-8') as fo:
    # timestamp =
    fo.write(f'const version_date="{timestamp}";\n')
    fo.write('const words = [' + '\n')
    for line in open(fname, 'r', encoding='utf-8'):
        process_case(line.strip(), fo)
    fo.write('];' + '\n')
