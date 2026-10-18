import itemsData from '../../data/items.yaml';
import booksData from '../../data/books.yaml';
import guiToolsData from '../../data/gui.yaml';

const categories = [
  {
    id: 'Books',
    navLabel: 'Books',
    listType: 'bookCards',
    titleColor: '#e970aa',
    items: booksData.all,
  },
  {
    id: 'SVG',
    navLabel: 'SVG',
    listType: 'defaultCards',
    titleColor: '#ad8abf',
    items: itemsData.svg,
  },
  {
    id: 'Common',
    navLabel: 'Common',
    listType: 'defaultCards',
    titleColor: '#72a2cf',
    items: itemsData.common,
  },
  {
    id: 'CSS',
    navLabel: 'CSS',
    listType: 'defaultCards',
    titleColor: '#3fc3bf',
    items: itemsData.css,
  },
  {
    id: 'Canvas',
    navLabel: 'Canvas',
    listType: 'defaultCards',
    titleColor: '#67bc97',
    items: itemsData.canvas,
  },
  {
    id: 'Scroll',
    navLabel: 'Scroll',
    listType: 'defaultCards',
    titleColor: '#80b97e',
    items: itemsData.scroll,
  },
  {
    id: 'Text',
    navLabel: 'Text',
    listType: 'defaultCards',
    titleColor: '#acb253',
    items: itemsData.text,
  },
  {
    id: 'React',
    navLabel: 'React',
    listType: 'defaultCards',
    titleColor: '#ebc20d',
    items: itemsData.react,
  },
  {
    id: 'GUI',
    navLabel: 'With GUI',
    listType: 'guiCards',
    titleColor: '#ffae13',
    items: guiToolsData.all,
  },
];

export default categories;
