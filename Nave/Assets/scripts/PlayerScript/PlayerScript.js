#pragma strict
var customGuiStyle : GUIStyle;
var customGuiStyle2 : GUIStyle;
var customGuiStyle3 : GUIStyle;
var customGuiStyle4 : GUIStyle;

static var jogadorVel:float = 50;
static var jogadorVida = 3;
static var tempLife;
static var score = 0;
static var maxScore = 0;
static var somaScore = 0;

//private var tempo_espera = 2;
static var estado = State.Jogando;
private var cont = 0;
static var fase = 0;
static var vertical;
var horizontal;
var windowRect0 : Rect = Rect (200, 200, 120, 50);
//var windowRect1 : Rect = Rect (20, 100, 120, 50);
//var windowRect : Rect = Rect (200, 200, 500, 500);

var posExplosao:Transform;
//var texturaFundo:Texture;


function Start(){

	estado = State.Jogando;
	ShadowGearScript.specialLife = 3;	
	tempLife = jogadorVida ;	
	
}


enum State{ 

	Jogando,
	Explodido,
	Invencivel,
	Ganhou,
	Invulneravel,
	ShadowGear,
	RedBaron
	
}

function Update () {

	print(fase);
	vertical = Input.GetAxisRaw("Vertical")*Time.deltaTime * (jogadorVel+20);
	horizontal = -Input.GetAxisRaw("Horizontal")*Time.deltaTime * jogadorVel;

	Movement();		
}

function pauseOn(){
	//pause												
	if(Input.GetKey(KeyCode.C) )
	{	
		Time.timeScale = 0.0;		          		
	
	}
}

function pauseOff(){

	if(Input.GetKey(KeyCode.V) ) 
	{
		Time.timeScale = 1.0;			
	}
}


function DoMyWindow (windowID : int) {

	//GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height),texturaFundo);
	
	GUIUtility.ScaleAroundPivot(new Vector2(Screen.width/1024f,Screen.height/768f),Vector2.zero);

	GUI.Label(Rect(Screen.width * 0.4,Screen.height * 0.01, Screen.width * 0.2, Screen.height * 0.2),"upgrades",customGuiStyle4);    
    
    GUI.Label(Rect(Screen.width * 0.4,Screen.height * 0.05, Screen.width * 0.2, Screen.height * 0.2),"score:  "+score,customGuiStyle4);   
         
   	//upgrades
    GUI.Label(Rect(Screen.width * 0.06,Screen.height * 0.25, Screen.width * 0.2, Screen.height * 0.2),"life:  "+jogadorVida,customGuiStyle3);
  
    GUI.Label(Rect(Screen.width * 0.06,Screen.height * 0.35, Screen.width * 0.2, Screen.height * 0.2),"Fire Rate:  "+ActionsScript.freqTiro,customGuiStyle3);
     
    GUI.Label(Rect(Screen.width * 0.05,Screen.height * 0.45, Screen.width * 0.2, Screen.height * 0.2),"shot:  "+ActionsScript.shotLevel,customGuiStyle3);
    
    GUI.Label(Rect(Screen.width * 0.05,Screen.height * 0.55, Screen.width * 0.2, Screen.height * 0.2),"barrier:  "+ActionsScript.barrierOn,customGuiStyle3);
    
    GUI.Label(Rect(Screen.width * 0.05,Screen.height * 0.65, Screen.width * 0.25, Screen.height * 0.2),"ShadowGear:  "+ActionsScript.specialAbility,customGuiStyle3);
       
    // add life
    if (GUI.Button(Rect(Screen.width * 0.28,Screen.height * 0.33, Screen.width * 0.04, Screen.height * 0.05),"+") && score >= 2000)
    {
    	jogadorVida +=1;
    	score -=2000;
    	
    }else if(score < 2000){
    
    	//GUI.Label(Rect(400,400,200,50),"not enough points",customGuiStyle);
    } 
    
    //add shot speed
    if (GUI.Button(Rect(Screen.width * 0.28,Screen.height * 0.43, Screen.width * 0.04, Screen.height * 0.05),"+") && score >= 2000 && ActionsScript.freqTiro > 0.3 )
    {
    	ActionsScript.freqTiro -= 0.1;
    	score -=2000;
    	
    }else{
    	//print("Not enough points");
    } 
    
    //add tiro
   if (GUI.Button(Rect(Screen.width * 0.28,Screen.height * 0.53, Screen.width * 0.04, Screen.height * 0.05),"+") && score >= 5000 && ActionsScript.shotLevel <2)
    {
    	ActionsScript.shotLevel += 1;
    	score -=5000;
    	
    }else{
    	//print("Not enough points");
    } 
   	//add barrier 
    if (GUI.Button(Rect(Screen.width * 0.28,Screen.height * 0.63, Screen.width * 0.04, Screen.height * 0.05),"+") && score >= 5000 && ActionsScript.barrierOn < 1)
    {
    	ActionsScript.barrierOn = 1;
    	score -=5000;
    	
    }else{
    	//print("Not enough points");
    } 
    
    
    //add Special Ability
    if (GUI.Button(Rect(Screen.width * 0.28,Screen.height * 0.73, Screen.width * 0.04, Screen.height * 0.05),"+") && score >= 5000 && ActionsScript.specialAbility < 1 )
    {
    	ActionsScript.specialAbility = 1;
    	score -=5000;
    	
    }    
        
    // Make the windows be draggable.
	// GUI.DragWindow (Rect (0,0,10000,10000));
}



