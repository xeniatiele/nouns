fname = 'data/temporary_disabled.txt'
fout = 'data/temporary_disabled.js'


# * start

def process_case(word, fo):
    if word:
        s = f'  "{word}",'
        fo.write(s+'\n')


with open(fout, 'w', encoding='utf-8') as fo:
    fo.write('const temporary_disabled = [' + '\n')
    for line in open(fname, 'r', encoding='utf-8'):
        process_case(line.strip(), fo)
    fo.write('];' + '\n')
