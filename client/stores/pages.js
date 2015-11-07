module.exports = {
  pages: [
    {
      name: 'index',
      route: '/',
      layout: 'grid',
      columns: 5,
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
    }, {
      name: 'healer',
      route: '/healer',
      layout: 'fullscreen',
      source: 'images/healerPage.jpg'
    }, {
      name: 'seer',
      route: '/seer',
      layout: 'fullscreen',
      source: 'images/seerPage.jpg'
    }, {
      name: 'melete',
      route: '/melete',
      layout: 'fullscreen',
      source: 'images/meletePage.jpg'
    }
  ]
};
