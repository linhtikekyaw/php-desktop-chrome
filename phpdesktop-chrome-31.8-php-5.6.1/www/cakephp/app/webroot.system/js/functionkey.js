$(document).ready(function() {

    // IE判定
    if (document.all) {
        // ヘルプをつぶす
        window.onhelp = function() {
            return false;
        }
    }

    $(document).keydown(function(e) {

        var cd = parseInt(e.keyCode, 10);

        if (!isNaN(cd) && cd >= 112 && cd <= 123) {

            // IE判定
            if (document.all) {
                // デフォルトブラウザイベントをつぶす
                window.event.keyCode = 0;
            }

            // jQueryのイベントをつぶす処理
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();

            switch (cd) {
            case 112:
				//alert('F1');
                break;
            case 113:
                //alert('F2');
                break;
            case 114:
                //alert('F3');
                window.location.href = '/cakephp/accepth/edit/';
                break;
            case 115:
                //alert('F4');
                break;
            case 116:
                //alert('F5');
                break;
            case 117:
                //alert('F6');
                break;
            case 118:
                //alert('F7');
                break;
            case 119:
                //alert('F8');
                break;
            case 120:
                //alert('F9');
                break;
            case 121:
                //alert('F10');
                break;
            case 122:
                //alert('F11');
                break;
            case 123:
                //alert('F12');
                break;
            }

            return false;
        }

    });

});