function DoMyWindow2 (windowID : int) {

	GUIUtility.ScaleAroundPivot(new Vector2(Screen.width/1024f,Screen.height/768f),Vector2.zero);

	GUI.Label(Rect(Screen.width * 0.4,Screen.height * 0.01, Screen.width * 0.2, Screen.height * 0.2),"upgrades",customGuiStyle4);    
    
    GUI.Label(Rect(Screen.width * 0.4,Screen.height * 0.05, Screen.width * 0.2, Screen.height * 0.2),"score:  "+score,customGuiStyle4);   
         
   	//upgrades
    GUI.Label(Rect(Screen.width * 0.06,Screen.height * 0.25, Screen.width * 0.2, Screen.height * 0.2),"life:  "+jogadorVida,customGuiStyle3);
  
    GUI.Label(Rect(Screen.width * 0.06,Screen.height * 0.35, Screen.width * 0.2, Screen.height * 0.2),"Fire Rate:  "+ActionsScript.freqTiro,customGuiStyle3);
     
    GUI.Label(Rect(Screen.width * 0.05,Screen.height * 0.45, Screen.width * 0.2, Screen.height * 0.2),"shot:  "+ActionsScript.shotLevel,customGuiStyle3);
    
    GUI.Label(Rect(Screen.width * 0.05,Screen.height * 0.55, Screen.width * 0.2, Screen.height * 0.2),"barrier:  "+ActionsScript.barrierOn,customGuiStyle3);
    
    GUI.Label(Rect(Screen.width * 0.05,Screen.height * 0.65, Screen.width * 0.25, Screen.height * 0.2),"Red Baron:  "+ActionsScript.specialAbility,customGuiStyle3);
       
    // add life
    if (GUI.Button(Rect(Screen.width * 0.28,Screen.height * 0.33, Screen.width * 0.04, Screen.height * 0.05),"+") && score >= 2000)
    {
    	jogadorVida +=1;
    	score -=2000;
    	
    }else if(score < 2000){
    
    	//GUI.Label(Rect(400,400,200,50),"not enough points",customGuiStyle);
    } 
    
    //add shot speed
    if (GUI.Button(Rect(Screen.width * 0.28,Screen.height * 0.43, Screen.width * 0.04, Screen.height * 0.05),"+") && score >= 2000 && ActionsScript.freqTiro > 0.3 )
    {
    	ActionsScript.freqTiro -= 0.1;
    	score -=2000;
    	
    }else{
    	//print("Not enough points");
    } 
    
    //add tiro
   if (GUI.Button(Rect(Screen.width * 0.28,Screen.height * 0.53, Screen.width * 0.04, Screen.height * 0.05),"+") && score >= 5000 && ActionsScript.shotLevel <2)
    {
    	ActionsScript.shotLevel += 1;
    	score -=5000;
    	
    }else{
    	//print("Not enough points");
    } 
   	//add barrier 
    if (GUI.Button(Rect(Screen.width * 0.28,Screen.height * 0.63, Screen.width * 0.04, Screen.height * 0.05),"+") && score >= 5000 && ActionsScript.barrierOn < 1)
    {
    	ActionsScript.barrierOn = 1;
    	score -=5000;
    	
    }else{
    	//print("Not enough points");
    } 
    
    
    //add Special Ability
    if (GUI.Button(Rect(Screen.width * 0.28,Screen.height * 0.73, Screen.width * 0.04, Screen.height * 0.05),"+") && score >= 5000 && ActionsScript.specialAbility < 1 )
    {
    	ActionsScript.specialAbility = 1;
    	score -=5000;
    	
    }    
}


