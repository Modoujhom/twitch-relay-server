const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 4000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    // Render assigns the port dynamically. process.env.PORT ensures it binds correctly!
    port: process.env.PORT || 10000,
    allow_origin: '*'
  },
  relay: {
    ffmpeg: '/usr/bin/ffmpeg',
    tasks: [
      {
        app: 'live',
        mode: 'push',
        // Replacing the hardcoded key with 'name' allows your dynamic key from Moblin/OBS to pass through
        edge: 'rtmp://live.twitch.tv/app/'
      }
    ]
  }
};

var nms = new NodeMediaServer(config);
nms.run();
