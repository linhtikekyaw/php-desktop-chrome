/*####################
 DataTable検索
#####################*/

$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min = Date.parse( $('#min').val(), 10 );
        var max = Date.parse( $('#max').val(), 10 );
        var age = Date.parse( data[5] ) || 0; // use data for the age column
 
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
				//"sScrollXInner": "300%",
				//"sScrollXInner": "300%",
				//"scrollY":        "500px",
        		//"scrollCollapse": true,
        		//"paging":         false,
        		"scrollY":        "300px",
        		"scrollCollapse": true,
				"iDisplayLength": 25,
				"dom": '<"top"iflp<"clear">><"scrollbar" t><"bottom"iflp<"clear">>',
			  "oColVis": {
            "buttonText": "表示列設定",
            "aiExclude": [ 0, 1 ]
        },
        "oLanguage": {
            "oPaginate": {
                "sFirst": "先頭",
                "sLast": "最後",
                "sNext": "次",
                "sPrevious": "前",
            },
            "sInfo": "_TOTAL_件を発見しました。(_START_件〜_END_件を表示しています。)",
            "sInfoEmpty": "0件を発見しました。(0件〜0件を表示しています。)",
            "sInfoFiltered": "_MAX_件に絞り込んでいます。",
            "sLengthMenu": "ページ毎に_MENU_件表示します",
            "sSearch": "検索:",
            "sZeroRecords": "該当レコードが見つかりませんでした。"
        },
			  
			 });
			  table.on( 'order.dt search.dt', function () {
        table.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
            cell.innerHTML = i+1;
        } );
    } ).draw();
			// #column3_search is a <input type="text"> element
			/*
			$('#code').on( 'keyup', function () {
			    table
			        .columns( 1 )
			        .search( this.value )
			        .draw();
			} );
			*/
			$('#kana').on( 'keyup', function () {
			    table
			        .columns( 2 )
			        .search( this.value )
			        .draw();
			} );
			$('#search').on( 'click', function () {
			    var code = $('#code').val(),
		        regex = '\\b' + code + '\\b';

		    	table.columns(3).search(regex, true, false).draw();
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
			$("#code").dblclick(function() {
			    var popup = PopupCenter('index.php/cust','xtf','1080','1080');  
			        //popup.focus();
			});
			//mobileダブルクリック
			
			$("#code").data("dblTap",true).click(function(){
				var popup = PopupCenter('/index.php/cust','xtf','1080','1080');  
						        //popup.focus();
			});
			$('.pop_up tbody').on( 'click', 'tr', function () {
			//alert($(this).html())
				if (window.opener != null && !window.opener.closed) {
			            var code = window.opener.document.getElementById("code");
			            var custname = window.opener.document.getElementById("custname");
			            code.value = $(this).find(".data").data( "custcd");
			            custname.value = $(this).find(".data").data( "custname");
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
				var accno=$('tr.active td:nth-child(2)').data("accno");
				if(accno !=undefined){
					window.location.href='/index.php/accepth/edit/'+accno;
				}else{
					alert('受注番号を選択してください。');
				}
			})
			/*####################
			 データpost処理
			#####################*/
			$("#update").click(function() {
    		
				/*Ajax POST*/
				var arr={};
				var arr2={};
				var num = 0;
				var accepth="Accepth";
				var acceptd="Acceptd";
				
				$("#add_new tbody tr").each(function(){
					var i = $("#add_new tbody tr").index(this)+1;
					if(i % 2 == 1) {
						num++;
						arr[num]={};
					}
					$(this).find('.LINCLS,.ITEMNM1,.ITEMCD,.CAQTY,.IRQTY,.SALPRC,.ACCNO,.TAXKB,.ITEMNM2,.BAQTY,.UNIT,.PRC.BIKO2,.BIKO1,.AMT').each(function() {
						if($(this).attr('class')){
							if($(this).attr('class')=='LINCLS' || $(this).attr('class')=='TAXKB'){
								arr[num][$(this).attr("class")]=$(this).find('select').val();
							}else{
								arr[num][$(this).attr("class")]=$(this).text();
							}
						}
					});
				});
				arr2={};
				$('.accepth').find('.ACCNO,.ESTNO,.CUSTCD,.CUSTCD3,.CUSTNM3,.CUATACCNO,.ACCDT,.RETURNDT,.SHIDT,.PERSONCD,.BIKO,.ENDKB,.TOTAL').each(function() {
						if($(this).attr('class')=='ENDKB'){	
							if($("input[name='ENDKB']:checked")){							
								arr2[$(this).attr("name")]=$("input[name='ENDKB']:checked").val();
							}
						} else {
							arr2[$(this).attr("name")]=$(this).val();
						}
						
					});
					//console.log(arr2);
				$.ajax({
		                type: "POST",
		                url:"../update",
		                data: {'Acceptd':arr,'Accepth':arr2},
		                success: function(J_data){
		                    // 処理を記述
		               //console.log(J_data);
		                    if(J_data.status == 'success'){
						        //alert("登録しました!");
						    }else if(J_data.status == 'error'){
						        //alert("登録出来ませんでした!");
						    }
		            		//location.reload();
		            		window.location.href = '/index.php/accepth/edit/'+J_data.accno+'?mes='+J_data.message;
		     
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
		record += '<td><SELECT name="LINCLS"><OPTION value="1" selected>受注</OPTION><OPTION value="5" >値引</OPTION><OPTION value="9" >ｺﾒﾝﾄ</OPTION></SELECT>		</td>';
		record += '<td><div class="ITEMCD" contenteditable = "true"></div></td>';
		record += '<td><div class="ITEMNM1" contenteditable = "true"></div></td>';
		record += '<td><div class="CAQTY" contenteditable = "true"></div></td>';
		record += '<td><div class="IRQTY" contenteditable = "true"></div></td>';
		record += '<td><div class="SALPRC" contenteditable = "true"></div></td>';
		record += '<td><div class="AMT" contenteditable = "true"></div></td>';
		record += '<td><div class="BIKO1" contenteditable = "true"></div></td>';
		record += '<td rowspan="2"><button class="btn btn-primary btn-xs add_record">追加</button><button class="btn btn-danger btn-xs del_record">削除</button></td>';
		record += '</tr>';
		record += '<tr>';
		record += '<td class="TAXKB"><SELECT name="TAXKB"><OPTION value="1" selected>課税対象</OPTION><OPTION value="2" >課税対象外</OPTION><OPTION value="9" >非課税</OPTION></SELECT></td>';
		record += '<td></td>';
		record += '<td><div class="ITEMNM2" contenteditable = "true"></div></td>';
		record += '<td><div class="BAQTY" contenteditable = "true"></div></td>';
		record += '<td><div class="UNIT" contenteditable = "true"></div></td>';
		record += '<td><div class="PRC" contenteditable = "true"></div></td>';
		record += '<td></td>';
		record += '<td><div class="BIKO2" contenteditable = "true"></div></td>';
		record += '</tr>';

		ptr.after(record);
		var addtr1 = ptr.next();
		var addtr2 = addtr1.next();
		//addtr1.children("td").attr({contenteditable: true});
		//addtr2.children("td").attr({contenteditable: true});
		//addtr2.children("td").attr({contenteditable: true});

		$("#add_new").setTableNumber();
	});

	/*####################
	 受注入力 行削除
	#####################*/
	$('#add_new ').on('click','.del_record', function() {
		var AMT = parseFloat($(this).parents('tr').find('.AMT').text());
		var total = parseFloat($('#total').val());
		     //alert(AMT);
		     if (!isNaN(AMT) && AMT.length !== 0) {
		      $('#total').val(total-AMT);
		      }
		});
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
		 金額計算
#####################*/
$('#add_new').on('keyup change','.CAQTY', function() {
	var sum = 0;
	var CAQTY = $(this).text();
	
	var location= $(this);
	var IRQTY = location.parents('tr').find('.IRQTY').text();
	var SALPRC = location.parents('tr').find('.SALPRC').text();
	var BAQTY =location.parents('tr').next('tr').find('.BAQTY').text();
	if(!(BAQTY)){
		BAQTY = 0;
	}
		         var combat = (parseFloat(CAQTY)*parseFloat(IRQTY))+parseFloat(BAQTY);
		         if (!isNaN(combat) && combat.length !== 0) {
		             sum += parseFloat(SALPRC)*(combat);
		         }
		         //alert(sum);
		     
		     location.parents('tr').find('.AMT').text(sum);
});
$('#add_new').on('keyup change','.BAQTY', function() {
	var sum = 0;
	var BAQTY = $(this).text();
	var location= $(this);
	var IRQTY = location.parents('tr').prev('tr').find('.IRQTY').text();
	var SALPRC = location.parents('tr').prev('tr').find('.SALPRC').text();
	var CAQTY =location.parents('tr').prev('tr').find('.CAQTY').text();
	if(!(CAQTY)){
		CAQTY = 0;
	}
		         var combat = combat = (parseFloat(CAQTY)*parseFloat(IRQTY))+parseFloat(BAQTY);
		         if (!isNaN(combat) && combat.length !== 0) {
		             sum += parseFloat(SALPRC)*(combat);
		         }
		         //alert(SALPRC);
		     
		     location.parents('tr').prev('tr').find('.AMT').text(sum);
});
	/*####################
		 合計金額計算
		#####################*/
		
		$('#add_new').on('keyup change','.ITEMCD', function() {
		var ITEMCD = $(this).html();
		var location= $(this);
		//alert(ITEMCD.length);
		if(ITEMCD.length===10){
			$.get("/index.php/item/index/"+ITEMCD,
			  function(data){
			    //リクエストが成功した際に実行する関数
			    //alert("Data Loaded: " + data.ITEMNM1);
			    var parentTag = $(this).parents('tr');
			    location.parents('tr').find('.ITEMNM1').html(data.ITEMNM1);
			    location.parents('tr').find('.IRQTY').html(data.IRI);
			    location.parents('tr').find('.SALPRC').html(data.SALECOSTPRC);
			    
			    //location.parent('tr').next('tr').find('.ITEMNM2').html(data.ITEMNM2);
			    location.parents('tr').next('tr').find('.PRC').html(data.SALECOSTPRC);
			    
			    var sum1 = 0;
				
				var CAQTY = location.parents('tr').find('.CAQTY').text();
				var IRQTY = location.parents('tr').find('.IRQTY').text();
				var SALPRC = location.parents('tr').find('.SALPRC').text();
				var BAQTY =location.parents('tr').next('tr').find('.BAQTY').text();
				if(!(BAQTY)){
					BAQTY = 0;
				}
				var combat = (parseFloat(CAQTY)*parseFloat(IRQTY))+parseFloat(BAQTY);
				if (!isNaN(combat) && combat.length !== 0) {
				 sum1 += parseFloat(SALPRC)*(combat);
				}
				//alert(sum);
		     
		     location.parents('tr').find('.AMT').text(sum1);
		     
		     var sum = 0;
		     $('#add_new').find('.AMT').each(function () {
		         var combat = $(this).text();
		         if (!isNaN(combat) && combat.length !== 0) {
		             sum += parseFloat(combat);
		         }
		     });
		     //alert('hi');
		     //$('#total').val(sum*8/100+sum );
		      $('#total').val(sum);
			    //alert(data);
			  }
			);
		}
		
		});
		
		$('#add_new ').on('keyup change','tbody td', function() {
		var sum = 0;
		     $('#add_new').find('.AMT').each(function () {
		         var combat = $(this).text();
		         if (!isNaN(combat) && combat.length !== 0) {
		             sum += parseFloat(combat);
		         }
		     });
		     //alert('hi');
		     //$('#total').val(sum*8/100+sum );
		      $('#total').val(sum);
		});
/*####################
		 閉じる、取消処理
		#####################*/
		$("#reset").click(function() {
		var accno = $('.ACCNO').val();
		$( "#dialog-confirm" ).dialog({
		      resizable: false,
		      height:140,
		      modal: true,
		      buttons: {
		        "ok": function() {
		          $( this ).dialog( "close" );
		          window.location.href='/index.php/accepth/edit/'+accno;
		        },
		        Cancel: function() {
		          $( this ).dialog( "close" );
		        }
		      }
				});
		});
		$("#close").click(function() {
			window.location.href='/index.php/accepth/';
		});
/*####################
		 
		#####################*/
		$('table').on('keyup change','#code', function() {
				var v = $(this).val();
				if(v.length==0){
					$('#custname').val('');
				}else{
					$.get("/index.php/cust/search/"+v,
			  			function(data){
			  				var cust_name= data.Cust.CUSTSNM;
				  				$('#custname').val(cust_name);
				  				//console.log(data);
			  			}
			  		);
			  		
				}
		});
} );