function DoMyWindow3 (windowID : int) {

	GUIUtility.ScaleAroundPivot(new Vector2(Screen.width/1024f,Screen.height/768f),Vector2.zero);

	GUI.Label(Rect(Screen.width * 0.4,Screen.height * 0.01, Screen.width * 0.2, Screen.height * 0.2),"upgrades",customGuiStyle4);    
    
    GUI.Label(Rect(Screen.width * 0.4,Screen.height * 0.05, Screen.width * 0.2, Screen.height * 0.2),"score:  "+score,customGuiStyle4);   
         
   	//upgrades
    GUI.Label(Rect(Screen.width * 0.06,Screen.height * 0.25, Screen.width * 0.2, Screen.height * 0.2),"life:  "+jogadorVida,customGuiStyle3);
  
    GUI.Label(Rect(Screen.width * 0.06,Screen.height * 0.35, Screen.width * 0.2, Screen.height * 0.2),"Fire Rate:  "+ActionsScript.freqTiro,customGuiStyle3);
     
    GUI.Label(Rect(Screen.width * 0.05,Screen.height * 0.45, Screen.width * 0.2, Screen.height * 0.2),"shot:  "+ActionsScript.shotLevel,customGuiStyle3);
    
    GUI.Label(Rect(Screen.width * 0.05,Screen.height * 0.55, Screen.width * 0.2, Screen.height * 0.2),"barrier:  "+ActionsScript.barrierOn,customGuiStyle3);
    
    GUI.Label(Rect(Screen.width * 0.05,Screen.height * 0.65, Screen.width * 0.25, Screen.height * 0.2),"Silent Singer:  "+ActionsScript.specialAbility,customGuiStyle3);
       
    // add life
    if (GUI.Button(Rect(Screen.width * 0.28,Screen.height * 0.33, Screen.width * 0.04, Screen.height * 0.05),"+") && score >= 2000)
    {
    	jogadorVida +=1;
    	score -=2000;
    	
    }else if(score < 2000){
    
    	//GUI.Label(Rect(400,400,200,50),"not enough points",customGuiStyle);
    } 
    
    //add shot speed
    if (GUI.Button(Rect(Screen.width * 0.28,Screen.height * 0.43, Screen.width * 0.04, Screen.height * 0.05),"+") && score >= 2000 && ActionsScript.freqTiro > 0.3 )
    {
    	ActionsScript.freqTiro -= 0.1;
    	score -=2000;
    	
    }else{
    	//print("Not enough points");
    } 
    
    //add tiro
   if (GUI.Button(Rect(Screen.width * 0.28,Screen.height * 0.53, Screen.width * 0.04, Screen.height * 0.05),"+") && score >= 5000 && ActionsScript.shotLevel <2)
    {
    	ActionsScript.shotLevel += 1;
    	score -=5000;
    	
    }else{
    	//print("Not enough points");
    } 
   	//add barrier 
    if (GUI.Button(Rect(Screen.width * 0.28,Screen.height * 0.63, Screen.width * 0.04, Screen.height * 0.05),"+") && score >= 5000 && ActionsScript.barrierOn < 1)
    {
    	ActionsScript.barrierOn = 1;
    	score -=5000;
    	
    }else{
    	//print("Not enough points");
    } 
    
    
    //add Special Ability
    if (GUI.Button(Rect(Screen.width * 0.28,Screen.height * 0.73, Screen.width * 0.04, Screen.height * 0.05),"+") && score >= 5000 && ActionsScript.specialAbility < 1 )
    {
    	ActionsScript.specialAbility = 1;
    	score -=5000;
    	
    }    
}



