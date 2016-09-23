angular.module( 'DragAndDrop', [] )

.directive( 'dragMe', function ( $document ) {
  return {
    restrict: 'E'
    , link: function ( scope, elem, attr ) {
      var startX = 0, startY = 0, x = 0, y = 0;

      elem.css( {
        position: "relative"
        , border: "1px solid black"
        , backgroundColor: "lightgrey"
        , cursor: "pointer"
      } );

      elem.on( "mousedown", function ( event ) {
        event.preventDefault();
        startX = event.pageX - x;
        startY = event.pageY - y;

        $document.on( "mousemove", mouseMove );
        $document.on( "mouseup", mouseUp );
      } );

      function mouseMove ( event ) {
        y = event.pageY - startY;
        x = event.pageX - startX;
        elem.css( {
          top: y + "px"
          , left: x + "px"
        } );
      }

      function mouseUp() {
        $document.off( "mousemove", mouseMove );
        $document.off( "mouseup", mouseUp );
      }

    }
  }
} );
