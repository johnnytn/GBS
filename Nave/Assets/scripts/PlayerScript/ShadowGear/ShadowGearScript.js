#pragma strict
var customGuiStyle : GUIStyle;
//var customGuiStyle2 : GUIStyle;
var customGuiStyle3 : GUIStyle;
//var customGuiStyle4 : GUIStyle;

static var specialVel:float;
static var specialLife = 3;

static var vertical;
var horizontal;
var posExplosao:Transform;


function Start(){
	
	specialVel = PlayerScript.jogadorVel;

}

function Update () {

	vertical = -Input.GetAxisRaw("Vertical")*Time.deltaTime * specialVel;
	horizontal = -Input.GetAxisRaw("Horizontal")*Time.deltaTime * specialVel;

	Movement();		
	
	if(specialLife <= 0 || PlayerScript.estado == State.Explodido  || PlayerScript.estado == State.Invencivel )
	{
		Destroy(gameObject);
		//PlayerScript.estado ==State.ShadowGear;
	}
}

function Movement(){

   	if(PlayerScript.estado == State.Jogando || PlayerScript.estado == State.ShadowGear)
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
		
	}
	
	if(PlayerScript.estado == State.Invulneravel)
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
}

function OnGUI(){							
		
}
	
function OnTriggerEnter(outroObjeto:Collider){	
	
	if(PlayerScript.estado != State.Ganhou)
	{
		if(outroObjeto.gameObject.tag == "Enemy" || outroObjeto.gameObject.tag == "EnemyBonus"  )
		{		
			outroObjeto.gameObject.transform.position.z = -150;
			outroObjeto.gameObject.transform.position.x = Random.Range(-40,40);
			EnemyBonusScript.cont=1;
			EnemyBonusScript.aux += 1000;
			
			Instantiate(posExplosao,transform.position,transform.rotation);
				
			specialLife--;					
		}
		
		if(outroObjeto.gameObject.tag == "BossShot" )
		{		
			Instantiate(posExplosao,transform.position,transform.rotation);
				
			specialLife--;						
		}	
		
	}
}