function Movement(){

   	if(estado == State.Jogando || estado == State.ShadowGear)
    {
		transform.Translate(vertical,0,horizontal,Space.World);
		
		if(Input.GetKey(KeyCode.W))
		{		    			   
    		transform.rotation = Quaternion.Euler(Vector3(0,0,330));	
		}else if(Input.GetKey(KeyCode.S))
		{		
    		transform.rotation = Quaternion.Euler(Vector3(0,0,30));
    	
		}else
			transform.rotation = Quaternion.Euler(Vector3(0,0,0));
		
				
		//restriçao de movimento em x 
		if(transform.position.x >= 60)
		{
			transform.position.x = -59;
		}
		
		if(transform.position.x <= -60)
		{
			transform.position.x = 59;
		}	
				
		//restriçao de movimento em z
		transform.position.z = Mathf.Clamp(transform.position.z,-95,25);	
				
		if(Time.timeScale == 1.0)
		{
			pauseOn();
			
		}else if(Time.timeScale == 0.0){
			pauseOff();
		}				
	}
	
	if(estado == State.Invulneravel)
    {		
		transform.Translate(vertical,0,0,Space.World);
								
		//restriçao de movimento em x 
		if(transform.position.x >= 60)
		{
			transform.position.x = -59;
		}
		
		if(transform.position.x <= -60)
		{
			transform.position.x = 59;
		}		
	}
	
	if(estado == State.Invencivel)
	{
		
		transform.Translate(vertical,0,0,Space.World);
								
		//restriçao de movimento em x 
		if(transform.position.x >= 60)
		{
			transform.position.x = -59;
		}
		
		if(transform.position.x <= -60)
		{
			transform.position.x = 59;
		}		
	}
}


function nextLevel(){

	while(transform.position.z >= -143)
	{		
		var movimento = 0.05 ;
		transform.position = new Vector3(transform.position.x,transform.position.y,transform.position.z - movimento);
		//sem yield while n funciona
		yield 0;
	}	
	if(fase == 1)
	{			
		Application.LoadLevel(1);
	}
	
	if(fase == 2)
	{	
		Application.LoadLevel(5);
	}
	
	if(fase == 0)
	{	
		Application.LoadLevel(2);
	}
	
}


function zeraValores(){
	
	//EnemyScript.inimigoVel = 30;
	
}

