#pragma strict

var tiroVel = 80;
var posExplosao:Transform;

function Start () {

}

function Update () {

	var vel = tiroVel*Time.deltaTime;		
	transform.Translate(Vector3.forward*vel);

	if(transform.position.z >=(56))
	{
		Destroy(gameObject);
	}		
}

function OnTriggerEnter(outroObjeto:Collider){


	if(outroObjeto.gameObject.tag=="PlayerShield")
	{	
		Instantiate(posExplosao,transform.position,transform.rotation);			
		Destroy(gameObject);	
	}	
}


