const cv = require('opencv');

cv.readImage('./img/pikachu.png', function (err, img) {
  if (err) {
    throw err;
  }

  const width = im.width();
  const height = im.height();

  if (width < 1 || height < 1) {
    throw new Error('Image has no size');
  }

  // do some cool stuff with img
  const WHITE = [255, 255, 255];
  let contours = img.contours();
  let largestContourImg;
  let largestArea = 0;
  let largestAreaIndex;

  for (let i = 0; i < contours.size(); i++) {
    if (contours.area(i) > largestArea) {
      largestArea = contours.area(i);
      largestAreaIndex = i;
    }
  }

  largestContourImg.drawContour(contours, largestAreaIndex, GREEN, thickness, lineType);

  // save img
  img.save('./img/result.png');
});
