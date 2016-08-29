'use strict';

module.exports = function(app) {
  app.controller('ImageController', function() {
    this.albums = [
      {
        albumId: 1,
        title: 'Villains',
        description: 'Should\'ve been in Suicide Squad.',
        showAlbum: false,
        viewThumbnail: false,
        viewList: true,
        fullsize: false,
        images: [
          {
            id: 1,
            title: 'Syndrome',
            description: '1337 N3RD R463.',
            url: 'http://img.lum.dolimg.com/v1/images/image_7b7a8d9b.jpeg',
            showFullsize: false
          },
          {
            id: 2,
            title: 'Lots\'O Huggin\'',
            description: 'Don\'t hug it out.',
            url: 'https://pbs.twimg.com/profile_images/1313971811/toy-story-3-lotso-bear_400x400.jpg',
            showFullsize: false
          },
          {
            id: 3,
            title: 'Sid Phillips',
            description: 'This kid needs Jesus.',
            url: 'https://pbs.twimg.com/profile_images/471625645483495424/v-JTwotY_400x400.jpeg',
            showFullsize: false
          },
          {
            id: 4,
            title: 'Lord Farquuad',
            description: 'The evilest (it\'s a word) of them all.',
            url: 'http://i1.kym-cdn.com/entries/icons/original/000/020/110/Dfdddddd.jpeg',
            showFullsize: false
          }
        ]
      },
      {
        albumId: 2,
        title: 'Heroes',
        description: 'Probably don\'t think they\'re heroes.',
        showAlbum: false,
        viewThumbnail: false,
        viewList: true,
        fullsize: false,
        images: [
          {
            id: 1,
            title: 'Mr. Incredible',
            description: 'World\'s greatest dad.',
            url: 'http://www.ipadforums.net/wallpapers/data/508/Mr_Incredible.png',
            showFullsize: false
          },
          {
            id: 2,
            title: 'Wall-E',
            description: 'EeeeEEeeEEEeeEEva',
            url: 'http://blog.zoolert.com/wp-content/uploads/2015/08/LEGO-WALL-E-4-nwm.jpg',
            showFullsize: false
          },
          {
            id: 3,
            title: 'Buzz Lightyear',
            description: 'To infinity...and beyond!',
            url: 'https://pbs.twimg.com/profile_images/703245394/buzz_400x400.png',
            showFullsize: false
          },
          {
            id: 4,
            title: 'Rafiki',
            description: 'Best ever.',
            url: 'https://i.ytimg.com/vi/mjYGB4uYgWw/maxresdefault.jpg',
            showFullsize: false
          }
        ]
      },

      {
        albumId: 3,
        title: 'Tears Be Gone',
        description: 'Virtual tissues for those real tears.',
        showAlbum: false,
        viewThumbnail: false,
        viewList: true,
        fullsize: false,
        images: [
          {
            id: 1,
            title: 'Corgi',
            description: 'If everyone owned one we\'d have world peace.',
            url: 'https://pbs.twimg.com/profile_images/378800000674268962/06ce58cab26c3a0daf80cf57e5acb29b_400x400.jpeg',
            showFullsize: false
          },
          {
            id: 2,
            title: 'Mighty Duck',
            description: 'Quack (x100000). You know the chant.',
            url: 'https://pbs.twimg.com/profile_images/606895434859094016/5GSYt-bm.jpg',
            showFullsize: false
          },
          {
            id: 3,
            title: 'Wilbur',
            description: 'Charlotte\'s Web anyone? Maybe some bacon?',
            url: 'https://pbs.twimg.com/profile_images/510510962571362306/mvKC5J3l.jpeg',
            showFullsize: false
          },
          {
            id: 4,
            title: 'Unknown',
            description: 'Don\'t know what this is, but LOL.',
            url: 'https://pbs.twimg.com/profile_images/489190886190755840/6Q8Xf_HJ_400x400.jpeg',
            showFullsize: false
          }
        ]
      }
    ];
  });
};
