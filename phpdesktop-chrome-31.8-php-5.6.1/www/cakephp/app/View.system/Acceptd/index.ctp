<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3 class="panel-title"><span class="glyphicon glyphicon-bookmark"></span>受注入力</h3>
                </div>
                <div class="col-md-12">            
                          <div class="btn-group btn-group-justified">
						    <a href="#" class="btn btn-default"><-前</a>
						    <a href="#" class="btn btn-default">次-></a>
						    <a href="#" class="btn btn-default">更新</a>
						    <a href="#" class="btn btn-default">取消</a>
						    <a href="#" class="btn btn-default">閉じる</a>
						  </div>
						  <br><br><hr>
					 <div class="col-md-12 pull-left">
						  <table border="0" cellspacing="5" cellpadding="5">
						<tbody>
							<tr>
								<td>受注番号</td>
								<td><input type="text" id="" name="min" value=""></td>
							</tr>
						</tbody>
					</table>
					</div>
						 <div class="col-md-5 pull-left">
				<?php foreach($data as $key => $val){ print_r($data);?>
				
					<table border="0" cellspacing="5" cellpadding="5">
						<tbody>
							<tr>
								<td>見積番号</td>
								<td><input type="text" id="" name="min" value="<?php echo $data[$key]['Acceptd']['ESTNO']; ?>"></td>
							</tr>
							<tr>
								<td>得意先コード</td>
								<td><input type="text" id="code" name="max" value="<?php echo $data[$key]['Acceptd']['CUSTCD']; ?>"></td>
							</tr>
							<tr>
								<td>納入先コード</td>
								<td><input type="text" id="" name="min" value="<?php echo $data[$key]['Acceptd']['CUSTCD3']; ?>"></td>
							</tr>
							<tr>
								<td>納入先名</td>
								<td>
									<input type="text" id="" name="min" value="<?php echo $data[$key]['Acceptd']['CUSTNM3']; ?>">
								</td>
							</tr>
							<tr>
								<td>相手先発注番号</td>
								<td>
									<input type="text" id="" name="min" value="<?php echo $data[$key]['Acceptd']['CUATACCNO']; ?>">
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="col-md-5 pull-right">
					<table border="0" cellspacing="5" cellpadding="5">
						<tbody>
							<tr>
								<td>受注日</td>
								<td><input type="text" class="datetimepicker" id="min" name="min" value="<?php echo $data[$key]['Acceptd']['ACCDT']; ?>"></td>
							</tr>
							<tr>
								<td>納期</td>
								<td><input type="text" class="datetimepicker" name="min" value="<?php echo $data[$key]['Acceptd']['RETURNDT']; ?>"></td>
							</tr>
							<tr>
								<td>出荷予定日</td>
								<td><input type="text" class="datetimepicker" name="min" value="<?php echo $data[$key]['Acceptd']['SHIDT']; ?>"></td>
							</tr>
							<tr>
								<td>担当者</td>
								<td><input type="text" class="" name="min" value="<?php echo $data[$key]['Acceptd']['PERSONCD']; ?>"></td>
							</tr>
							<tr>
								<td>伝票備考</td>
								<td><input type="text" class="" name="min" value="<?php echo $data[$key]['Acceptd']['BIKO']; ?>"></td>
							</tr>
							<tr>
								<td>完了区分</td>
								<td>ACCKB
									<label><input type="radio" name="hyouka" value="good" checked="checked">未完</label>&nbsp;
									<label><input type="radio" name="hyouka" value="bad">完了</label>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
<?php } ?>
						  <table class="table table-striped table-bordered hover" style="table-layout:fixed" id="add_new">
							    <thead>
							      <tr>
							        <th rowspan="2">No</th>
							        <th>明細区部</th>
							        <th>商品コード</th>
							        <th>取り引き区分</th>
							        <th>担当者</th>
							        <th>自社担当者</th>
							        <th>自社担当者名</th>
							        <th>自社担当者</th>
							        <th rowspan="2">自社担当者名</th>
							      </tr>
							      <tr>
							        <th>税区分</th>
							        <th>商品コード</th>
							        <th>取り引き区分</th>
							        <th>担当者</th>
							        <th>自社担当者</th>
							        <th>自社担当者名</th>
							        <th>自社担当者</th>
							      </tr>
							    </thead>
							    <tbody>
							    <?php for($i=1;$i<=20;$i++){ ?>
							      <tr class="<?php echo $i; ?>">
							      	<td rowspan="2"><?php echo $i; ?></td>
									<td>cell</td>
									<td>cell1</td>
									<td>cell1</td>
									<td>cell1</td>
									<td>cell1</td>
									<td>cell1</td>
									<td>cell1</td>
									<td rowspan="2">cell1</td>
							      </tr>
							      <tr class="<?php echo $i; ?>">
									<td>cell1</td>
									<td>cell1</td>
									<td>cell1</td>
									<td>cell1</td>
									<td>cell1</td>
									<td>cell1</td>
									<td>cell1</td>
							      </tr>
								<?php } ?>
							    </tbody>
							  </table>
                </div>
            </div>
        </div>
    </div>
</div>
<?php echo $this->Html->script(array('item')); ?>