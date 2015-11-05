<?php
App::uses('AppModel', 'Model');
/**
 * Seminar Model
 *
 */
class Accepth extends AppModel {

/**
 * Display field
 *
 * @var string
 */
 
 	public $primaryKey = 'ACCNO';
	public $useTable = 't_accepth';
	public $hasMany = array(
        'Acceptd' => array(
            'className'  => 'Acceptd',
            'foreignKey'    => 'ACCNO',
        )
    );
}
