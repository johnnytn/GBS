#pragma strict

var shot:Rigidbody;
var shield:Rigidbody;
var shadowGear:GameObject;

static var freqTiro:float = 0.5;
static var shotLevel = 0;
static var barrierOn = 0;
static var specialAbility = 0;
private var ultimoTiro:float;

function Update () {

	if(LoadingSceneScript.playerChoice == 0)
	{
		ShadowGear();
	
	}
	
	if(LoadingSceneScript.playerChoice == 1)
	{
		RedBaron();
	}

	if(LoadingSceneScript.playerChoice == 2)
	{
		SilentSinger();
	}


}

function ShadowGear(){

	//tiro do jogador
		if((PlayerScript.estado == State.Jogando || PlayerScript.estado == State.ShadowGear )&& Input.GetKeyDown("space") && (Time.time > freqTiro + ultimoTiro))
		{				
			Shot();	
			//ShieldScript.tempShield++;			
		}	
	
		
		if((PlayerScript.estado == State.Jogando || PlayerScript.estado == State.ShadowGear ) && Input.GetKey(KeyCode.E) && barrierOn == 1 )
		{
			Shield();
			ShieldScript.shieldLife = 100;					
		}
			
		if(/*(PlayerScript.estado == State.Invulneravel && Input.GetKey(KeyCode.R) && specialAbility == 0) || */(PlayerScript.estado == State.Invulneravel && ShieldScript.shieldLife <=0 && specialAbility == 0))
		{
				PlayerScript.estado = State.Jogando;	
		}
		
		if(PlayerScript.estado == State.Invulneravel && ShieldScript.shieldLife <=0 && specialAbility == 1)
		{
			PlayerScript.estado = State.ShadowGear;	
		}
		//special do jogador
		if(PlayerScript.estado == State.Jogando && specialAbility == 1 && ShadowGearScript.specialLife >= 1)
		{				
			SpecialAbility();	
			
		}	


}

function RedBaron(){
	
	if((PlayerScript.estado == State.Jogando || PlayerScript.estado == State.ShadowGear )&& Input.GetKeyDown("space") && (Time.time > freqTiro + ultimoTiro))
	{				
		Shot();	
		//ShieldScript.tempShield++;			
	}	
	
}

function SilentSinger(){

	if((PlayerScript.estado == State.Jogando || PlayerScript.estado == State.ShadowGear )&& Input.GetKeyDown("space") && (Time.time > freqTiro + ultimoTiro))
	{				
		Shot();	
			//ShieldScript.tempShield++;			
	}


}

function Shot(){

	ultimoTiro = Time.time;
	
	if(shotLevel == 0)
	{
		Instantiate(shot,transform.position,transform.rotation);
		
	}
	
	if(shotLevel == 1)
	{
	
		Instantiate(shot,Vector3(transform.position.x+2,transform.position.y, transform.position.z),transform.rotation);
		Instantiate(shot,Vector3(transform.position.x-2,transform.position.y, transform.position.z),transform.rotation);
	
	}
	
	if(shotLevel == 2)
	{
	
		Instantiate(shot,transform.position,transform.rotation);
		yield WaitForSeconds(0.005);
		Instantiate(shot,transform.position,Quaternion.Euler(Vector3(0,-5,0)));		
		Instantiate(shot,transform.position,Quaternion.Euler(Vector3(0,5,0)));
		
	}
}


function Shield(){

	if(barrierOn == 1)
	{
		PlayerScript.estado = State.Invulneravel;	
		Instantiate(shield, Vector3(transform.position.x,transform.position.y, transform.position.z - 10.0),transform.rotation);
	}

}

function SpecialAbility(){

	if(specialAbility == 1)
	{
		PlayerScript.estado = State.ShadowGear;
		Instantiate(shadowGear, Vector3(transform.position.x -15,transform.position.y, transform.position.z),transform.rotation);
	}
	
	
}