function OnGUI(){	
		
	GUI.Label(Rect(Screen.width * 0.015,Screen.height * 0.02, Screen.width * 0.2, Screen.height * 0.2),"life:"+jogadorVida,customGuiStyle);
	GUI.Label(Rect(Screen.width * 0.1,Screen.height * 0.02, Screen.width * 0.2, Screen.height * 0.2),"score:"+score,customGuiStyle);
	
		//GUI.Label(Rect(220,10,200,50),"-:"+maxScore,customGuiStyle);
	
	 if(LoadingSceneScript.playerChoice == 0)
	{
		GUI.Label(Rect(Screen.width * 0.02,Screen.height * 0.95, Screen.width * 0.2, Screen.height * 0.2),"shield:"+ShieldScript.shieldLife,customGuiStyle);						
	}
	
	if(Time.timeScale == 0)
	{
		//GUI.Label(Rect(10,10,200,50),"pause",customGuiStyle3);
		
		 if(LoadingSceneScript.playerChoice == 0)
		 {
		 	  GUI.color = Color.cyan;        
	    	  windowRect0 = GUI.Window (5, Rect (Screen.width * 0.05,Screen.height * 0.05, Screen.width * 0.8, Screen.height * 0.8), DoMyWindow, "pause");
	
		 }
		 
		 if(LoadingSceneScript.playerChoice == 1)
		 {
		 	  GUI.color = Color.red;        
	    	  windowRect0 = GUI.Window (5, Rect (Screen.width * 0.05,Screen.height * 0.05, Screen.width * 0.8, Screen.height * 0.8), DoMyWindow2, "pause");
	
		 }
		 
		  if(LoadingSceneScript.playerChoice == 2)
		 {
		 	  GUI.color = Color.blue;        
	    	  windowRect0 = GUI.Window (5, Rect (Screen.width * 0.05,Screen.height * 0.05, Screen.width * 0.8, Screen.height * 0.8), DoMyWindow3, "pause");
	
		 }
		 
	  
	    //GUI.color = Color.green;        
	    ////windowRect1 = GUI.Window (1, windowRect1, DoMyWindow, "Green Window");
	    
	   
	    	    
	}			
}
	
function OnTriggerEnter(outroObjeto:Collider){	
	
	if(estado == State.Jogando || estado == State.ShadowGear || estado == State.RedBaron )
	{
		if(outroObjeto.gameObject.tag == "Enemy" )
		{		
			outroObjeto.gameObject.transform.position.z = -140;
			outroObjeto.gameObject.transform.position.x = Random.Range(-40,40);
			//EnemyBonusScript.cont=1;
			//EnemyBonusScript.aux += 1000;			
			Instantiate(posExplosao,transform.position,transform.rotation);
				
			jogadorVida--;
			
			if(LoadingSceneScript.playerChoice == 0)
			{
					DestruirNave();		
			}
			
			if(LoadingSceneScript.playerChoice == 1)
			{
					DestruirNave2();		
			}
			
			if(LoadingSceneScript.playerChoice == 2)
			{
					DestruirNave3();		
			}					
			
			
		}
		
		if(outroObjeto.gameObject.tag == "EnemyBonus"  )
		{		
			outroObjeto.gameObject.transform.position.z = -145;
			outroObjeto.gameObject.transform.position.x = Random.Range(-40,40);
			EnemyBonusScript.cont=1;
			EnemyBonusScript.aux += 1000;
			
			Instantiate(posExplosao,transform.position,transform.rotation);
				
			jogadorVida--;
			if(LoadingSceneScript.playerChoice == 0)
			{
				DestruirNave();		
			}	
			
			if(LoadingSceneScript.playerChoice == 1)
			{
				DestruirNave2();		
			}	
			
			if(LoadingSceneScript.playerChoice == 2)
			{
				DestruirNave3();		
			}	
							
		}
		
		if(outroObjeto.gameObject.tag == "BossShot" ||  outroObjeto.gameObject.tag == "Boss" ||  outroObjeto.gameObject.tag == "MiniBoss"||  outroObjeto.gameObject.tag == "MiniBossShot")
		{		
			Instantiate(posExplosao,transform.position,transform.rotation);
				
			jogadorVida--;
			if(LoadingSceneScript.playerChoice == 0)
			{
					DestruirNave();		
			}		
			
		 	if(LoadingSceneScript.playerChoice == 1)
			{
					DestruirNave2();		
			}		
			
			if(LoadingSceneScript.playerChoice == 2)
			{
					DestruirNave3();		
			}	
						
												
		}			
	}
}

