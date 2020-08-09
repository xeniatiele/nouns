fn = 'data/nouns.txt'

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

test_cases = [
    'японоведение:4 a',
    'абаз',
    'ять:?',
    'яхтовладелец:0 a',
]

# * start
# init stats
count = 0
stats = dict(((v, 0) for v in categories))


def get_category(line):
    (word, *description) = line.split(':')
    # print(word, description)
    if not len(description):
        return 'none'

    (cat, *comments) = ''.join(description).split(' ')
    if cat not in base_categories:
        print(line, cat)
        return 'other'

    # else cat in base categories
    if cat not in ('?', 'block') and len(comments):
        cat += '+'

    return cat


def process_case(s):
    global count
    cat = get_category(s)
    if cat in stats:
        stats[cat] += 1
    else:
        print(s, cat)
    count += 1


def print_stats(data):
    for cat, count in data.items():
        if count:
            print(f"{cat}: {count}")


def test():
    for s in test_cases:
        process_case(s)

    print_stats(stats)


# * go!
# test()
# exit()

for line in open(fn):
    process_case(line.strip())

print_stats(stats)
