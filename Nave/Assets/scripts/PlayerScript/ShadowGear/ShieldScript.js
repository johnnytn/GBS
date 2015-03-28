#pragma strict

static var shieldLife:int;
var shieldVel:int;
var posExplosao:Transform;
var tempShield = 0;

function Start () {
	
	shieldVel = PlayerScript.jogadorVel;
	
	
}

function Update () {

	//var vel = shieldVel*Time.deltaTime;	
	//mover o shield do jogador
	var vertical = Input.GetAxisRaw("Vertical")*Time.deltaTime * shieldVel;
	
	transform.Translate(vertical,0,0);	
	
	if(/*Input.GetKey(KeyCode.R) ||*/ shieldLife == 0)
	{
		Destroy(gameObject);			
	}
	
	if(shieldLife == 0 && ActionsScript.specialAbility == 1)
	{
		PlayerScript.estado = State.ShadowGear;	
	}
	
	
	//restriçao de movimento em x 
	if(transform.position.x >= 60)
	{
		transform.position.x = -59;
	}
	
	if(transform.position.x <= -60)
	{
		transform.position.x = 59;
	}			
	
	if(shieldLife <= 100)
	{
		shieldLife-= 1 * Time.deltaTime;	
		//RegenShield();	
	}	
}

function OnTriggerEnter(outroObjeto:Collider){


	if(outroObjeto.gameObject.tag=="Enemy"){
		
		outroObjeto.gameObject.transform.position.z = -140;
		outroObjeto.gameObject.transform.position.x = Random.Range(-40,40);
		
		Instantiate(posExplosao,transform.position,transform.rotation);
		shieldLife--;		
	}
	
		if(outroObjeto.gameObject.tag=="EnemyBonus"){
			
		EnemyBonusScript.cont = 1;
		EnemyBonusScript.aux += 500;	
				
		outroObjeto.gameObject.transform.position.z = -140;
		outroObjeto.gameObject.transform.position.x = Random.Range(-40,40);
		
		Instantiate(posExplosao,transform.position,transform.rotation);	
		shieldLife--;	
		
	}
	
	if(outroObjeto.gameObject.tag=="BossShot")
	{	
							
		Instantiate(posExplosao,transform.position,transform.rotation);
		shieldLife--;
	}	
}

//preciso arrumar
function RegenShield(){		
									
	while(shieldLife < 10)
	{
		shieldLife++;
	}
	yield WaitForSeconds(0.5);
}