<?php
App::uses('AppModel', 'Model');
/**
 * Seminar Model
 *
 */
class Acceptd extends AppModel {

/**
 * Display field
 *
 * @var string
 */
	public $useTable = 't_acceptd';
	public $primaryKey = 'ID';

/*
	public $hasMany = array(
        'Acceptd' => array(
            'className' => 'Accepth',
            'foreignKey'    => 'ACCNO',
        )
    );
*/
}
