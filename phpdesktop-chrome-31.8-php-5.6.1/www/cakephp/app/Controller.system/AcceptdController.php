<?php
# /app/Controller/RecipesController.php

class AcceptdController extends AppController {
//public $scaffold;
    public function index() {
        //action logic goes here..
      
		if(!empty($_GET['accno'])){
			$data = $this->Acceptd->find('all', array(
					'conditions' => array('Acceptd.ACCNO' => $_GET['accno'])
			));
		 	$this->set('data', $data);
		 	//print_r($data);
		}
    }

    public function share($customerId, $recipeId) {
        //action logic goes here..
    }

    public function search($query) {
        //action logic goes here..
    }
}