#pragma strict

var tiroVel = 80;
var posExplosao:Transform;
var tiro:Rigidbody;

function Start () {

}

function Update () {

	//calculo da velocidade
	var vel = tiroVel*Time.deltaTime;
	
	//mover o tiro do boss
	transform.Translate(Vector3.forward*vel);

	//if((gameObject.Find("Player").transform.position.z + transform.position.z)==)
	if(transform.position.z >=(56)){
		Destroy(gameObject);
	}
	
	if(transform.position.z >=-80 && transform.position.z <=-78 )
	{
		Instantiate(tiro,transform.position,Quaternion.Euler(Vector3(0,-18,0)));
		Instantiate(tiro,transform.position,transform.rotation);
		Instantiate(tiro,transform.position,Quaternion.Euler(Vector3(0,18,0)));
	}


}

function OnTriggerEnter(outroObjeto:Collider){


	if(outroObjeto.gameObject.tag=="PlayerShield"){
	
		Instantiate(posExplosao,transform.position,transform.rotation);
			
		Destroy(gameObject);
	
	}
	
	
}


