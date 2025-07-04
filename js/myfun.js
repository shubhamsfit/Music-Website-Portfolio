
  function changeVideo(videoId) {
    const player = document.getElementById('yt-player');
    player.src = `https://www.youtube.com/embed/${videoId}`;
  }


   const cursor = document.querySelector('.cursor');
    const trail = document.querySelector('.cursor-trail');

    let lastBurst = 0;
    const burstInterval = 40; // in ms (adjust for more or fewer particles)

    window.addEventListener('mousemove', e => {
      const x = e.clientX;
      const y = e.clientY;

      cursor.style.top = `${y}px`;
      cursor.style.left = `${x}px`;

      trail.style.top = `${y}px`;
      trail.style.left = `${x}px`;

      // Limit how fast burst particles appear
      const now = Date.now();
      if (now - lastBurst > burstInterval) {
        const burst = document.createElement('div');
        burst.className = 'cursor-burst';
        burst.style.top = `${y}px`;
        burst.style.left = `${x}px`;
        document.body.appendChild(burst);
        setTimeout(() => burst.remove(), 600);
        lastBurst = now;
      }
    });
