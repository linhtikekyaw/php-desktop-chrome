<?php
App::uses('AppController', 'Controller');
/**
 * Seminars Controller
 *
 */
class CustController extends AppController {


/**
 * Scaffold
 *
 * @var mixed
 */
	//public $scaffold;
	public function index() {
	
		$custkb = Configure::read('CUSTKB');	//Žæˆøæ‹æ•ª‚ÌÝ’è’l
		
        //action logic goes here..
        $custs=$this->Cust->find('all');
        $this->set('custs', $custs);
        $this->set('custkb', $custkb);
    }
    
    public function search($id) {
        //action logic goes here..
      
      
     $data = $this->Cust->findByCustcd($id);
     $data['cust']['CUSTLNM'] = $data['CUSTLNM'];
	 //print_r($data['Item']['ITEMCD']);
	 	header('Content-type: application/json');
		echo json_encode($data);
		$this->autoRender = false;
		exit;
      //print_r($accno);
      
    }

}
