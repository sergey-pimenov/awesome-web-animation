export function detectSwipe(element, direction, callBack) {
  element.addEventListener('touchstart', handleTouchStart, false);
  element.addEventListener('touchmove', handleTouchMove, false);

  var xDown = null;
  var yDown = null;

  function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
  };

  function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
      if ( xDiff > 0 && direction == 'toLeft') {
        callBack();
      }
      if(xDiff < 0 && direction == 'toRight') {
        callBack();
      }
    } else {
      if ( yDiff > 0 && direction == 'toTop') {
        callBack();
      }
      if ( yDiff < 0 && direction == 'toBottom') {
        callBack();
      }
    }
      /* reset values */
      xDown = null;
      yDown = null;
    };
}