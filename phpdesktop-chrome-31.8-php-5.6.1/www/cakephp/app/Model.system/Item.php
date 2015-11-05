<?php
App::uses('AppModel', 'Model');
/**
 * Seminar Model
 *
 */
class Item extends AppModel {

/**
 * Display field
 *
 * @var string
 */
 
 	public $primaryKey = 'ITEMCD';
	public $useTable = 'm_item';
/*
	public $hasMany = array(
        'Accepth' => array(
            'className'  => 'Item',
            'foreignKey'    => 'ACCNO',
        )
    );
*/
}
