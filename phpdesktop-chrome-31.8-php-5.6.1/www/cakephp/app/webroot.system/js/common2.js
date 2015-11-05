/*####################
 DataTable検索
#####################*/

$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min = Date.parse( $('#min').val(), 10 );
        var max = Date.parse( $('#max').val(), 10 );
        var age = Date.parse( data[4] ) || 0; // use data for the age column
 
        if ( ( isNaN( min ) && isNaN( max ) ) ||
             ( isNaN( min ) && age <= max ) ||
             ( min <= age   && isNaN( max ) ) ||
             ( age <= max   && age >= min ) )
        {
            return true;
        }
        return false;
    }
);
 
$(document).ready(function() {
			    var table =  $('#example').DataTable({
				"sScrollX": "100%",
				"sScrollXInner": "180%",
				"bScrollCollapse": true,
				"sPaginationType": "full_numbers",
				"iDisplayLength": 25,
			  "language": {
			   "url": "//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Japanese.json"
			  },
			  
			 });
			// #column3_search is a <input type="text"> element
			/*
			$('#code').on( 'keyup', function () {
			    table
			        .columns( 2 )
			        .search( this.value )
			        .draw();
			} );
			*/
			$('#search').on( 'click', function () {
			    table
			        .columns( 2 )
			        .search( $('#code').val() )
			        .draw();
			} );
			$(function() {
			    $( ".datetimepicker" ).datepicker({ dateFormat: 'yy-mm-dd' });
			  });
			  
			// Event listener to the two range filtering inputs to redraw on input
			    $('#min, #max').keyup( function() {
			        table.draw();
			    } );

			/*####################
			 Popup得意先コード処理
			#####################*/
			function PopupCenter(url, title, w, h) {
			    // Fixes dual-screen position                         Most browsers      Firefox
			    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
			    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

			    width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
			    height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

			    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
			    var top = ((height / 2) - (h / 2)) + dualScreenTop;
			    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

			    // Puts focus on the newWindow
			    if (window.focus) {
			        newWindow.focus();
			    }
			}
			$("#code").dblclick(function () {
			    var popup = PopupCenter('./cust','xtf','1000','600');  
			        popup.focus();
			});

			$('#example tbody#data_pass tr').click(function() {
				if (window.opener != null && !window.opener.closed) {
			            var code = window.opener.document.getElementById("code");
			            code.value = $(this).find(".data").data( "custcd");
			        }
			        window.close();
			});
			/*####################
			 
			#####################*/
			$("#example tbody tr").click(function() {
			    $(this).closest("tr").siblings().removeClass("active");
			    $(this).toggleClass("active");
			  })
			$("#example tbody tr").click(function () {
			var data = Array();
			    
			$("table tr.active").each(function(i, v){
			    data[i] = Array();
			    $(this).children('td').each(function(ii, vv){
			        data[i][ii] = $(this).text();
			    });
			});
			});
			$(document).scroll(function() {  // OR  $(window).scroll(function() {
			    didScroll = true;
			});
			/*####################
			 受注入力編集処理
			#####################*/
			$('.edit').click(function() {
				var accno=$('tr.active>td').attr("data-accno");
				window.location.href='accepth/edit/'+accno;
			})
			/*####################
			 データpost処理
			#####################*/
			$("#update").click(function() {
    		var LINCLS=new Array();
    		var ITEMCD=new Array();
    		var CAQTY=new Array();
    		var IRQTY=new Array();
    		var SALPRC=new Array();
    		var ACCNO=new Array();
    		var TAXKB=new Array();
    		var ITEMNM2=new Array();
    		var BAQTY=new Array();
    		var UNIT=new Array();
    		var PRC=new Array();
    		var BIKO2=new Array();
    		var BIKO1=new Array();
    			$( ".LINCLS" ).each(function( index ) {
    				LINCLS.push($( this ).text());
 					
				});
				$( ".ITEMCD" ).each(function( index ) {
    				ITEMCD.push($( this ).text());
 					
				});
				$( ".CAQTY" ).each(function( index ) {
    				CAQTY.push($( this ).text());
 					
				});
				$( ".IRQTY" ).each(function( index ) {
    				IRQTY.push($( this ).text());
 					
				});
				$( ".SALPRC" ).each(function( index ) {
    				SALPRC.push($( this ).text());
 					
				});
				$( ".ACCNO" ).each(function( index ) {
    				ACCNO.push($( this ).text());
 					
				});
				$( ".TAXKB" ).each(function( index ) {
    				TAXKB.push($( this ).text());
 					
				});
				$( ".ITEMNM2" ).each(function( index ) {
    				ITEMNM2.push($( this ).text());
 					
				});
				$( ".BAQTY" ).each(function( index ) {
    				BAQTY.push($( this ).text());
 					
				});
				$( ".UNIT" ).each(function( index ) {
    				UNIT.push($( this ).text());
 					
				});
				$( ".PRC" ).each(function( index ) {
    				PRC.push($( this ).text());
 					
				});
				$( ".BIKO2" ).each(function( index ) {
    				BIKO2.push($( this ).text());
 					
				});
				$( ".BIKO1" ).each(function( index ) {
    				BIKO1.push($( this ).text());
 					
				});
				
				/*################
				Ajax POST
				##################*/
				var arr={};
				var num = 0;
				
				$("#add_new tbody tr").each(function(){
					var i = $("#add_new tbody tr").index(this)+1;
					if(i % 2 == 1) {
						num++;
						arr[num]={};
					}
					$(this).find('.LINCLS,.ITEMCD,.CAQTY,.IRQTY,.SALPRC,.ACCNO,.TAXKB,.ITEMNM2,.BAQTY,.UNIT,.PRC.BIKO2,.BIKO1').each(function() {
						if($(this).attr('class')){
							arr[num][$(this).attr("class")]=$(this).html();
						}
					});
				});
		        console.log(arr);

				$.ajax({
		                type: "POST",
		                url:"",
		                data: arr,
		                success: function(J_data){
		                alert(J_data);
		                    // 処理を記述
		                    if(J_data.status == 'success'){
						        alert("登録しました!");
						    }else if(J_data.status == 'error'){
						        alert("登録出来ませんでした!");
						    }
		            		//location.reload();
		     
		                }
		            });
 
			});

	/*####################
	 受注入力 行追加
	#####################*/
	$(document).delegate(".add_record", "click", function(){
		var ptr = $(this).parents("tr").next();
		var record = ''
		record += '<tr>';
		record += '<td rowspan="2"></td>';
		record += '<td class="LINCLS"></td>';
		record += '<td class="ITEMCD"></td>';
		record += '<td class="ITEMNM1"></td>';
		record += '<td class="CAQTY"></td>';
		record += '<td class="IRQTY"></td>';
		record += '<td class="SALPRC"></td>';
		record += '<td class="AMT"></td>';
		record += '<td class="BIKO1"></td>';
		record += '<td rowspan="2"><button class="btn btn-primary add_record">追加</button><button class="btn btn-danger del_record">削除</button></td>';
		record += '</tr>';
		record += '<tr class="">';
		record += '<td class="TAXKB"></td>';
		record += '<td></td>';
		record += '<td class="ITEMNM2"></td>';
		record += '<td class="BAQTY"></td>';
		record += '<td class="UNIT"></td>';
		record += '<td class="PRC"></td>';
		record += '<td></td>';
		record += '<td class="BIKO2"></td>';
		record += '</tr>';

		ptr.after(record);
		var addtr1 = ptr.next();
		var addtr2 = addtr1.next();
		addtr1.children("td").attr({contenteditable: true});
		addtr2.children("td").attr({contenteditable: true});

		$("#add_new").setTableNumber();
	});

	/*####################
	 受注入力 行削除
	#####################*/
	$(document).delegate(".del_record", "click", function(){
		var tr1 = $(this).parents("tr");
		var tr2 = tr1.next();
		tr1.remove();
		tr2.remove();

		$("#add_new").setTableNumber();
	});

	/*####################
	 受注入力 行番号再振り
	#####################*/
	$.fn.setTableNumber = function() {
		var thisId = $(this).attr("id");
		var tr = $(this).find("tbody tr");
		tr.each(function(){
			var i = $("#" + thisId + " tbody tr").index(this);
			var num = (i/2+1);
			if(i % 2 == 0) {
				$(this).find("td:first-child").html(num);
				$(this).find("td:first-child").attr({contenteditable: false});
				$(this).find("td:last-child").attr({contenteditable: false});
			}
		});
	};

	$("#add_new").setTableNumber();

	/*####################
		 合計金額計算
		#####################*/
	document.getElementByClass("AMT").addEventListener("input", function() {
    alert("input event fired");
}, false);

} );
