exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://stav.davis:saltotBaavir22!@ds123976.mlab.com:23976/blog-app-mongoose';
exports.PORT = process.env.PORT || 8080;