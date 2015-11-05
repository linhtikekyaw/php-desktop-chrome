<?php
/**
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.View.Layouts
 * @since         CakePHP(tm) v 0.10.0.1076
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */

$cakeDescription = __d('cake_dev', 'CakePHP: the rapid development php framework');
$cakeVersion = __d('cake_dev', 'CakePHP %s', Configure::version())
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html>
<head>
	<?php echo $this->Html->charset(); ?>
	<title>
		<?php echo $cakeDescription ?>:
		<?php echo $this->fetch('title'); ?>
	</title>
	<?php
		echo $this->Html->meta('icon');

		echo $this->Html->css(array('cake.generic','bootstrap.min','default','jquery.dataTables'));
		echo $this->fetch('meta');
		echo $this->fetch('css');
		echo $this->fetch('script');
	?>
	<?php echo $this->Html->script(array('jquery.min','bootstrap.min','bootswatch','jquery.dataTables.min','jquery.dataTables.min')); ?>
<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
</head>
<body class="" style="">
<!--
    <div class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid"">
        <div class="navbar-header">
          <a href="./" class="navbar-brand">販売管理者システム</a>
          <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="navbar-collapse collapse" id="navbar-main">
        </div>
      </div>
    </div>
-->
        <!-- /.row -->
    		<?php echo $this->Session->flash(); ?>

			<?php echo $this->fetch('content'); ?>
 </div>
      <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
          <div id="siteBottomInner" class="innerBox">
          </div>
        </div>
        <div id="siteBottom">
        <div id="siteBottomInner" class="innerBox">
        </div>
        </div>
      </div>
      </footer>
<div class="container">
<?php echo $this->element('sql_dump'); ?>
<?php echo $this->Html->script(array('common')); ?>
</div>
</body>
</html>
