#pragma strict

//var posInicial:Vector3;
var posInimigo:Vector2;
//var customGuiStyle:GUIStyle;
var posExplosao:Transform;
var miniBossShot:Rigidbody;


static var miniBossLife = 30;
var side = 0;
var miniBossVel:float;
private var ultimoTiro:float;
var freqTiro:float;

function Start(){
	//posInicial = transform.position;
	miniBossLife = 30;

}

function Update () {

	var vel = miniBossVel*Time.deltaTime;
	if(transform.position.z <= -99)
	{		
		transform.Translate(Vector3.forward*vel);
	}	


	if(transform.position.z >= -100)
	{	
	
		if(transform.position.x <= -35)
		{
			side = 1;
		}

		if(transform.position.x >= 35)
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
		
		//transform.position.z = Mathf.PingPong(Time.time*vel,-30);
		
	}	
	
	if(miniBossLife <=0)
	{
		PlayerScript.score += 3000;
		PlayerScript.maxScore += 3000;
		PlayerScript.estado = State.Ganhou;		
		Instantiate(posExplosao,transform.position,transform.rotation);
		Destroy(gameObject);	
	}
	
	if(transform.position.z >= -99)
	{	
		if(Time.time > freqTiro + ultimoTiro)
		{		
			atirar();
		}
	}		
							
}

function atirar(){
	
	ultimoTiro = Time.time;
	Instantiate(miniBossShot,Vector3(transform.position.x,transform.position.y +5, transform.position.z+5),Quaternion.Euler(Vector3(0,10,0)));			
	Instantiate(miniBossShot,Vector3(transform.position.x,transform.position.y +5, transform.position.z+5),transform.rotation);			
	Instantiate(miniBossShot,Vector3(transform.position.x,transform.position.y +5, transform.position.z+5),Quaternion.Euler(Vector3(0,-10,0)));			
		
}