function DestruirNave(){
	
	estado = State.Explodido;
	Instantiate(posExplosao,transform.position,Quaternion.identity);
	ShadowGearScript.specialLife = 3;
	
	if(estado == State.Explodido)
	{	
		transform.rotation = Quaternion.Euler(Vector3(0,0,0));
	}
	
	
	//faz a nave desaparecer
	//gameObject.Find("Player").renderer.enabled =false;
	gameObject.Find("Nave").renderer.enabled =false;
	gameObject.Find("Nave1").renderer.enabled =false;
	gameObject.Find("Nave2").renderer.enabled =false;
	gameObject.Find("Nave3").renderer.enabled =false;
	gameObject.Find("Nave4").renderer.enabled =false;
	gameObject.Find("Nave5").renderer.enabled =false;	
	gameObject.Find("Nave6").renderer.enabled =false;

	transform.position = new Vector3(20,transform.position.y,25.0);	
			
	if(jogadorVida > 0)
	{	
		//espera tantos secs
		yield WaitForSeconds(2);
		
		//faz a nave aparecer
		//gameObject.Find("Player").renderer.enabled =true;
		gameObject.Find("Nave").renderer.enabled =true;
		gameObject.Find("Nave1").renderer.enabled =true;
		gameObject.Find("Nave2").renderer.enabled =true;
		gameObject.Find("Nave3").renderer.enabled =true;
		gameObject.Find("Nave4").renderer.enabled =true;
		gameObject.Find("Nave5").renderer.enabled =true;
		
		
		while(transform.position.z >= 13)
		{
			var movimento = 10.0 * Time.deltaTime;
			transform.position = new Vector3(10,transform.position.y,transform.position.z - movimento);
			//sem yield while n funciona
			yield 0;
		}
		
		estado = State.Invencivel;
					
		while(cont <= 3)
		{			
			
		
			//gameObject.Find("Player").renderer.enabled = !gameObject.Find("Player").renderer.enabled;
			gameObject.Find("Nave").renderer.enabled = !gameObject.Find("Nave").renderer.enabled;
			gameObject.Find("Nave1").renderer.enabled = !gameObject.Find("Nave1").renderer.enabled;
			gameObject.Find("Nave2").renderer.enabled = !gameObject.Find("Nave2").renderer.enabled;
			gameObject.Find("Nave3").renderer.enabled = !gameObject.Find("Nave3").renderer.enabled;
			gameObject.Find("Nave4").renderer.enabled = !gameObject.Find("Nave4").renderer.enabled;
			gameObject.Find("Nave5").renderer.enabled = !gameObject.Find("Nave5").renderer.enabled;
			
		 	if(gameObject.Find("Nave").renderer.enabled ==true)
		 	{
		 		cont++;
		 	}
		 	yield WaitForSeconds(0.2);
		}
		gameObject.Find("Nave6").renderer.enabled = true;
		cont = 0;
		estado = State.Jogando;
	}
	
}


function DestruirNave2(){
	
	estado = State.Explodido;
	Instantiate(posExplosao,transform.position,Quaternion.identity);
	
	
	if(estado == State.Explodido)
	{	
		transform.rotation = Quaternion.Euler(Vector3(0,0,0));
	}
		
	gameObject.Find("Nave").renderer.enabled =false;
	gameObject.Find("Nave2").renderer.enabled =false;
	//gameObject.Find("Nave3").renderer.enabled =false;
	
	transform.position = new Vector3(20,transform.position.y,25.0);	
			
	if(jogadorVida > 0)
	{	
		//espera tantos secs
		yield WaitForSeconds(2);
		
		//faz a nave aparecer
		//gameObject.Find("Player").renderer.enabled =true;
		gameObject.Find("Nave").renderer.enabled =true;
		gameObject.Find("Nave2").renderer.enabled =true;
				
		
		while(transform.position.z >= 13)
		{
			var movimento = 10.0 * Time.deltaTime;
			transform.position = new Vector3(10,transform.position.y,transform.position.z - movimento);
			//sem yield while n funciona
			yield 0;
		}
		
		estado = State.Invencivel;
					
		while(cont <= 3)
		{			
			
		
			//gameObject.Find("Player").renderer.enabled = !gameObject.Find("Player").renderer.enabled;
			gameObject.Find("Nave").renderer.enabled = !gameObject.Find("Nave").renderer.enabled;
			gameObject.Find("Nave2").renderer.enabled = !gameObject.Find("Nave2").renderer.enabled;
			
		 	if(gameObject.Find("Nave").renderer.enabled ==true)
		 	{
		 		cont++;
		 	}
		 	yield WaitForSeconds(0.2);
		}
		//gameObject.Find("Nave3").renderer.enabled = true;
		cont = 0;
		estado = State.Jogando;
	}
	
}

