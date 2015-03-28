#pragma strict

static var tiroVel:float = 80;
var posExplosao:Transform;

function Start () {

}

function Update () {

	//calculo de velocidade do tiro
	var vel = tiroVel*Time.deltaTime;	

	//mover o tiro do jogador antigo
	//transform.Translate(Vector3.back*vel);
		
	//mover o tiro do jogador
	transform.Translate(0,0,-vel);

	//if((gameObject.Find("Player").transform.position.z + transform.position.z)==)
	if(transform.position.z <=(-120)){
		Destroy(gameObject);
	}


}

function OnTriggerEnter(outroObjeto:Collider){


	if(outroObjeto.gameObject.tag=="Enemy")
	{	
		
		//Fase1SceneScript.velocidade += 0.002;
		PlayerScript.score += 200;
		PlayerScript.maxScore += 200;
		//PlayerScript.jogadorVel += 0.5;
		outroObjeto.gameObject.transform.position.z = -155;
		outroObjeto.gameObject.transform.position.x = Random.Range(-40,40);
		
		Instantiate(posExplosao,transform.position,transform.rotation);		
		
		Destroy(gameObject);
		EnemyScript.inimigoVel += 1;
	}
	
	if(outroObjeto.gameObject.tag=="EnemyBonus")
	{
		PlayerScript.maxScore += 500;
		PlayerScript.score += 500;
		EnemyBonusScript.cont = 1;
		EnemyBonusScript.aux += 1000;
		
				
		outroObjeto.gameObject.transform.position.z = -155;
		outroObjeto.gameObject.transform.position.x = Random.Range(-40,40);
		
		Instantiate(posExplosao,transform.position,transform.rotation);		
		
		Destroy(gameObject);
	}
	
	if(outroObjeto.gameObject.tag=="Boss")
	{		
		BossScript.bossLife -= 1;				
		Instantiate(posExplosao,transform.position,transform.rotation);				
	}
	
	if(outroObjeto.gameObject.tag=="MiniBoss")	
	{		
		MiniBossScript.miniBossLife -= 1;				
		Instantiate(posExplosao,transform.position,transform.rotation);		
	}
	
}