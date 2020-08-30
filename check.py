from datetime import date

fname1 = 'data/nouns.txt'
fname2 = 'data/russian_nouns_without_filter.txt'
fname_added = 'data/added.txt'
fout = 'data/nouns1.txt'


# * start


def parse_line(line):
    (word, *description) = line.split(':')
    return word


def read_file_lines(fname):
    f = open(fname, 'r', encoding='utf-8')
    data = f.readlines()
    f.close()
    return data


def load_added():
    aa = []
    for line in open(fname_added, 'r', encoding='utf-8'):
        s = line.strip()
        if s:
            aa.append(s)
    return aa


def write_file_lines(fname, data):
    data1 = map(lambda v: v + '\n', data)
    f = open(fname, 'w', encoding='utf-8')
    f.writelines(data1)
    f.close()


added = load_added()
data1 = read_file_lines(fname1)
data2 = read_file_lines(fname2)
data = []

iter2 = iter(data2)
for v in data1:
    line = v.strip()
    word = parse_line(line)
    if word in added:
        print(f"1a:{line}")
        data.append(line)
        continue
    while True:
        word2 = next(iter2).strip()
        if word2 == word:
            break
        print(f"2:{word2}")
        data.append(word2)

    print(f"1:{line}")
    data.append(line)

# write_file_lines(fout, data)
