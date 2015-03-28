#pragma strict

var posInicial:Vector3;
var posInimigo:Vector2;
var customGuiStyle:GUIStyle;
var posExplosao:Transform;

static var bossLife = 100;
var side = 0;
var bossVel:float;

function Start(){
	posInicial = transform.position;
	bossLife = 100;

}

function Update () {

	var vel = bossVel*Time.deltaTime;
	

	if(transform.position.z <= -113)
	{
		
		transform.Translate(Vector3.forward*vel);
	}	


	if(transform.position.z >= -114)
	{	
		//movimenta o boss
		//transform.position.x = Mathf.PingPong(Time.time*bossVel,posInimigo.x);
	
		if(transform.position.x <= -23)
		{
			side = 1;
		}

		if(transform.position.x >= 23)
		{
			side = 0;
		}	


		if(side == 0)
		{
			transform.Translate(Vector3.left*vel);		
		}
		
		if(side == 1)
		{
		
			transform.Translate(Vector3.right*vel);
					
		}
	}
	
	
	
	if(bossLife <=0)
	{
		PlayerScript.score += 5000;
		PlayerScript.maxScore += 5000;
		PlayerScript.estado = State.Ganhou;		
		Instantiate(posExplosao,transform.position,transform.rotation);
		Destroy(gameObject);	
	}
		
}

function OnGUI(){

	GUI.Button(Rect(400,10,50,30),""+bossLife);
	
	if(transform.position.z <= -113)
	{			
		GUI.Label(Rect(Screen.width * 0.001,Screen.height * 0.1, Screen.width * 1, Screen.height * 0.2),"The boss is coming...",customGuiStyle);						
	}
}
