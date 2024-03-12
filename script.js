const videos = [
  {
    id: 'pgqwfZj9HPY',
    title: 'Fushimi Inari Taisha Shrine',
  },
  {
    id: 'Op-lf2NRMzs',
    title: 'Arashiyama Bamboo forest',
  },
  {
    id: 'jqtsC5BYlIk',
    title: 'Saga Arashiyama main street',
  },
  {
    id: 'wuC8wRvXock',
    title: 'Nishiki Market',
  },
  {
    id: 'Gxt3YCa2Phc',
    title: 'Nene no michi (Nene Street)',
  },
  {
    id: 'PXg3ZXgMkGk',
    title: 'Hanamikoji Street',
  },
  {
    id: 'S6IkZhhwG4A',
    title: 'Philosopher’s Path',
  },
  {
    id: 'v9rQqa_VTEY',
    title: 'Station Bus Terminal',
  },
];

const renderVideos = () => {
  const videosContainer = document.getElementById('js-videos-container');

  videos.forEach(video => {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${video.id}?&autoplay=1&mute=1&controls=0`;
    iframe.frameborder = 0;
    iframe.allowfullscreen = true;
    iframe.className = 'yt-embed';
    iframe.title = video.title;
    iframe.loading = 'lazy';
    const div = document.createElement('div');
    div.className = 'grid-item';
    const h2 = document.createElement('h2');
    h2.textContent = video.title;
    h2.className = 'video-title';
    div.appendChild(h2);
    div.appendChild(iframe);
    videosContainer.appendChild(div);
  });
};

window.addEventListener('load', renderVideos);
