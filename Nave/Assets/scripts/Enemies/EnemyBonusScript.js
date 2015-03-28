#pragma strict

static var inimigoBonusVel = 0;
static var cont = 0;
static var aux = 1000;

var posExplosao:Transform;


function Update () {
				
	
	//calculo de velocidade
	var vel = inimigoBonusVel * Time.deltaTime;
	var velRotacao = 30 * Time.deltaTime;
			
	
	//funçao pra limitar o elemento bonus
	if(PlayerScript.maxScore >= 1000 && cont == 0)
	{	
		inimigoBonusVel = 100;		
		
		//roda inimigo				
		transform.Rotate(new Vector3(-1,2,-1.2)* velRotacao);
		//mover o inimigo
		transform.Translate(Vector3.forward*vel,Space.World);
	
		if(transform.position.z>= 54)
		{	
			cont = 1;
			aux = aux + 1000;
			inimigoBonusVel = 0;
			transform.position.z = -155;			
			transform.position.x = Random.Range(-40,40);
		}
		
	}
				
	if(PlayerScript.maxScore >= aux)
	{
		cont = 0;
	}		
		
	if(/*PlayerScript.maxScore >= 12000*/ Fase1SceneScript.faseTime <= 0 )	
	{
		Instantiate(posExplosao,transform.position,transform.rotation);	
		Destroy(gameObject);
		
	}		
					
}