<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3 class="panel-title"><span class="glyphicon glyphicon-bookmark"></span>取り引き先一覧</h3>
                </div>
                <div class="col-md-12">            
                          <div class="btn-group btn-group-justified">
						    <a href="#" class="btn btn-default">検索</a>
						    <a href="#" id="add_new" class="btn btn-default">新規</a>
						    <a href="#" class="btn btn-default">修正</a>
						    <a href="#" class="btn btn-default">削除</a>
						    <a href="#" class="btn btn-default">コピー</a>
						    <a href="#" class="btn btn-default">照会</a>
						    <a href="#" class="btn btn-default">印刷</a>
						    <a href="#" class="btn btn-default">CSV</a>
						    <a href="#" class="btn btn-default">締日印刷</a>
						    <a href="#" class="btn btn-default">取消</a>
						    <a href="#" class="btn btn-default">閉じる</a>
						  </div>
						  <div class="btn-group btn-group-justified">
						    <a href="#" class="btn btn-primary">F1</a>
						    <a href="#" class="btn btn-primary">F3</a>
						    <a href="#" class="btn btn-primary">F5</a>
						    <a href="#" class="btn btn-primary">F6</a>
						    <a href="#" class="btn btn-primary"></a>
						    <a href="#" class="btn btn-primary"></a>
						    <a href="#" class="btn btn-primary">F7</a>
						    <a href="#" class="btn btn-primary"></a>
						    <a href="#" class="btn btn-primary"></a>
						    <a href="#" class="btn btn-primary">F11</a>
						    <a href="#" class="btn btn-primary">F12</a>
						  </div>
				<div class="panel panel-default half_input">
					<div class="panel-heading clearfix">
						<div class="box pull-left">
							<table border="0" cellspacing="5" cellpadding="5">
						<tbody>
							<tr>
								<th>取引先区分</th>
								<td>
									<SELECT>
									<?php foreach($consts['CUSTKB'] as $key => $val): ?>
										<OPTION value="<?php echo $key; ?>" <?php echo $key=='0'?'selected':''; ?>><?php echo $val; ?></OPTION>
									<?php endforeach; ?>
									</SELECT>
								</td>
							</tr>
							<tr>
								<th>取引先コード</th>
								<td><input type="text" id="" name=""></td>
							</tr>
						</tbody>
					</table>
					<div class="btn-group">
						<button type="button" class="btn btn-default">ア</button>
						<button type="button" class="btn btn-default">カ</button>
						<button type="button" class="btn btn-default">サ</button>
						<button type="button" class="btn btn-default">タ</button>
						<button type="button" class="btn btn-default">ナ</button>
						<button type="button" class="btn btn-default">ハ</button>
						<button type="button" class="btn btn-default">マ</button>
						<button type="button" class="btn btn-default">ヤ</button>
						<button type="button" class="btn btn-default">ラ</button>
						<button type="button" class="btn btn-default">ワ</button>
						<button type="button" class="btn btn-default">ABC</button>
						<button type="button" class="btn btn-default">全</button>
					</div>
					<table border="0" cellspacing="5" cellpadding="5">
							<tr>
								<th>取引先カナ名</th>
								<td>
									<input type="text" id="kana" name="">
								</td>
							</tr>
						</tbody>
					</table>
						</div>
						<div class="box pull-right">
							<table border="0" cellspacing="5" cellpadding="5" >
						<tbody>
							<tr>
								<th>取引先担当者名</th>
								<td><input type="text" class="" id="" name=""></td>
							</tr>
							<tr>
								<th>分類１</th>
								<td>
									<SELECT>
										<OPTION value="2" selected>　　</OPTION>
										<OPTION value="1">　　</OPTION>
									</SELECT>
								</td>
							</tr>
							<tr>
								<th>分類２</th>
								<td>
									<SELECT>
										<OPTION value="2" selected>　　</OPTION>
										<OPTION value="1">　　</OPTION>
									</SELECT>
								</td>
							</tr>
						</tbody>
					</table>
						</div>
					</div>
				</div>
				
						  <table class="table table-bordered hover pop_up" style="table-layout:fixed" id="example">
							    <thead>
							      <tr class="bg-primary">
							        <th width="5px">No</th>
							        <th width="110px">取り引き先コード</th>
							        <th width="250px">フリガナ</th>
							        <th width="200px">取引先名</th>
							        <th width="80px">取引先区分</th>
							        <th width="100px">担当者</th>
							        <th width="100px">自社担当者</th>
							        <th width="200px">自社担当者名</th>
							        
							        <th width="100px">郵便番号</th>
							        <th width="300px">住所１</th>
							        <th width="300px">住所2</th>
							        <th width="100px">電話番号</th>
							        <th width="100px">FAX番号</th>
							        <th width="500px">備考１</th>
							        <th width="500px">備考２</th>
							        <th width="120px">更新日</th>
							      </tr>
							    </thead>
							    <tbody id="data_pass">
							    <?php  foreach($custs as $key => $val){ ?>
							    <?php //print_r($val);?>
							      <tr>
							        <td class="right"></td>
									<td class="data" data-custcd='<?php echo $val["Cust"]["CUSTCD"]; ?>' data-custname='<?php echo $val["Cust"]["CUSTSNM"]; ?>'><?php echo $val['Cust']['CUSTCD']; ?></td>
									<td><?php echo $val['Cust']['CUSTJNM']; ?></td>
									<td><?php echo $val['Cust']['CUSTSNM']; ?></td>
									<td><?php echo $consts['CUSTKB'][$val['Cust']['CUSTKB']]; ?></td>
									<td><?php echo $val['Cust']['CUSTPRSN']; ?></td>
									<td><?php echo $val['Cust']['PERSONCD']; ?></td>
									<td><?php echo $val['Cust']['CUSTSNM']; ?></td>
									
									<td><?php echo $val['Cust']['ZIPCD']; ?></td>
									<td><?php echo $val['Cust']['ADD1']; ?></td>
									<td><?php echo $val['Cust']['ADD2']; ?></td>
									<td><?php echo $val['Cust']['TELNO']; ?></td>
									<td><?php echo $val['Cust']['FAXNO']; ?></td>
									<td><?php echo $val['Cust']['BIKO1']; ?></td>
									<td><?php echo $val['Cust']['BIKO2']; ?></td>
									<td class="right"><?php echo $val['Cust']['UPDDT']; ?></td>
							      </tr>
							    <?php } ?>
							    </tbody>
							  </table>
                </div>
            </div>
        </div>
    </div>
</div>
