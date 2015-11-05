<?php
# /app/Controller/RecipesController.php

class ItemController extends AppController {
//public $scaffold;
    public function index($id) {
        //action logic goes here..
      
      
     $data = $this->Item->findByItemcd($id); 
     
     $data['Item']['IRI'] = floor($data['Item']['IRI']);
     $data['Item']['SALECOSTPRC'] = sprintf("%01.2f",$data['Item']['SALECOSTPRC']);
     
	 //print_r($data['Item']['ITEMCD']);
	 	header('Content-type: application/json');
		echo json_encode($data['Item']);
		$this->autoRender = false;
		exit;
      //print_r($accno);
      
    }

    public function share($customerId, $recipeId) {
        //action logic goes here..
    }

    public function search($query) {
        //action logic goes here..
    }
}