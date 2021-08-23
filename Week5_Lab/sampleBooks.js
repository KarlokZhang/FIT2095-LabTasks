const dayjs = require('dayjs');

dayjs().format();

const books = [
  {
    _id: '6121d291417d560b3b791e19',
    title: 'Why We Sleep',
    author: 'Matthew Walker',
    topic: 'Health',
    dop: '2017-10-03',
    summary:
      "Neuroscientist and sleep expert Matthew Walker provides a revolutionary exploration of sleep, examining how it affects every aspect of our physical and mental well-being. Charting the most cutting-edge scientific breakthroughs, and marshalling his decades of research and clinical practice, Walker explains how we can harness sleep to improve learning, mood and energy levels, regulate hormones, prevent cancer, Alzheimer's and diabetes, slow the effects of aging, and increase longevity. He also provides actionable steps towards getting a better night's sleep every night.",
  },
  {
    _id: '6121fef50f56c560fdf28a20',
    title: 'In Order to Live',
    author: 'Yeonmi Park',
    topic: 'Politic',
    dop: '2015-09-25',
    summary:
      "Human rights activist Park, who fled North Korea with her mother in 2007 at age 13 and eventually made it to South Korea two years later after a harrowing ordeal, recognized that in order to be 'completely free,' she had to confront the truth of her past. It is an ugly, shameful story of being sold with her mother into slave marriages by Chinese brokers, and although she at first tried to hide the painful details when blending into South Korean society, she realized how her survival story could inspire others. Moreover, her sister had also escaped earlier and had vanished into China for years, prompting the author to go public with her story in the hope of finding her sister.",
  },
  {
    _id: '6122337bfda3fe87990cb9d6',
    title: 'In Order to Live2',
    author: 'Yeonmi Park',
    topic: 'Politic',
    dop: '2015-09-26',
    summary:
      "Human rights activist Park, who fled North Korea with her mother in 2007 at age 13 and eventually made it to South Korea two years later after a harrowing ordeal, recognized that in order to be 'completely free,' she had to confront the truth of her past. It is an ugly, shameful story of being sold with her mother into slave marriages by Chinese brokers, and although she at first tried to hide the painful details when blending into South Korean society, she realized how her survival story could inspire others. Moreover, her sister had also escaped earlier and had vanished into China for years, prompting the author to go public with her story in the hope of finding her sister.",
  },
];

const booksForDisplay = books.map((book) => ({
  ...book,
  dop: dayjs(book.dop).format('DD/MM/YYYY'),
}));

console.log(booksForDisplay);