function DestruirNave3(){
	
	estado = State.Explodido;
	Instantiate(posExplosao,transform.position,Quaternion.identity);
	ShadowGearScript.specialLife = 3;
	
	if(estado == State.Explodido)
	{	
		transform.rotation = Quaternion.Euler(Vector3(0,0,0));
	}
	
	
	gameObject.Find("Nave").renderer.enabled =false;
	gameObject.Find("Nave1").renderer.enabled =false;
	gameObject.Find("Nave2").renderer.enabled =false;
	gameObject.Find("Nave3").renderer.enabled =false;
	gameObject.Find("Nave4").renderer.enabled =false;
	gameObject.Find("Nave5").renderer.enabled =false;	
	gameObject.Find("Nave6").renderer.enabled =false;

	transform.position = new Vector3(20,transform.position.y,25.0);	
			
	if(jogadorVida > 0)
	{	
		//espera tantos secs
		yield WaitForSeconds(2);
		
		//faz a nave aparecer
		//gameObject.Find("Player").renderer.enabled =true;
		gameObject.Find("Nave").renderer.enabled =true;
		gameObject.Find("Nave1").renderer.enabled =true;
		gameObject.Find("Nave2").renderer.enabled =true;
		gameObject.Find("Nave3").renderer.enabled =true;
		gameObject.Find("Nave4").renderer.enabled =true;
		gameObject.Find("Nave5").renderer.enabled =true;
		gameObject.Find("Nave6").renderer.enabled =true;
		
		
		while(transform.position.z >= 13)
		{
			var movimento = 10.0 * Time.deltaTime;
			transform.position = new Vector3(10,transform.position.y,transform.position.z - movimento);
			//sem yield while n funciona
			yield 0;
		}
		
		estado = State.Invencivel;
					
		while(cont <= 3)
		{			
			
		
			//gameObject.Find("Player").renderer.enabled = !gameObject.Find("Player").renderer.enabled;
			gameObject.Find("Nave").renderer.enabled = !gameObject.Find("Nave").renderer.enabled;
			gameObject.Find("Nave1").renderer.enabled = !gameObject.Find("Nave1").renderer.enabled;
			gameObject.Find("Nave2").renderer.enabled = !gameObject.Find("Nave2").renderer.enabled;
			gameObject.Find("Nave3").renderer.enabled = !gameObject.Find("Nave3").renderer.enabled;
			gameObject.Find("Nave4").renderer.enabled = !gameObject.Find("Nave4").renderer.enabled;
			gameObject.Find("Nave5").renderer.enabled = !gameObject.Find("Nave5").renderer.enabled;
			gameObject.Find("Nave6").renderer.enabled = !gameObject.Find("Nave6").renderer.enabled;
			
		 	if(gameObject.Find("Nave").renderer.enabled ==true)
		 	{
		 		cont++;
		 	}
		 	yield WaitForSeconds(0.2);
		}
		//gameObject.Find("Nave6").renderer.enabled = true;
		cont = 0;
		estado = State.Jogando;
	}
	
}
