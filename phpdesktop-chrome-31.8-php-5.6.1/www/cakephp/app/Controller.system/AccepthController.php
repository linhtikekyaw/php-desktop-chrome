<?php
# /app/Controller/RecipesController.php

class AccepthController extends AppController {
//public $scaffold;

	public $uses = array('Accepth','Acceptd','Cust');
	
    public function index() {
        //action logic goes here..
        $accepths=$this->Accepth->find('all');
        $custs=$this->Cust->find('all',
									array(
										'fields' => array('Cust.CUSTCD','Cust.CUSTSNM')));
		$company = array();
        foreach($custs as $key => $val){
        	$company[$val['Cust']['CUSTCD']] = $val['Cust']['CUSTSNM'];
        }

        $this->set('accepths', $accepths);
        $this->set('custs', $company);
    }

    public function share($customerId, $recipeId) {
        //action logic goes here..
    }

    public function search($query) {
        //action logic goes here..
    }
    
    public function edit($id=''){

		$message = '';
		if(!empty($_GET)){
			if(!empty($_GET['mes'])){
				if($_GET['mes'] == 1){
					$message = '登録しました。';
				} elseif($_GET['mes'] == 2){
					$message = '登録に失敗しました。';
				} else if($_GET['mes'] == 3){
					$message = '情報不足で、登録に失敗しました。';
				}
			}
		}

		$this->set('message', $message);
		
		if(!empty($id)){
			$accepth = $this->Accepth->findByAccno($id);
			if(!empty($accepth['Accepth']['CUSTCD'])){
				$custdata = $this->Cust->findByCustcd($accepth['Accepth']['CUSTCD']);
			} else {
				$custdata['Cust']['CUSTSNM'] = '';
			}
			
			if(count($accepth) > 0){
				$accepth['Accepth']['CUSTNM'] = $custdata['Cust']['CUSTSNM'];
				$this->set('data', $accepth);
			} else {
				$this->redirect(['controller'=>'accepth','action'=>'edit']);
			}
		} 
    }
    
    
    public function update(){
 		//$savedata = $this->Accepth->set($this->request->data['Accepth']);
		//$savedata = $this->Acceptd->set($this->request->data['Acceptd']);
		$savedata = $this->Accepth->set($this->request->data);
		//echo json_encode($_POST);

		//とりあえず得意先コードが無ければ登録しないようにしておく
		if($savedata['Accepth']['CUSTCD'] != "" OR !empty($savedata['Accepth']['CUSTCD'])){	

			$savedata['Accepth']['AMT'] = 0;
			$time = date('Y/m/d H:i:s');
			$d_num = 1;
			$setdata['Acceptd'] = array();
			
			if(!empty($savedata['Acceptd'])){
				foreach($savedata['Acceptd'] as $key => $val){
					if(!empty($val['ITEMCD'])){		//商品コードが入っていないものは登録しない					
						
						$setdata['Acceptd'][$d_num] = $savedata['Acceptd'][$key];
						
						//不足データの入力
						if(!empty($savedata['Accepth']['ACCNO'])){
							
							$setdata['Acceptd'][$d_num]['ACCNO'] = $savedata['Accepth']['ACCNO'];
							$setdata['Acceptd'][$d_num]['UPDPRG'] = '受注入力(fJYU_ENT0100)';
							$setdata['Acceptd'][$d_num]['UPDDT'] = $time;
						} 
						
						$setdata['Acceptd'][$d_num]['SEQNO'] = $d_num;
						$setdata['Acceptd'][$d_num]['LINENO'] = $d_num;
						$setdata['Acceptd'][$d_num]['INSPROG'] = '受注入力(fJYU_ENT0100)';
						$setdata['Acceptd'][$d_num]['INSDT'] = $time;
						
						$savedata['Accepth']['AMT'] += $savedata['Acceptd'][$key]['AMT'];
						$d_num++;
					}
					
				}
			}	
			//値があるデータ（商品コードから判断）のみの配列に入れ直したものへ入れ替え
			$savedata['Acceptd'] = $setdata['Acceptd'];
			
			if(!empty($savedata['Accepth']['ACCNO'])){
				$savedata['Accepth']['UPDPRG'] = '受注入力(fJYU_ENT0100)';
				$savedata['Accepth']['UPDDT'] = $time;
			} else {
				$savedata['Accepth']['INSPROG'] = '受注入力(fJYU_ENT0100)';
				$savedata['Accepth']['INSDT'] = $time;
			}

			if(!empty($savedata)){	//データが渡ってきたら
				
				$this->Acceptd->begin();	//Acceptdのトランザクション開始
				$this->Accepth->begin();	//Accepthのトランザクション開始

				if(!empty($savedata['Accepth']['ACCNO']) OR $savedata['Accepth']['ACCNO'] != ""){
					//受注番号に紐づいたAcceptdのデータを全削除
					$acceptd = $this->Acceptd->find('all',
									array(
										'conditions' => array('Acceptd.ACCNO' => $savedata['Accepth']['ACCNO'])));

					if(count($acceptd) > 0){	//1件以上あったら削除
						$this->Acceptd->deleteAll(array('Acceptd.ACCNO' => $savedata['Accepth']['ACCNO']));
					}
				}

				$result = $this->Accepth->saveALL($savedata);
				if($result != false){
					$this->Acceptd->commit();//コミット
					$this->Accepth->commit();//コミット
					$data['message'] = 1;	//成功
					$data['status'] = "success";
					
					if($savedata['Accepth']['ACCNO'] != ""){
						$data['accno'] = $savedata['Accepth']['ACCNO'];
					} else {
						$data['accno'] = $this->Accepth->getLastInsertID();
					}
				} else {
					$this->Acceptd->rollback();	//ロールバック
					$this->Accepth->rollback();	//ロールバック
					$data['message'] = 2;	//失敗A
					$data['status'] = "error";
					$data['accno'] = $savedata['Accepth']['ACCNO'];
				}

			}

		} else {
			$data['status'] = "error";
			$data['message'] = "入力情報不足です";
			$data['accno'] = $savedata['Accepth']['ACCNO'];
			$data['message'] = 3;	//失敗B
		}
		header('Content-type: application/json');
		echo json_encode($data);
		exit;
		$this->autoRender = false;
    	$this->autoLayout = false;

    }
   
}