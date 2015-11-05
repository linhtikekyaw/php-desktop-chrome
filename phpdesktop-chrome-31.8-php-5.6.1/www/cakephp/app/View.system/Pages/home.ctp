<h1>Home</h1>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <a href="./index.php/accepth/edit" class="btn btn-primary btn-lg btn-block btn-huge">受注入力</a>
        </div>
        <div class="col-md-12">
            <a href="./index.php/cust/" class="btn btn-primary btn-lg btn-block btn-huge">取り引き先一覧</a>
        </div>
        <div class="col-md-12">
            <a href="./index.php/accepth/" class="btn btn-primary btn-lg btn-block btn-huge">受注一覧</a>
        </div>
        <div class="col-md-12">
            <a href="../phpLiteAdmin_v1-9-6/phpliteadmin.php" class="btn btn-primary btn-lg btn-block btn-huge">mysqlite</a>
        </div>
	</div>
</div>
<?php echo $this->Html->link(
    'Dashboard',
    array(
        'controller' => 'accepth',
        'action' => 'edit',
        'full_base' => true
    )
); ?>