#pragma strict

var tiro:Rigidbody;
var freqTiro:float;

private var ultimoTiro:float;

function Update () {

	
	if(transform.position.z >= -113)
	{	
		if(Time.time > freqTiro + ultimoTiro)
		{		
			atirarBoss();
		}
	}
}

function atirarBoss(){
	
	ultimoTiro = Time.time;
	Instantiate(tiro,transform.position,transform.rotation);	
	

}