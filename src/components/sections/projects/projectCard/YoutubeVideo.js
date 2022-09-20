const YoutubeVideo = (props) => {
  const { youtubeLink, title } = props;
  const regExp =
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|v=)([^#]*).*/;
  const videoId = youtubeLink.match(regExp)[2];
  return (
    <iframe
      width="100%"
      height="250px"
      loading="lazy"
      srcDoc={`<style>
    * {
    padding: 0;
    margin: 0;
    overflow: hidden;
    }
    
    body, html {
      height: 100%;
    }
    img {
      height: 250px;
      object-fit: cover;
    }

    img, svg {
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    
    svg {
      filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
      transition: all 250ms ease-in-out;
    }
    
    body:hover svg {
      filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
      transform: scale(1.2);
    }
  </style>
  <a href='https://www.youtube.com/embed/${videoId}?autoplay=1'>
    <img src='https://img.youtube.com/vi/${videoId}/maxresdefault.jpg' alt='Coffee Recipe Javascript Project'>
    <svg xmlns='http://www.w3.org/2000/svg' width='75' height='75' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>
  </a>
  `}
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default YoutubeVideo;
