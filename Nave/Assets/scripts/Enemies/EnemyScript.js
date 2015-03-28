#pragma strict

static var inimigoVel = 30;

var posExplosao:Transform;

function Start () {

}

function Update () {

	//calculo de velocidade
	var vel = inimigoVel * Time.deltaTime;
	var velRotacao = 30 * Time.deltaTime;

	transform.Rotate(new Vector3(-1,2,-1.2)* velRotacao);

	//mover o inimigo
	transform .Translate(Vector3.forward*vel,Space.World);

	if(transform.position.z>= 64)
	{
		transform.position.z = -150;
		
		transform.position.x = Random.Range(-40,40);
	}

	//if(PlayerScript.score == 5000 )
	//{
	//	inimigoVel = 0;	
	//}

	if(/*PlayerScript.maxScore >= 12000*/ Fase1SceneScript.faseTime <= 0)	
	{
		Instantiate(posExplosao,transform.position,transform.rotation);	
		Destroy(gameObject);
		
	}	

}