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
    port: 10000,
    allow_origin: '*'
  },
  relay: {
    ffmpeg: '/usr/bin/ffmpeg',
    tasks: [
      {
        app: 'live',
        mode: 'push',
        edge: 'rtmp://live.twitch.tv/app/live_1238068816_utEriRNJTUAlQSmD4iwQhgjSeGbV3q'
      }
    ]
  }
};

var nms = new NodeMediaServer(config);
nms.run();
