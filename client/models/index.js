module.exports = {
  name: 'Home',
  route: '/',
  layout: {
    type: 'Grid',
    columns: 5
  },
  items: [
    {
      name: 'healer',
      source: 'images/healerThumb.jpg',
      link: '/healer'
    }, {
      name: 'seer',
      source: 'images/seerThumb.jpg',
      link: '/seer'
    }, {
      name: 'melete',
      source: 'images/meleteThumb.jpg',
      link: '/melete'
    }
  ]
};
