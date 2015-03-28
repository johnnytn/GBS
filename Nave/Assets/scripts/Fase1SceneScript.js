#pragma strict

static var velocidade:float = 0.5;
static var faseTime:float;
var cont:int = 0;
var customGuiStyle : GUIStyle;
//var tempVel:float;

var miniBoss:GameObject;
var player:GameObject;
var player2:GameObject;
var player3:GameObject;
//var audio1 : AudioSource;


function Start(){		
		
	//LoadingSceneScript.playerChoice = 2;
		
	if(LoadingSceneScript.playerChoice == 0)
	{
		Instantiate(player, Vector3(transform.position.x+22,transform.position.y+79, transform.position.z +54),transform.rotation);		
	}	
	
	
	if(LoadingSceneScript.playerChoice == 1)
	{
		Instantiate(player2, Vector3(transform.position.x+22,transform.position.y+79, transform.position.z +54),transform.rotation);		
	}		
	
	if(LoadingSceneScript.playerChoice == 2)
	{
		Instantiate(player3, Vector3(transform.position.x+22,transform.position.y+79, transform.position.z +54),transform.rotation);		
	}			
			
				
	
	//player
	PlayerScript.score = 0;
	PlayerScript.maxScore = 0;
	PlayerScript.jogadorVida = 3;
	ShadowGearScript.specialLife = 3;
	ActionsScript.shotLevel = 0;
	ActionsScript.barrierOn = 0;
	ActionsScript.specialAbility = 0;
	ActionsScript.freqTiro = 0.5;	
	
	//fase1
	PlayerScript.fase = 1;
	faseTime = 60;
	velocidade = 0.5;
	
	//enemy
	EnemyScript.inimigoVel = 30;	
	MiniBossScript.miniBossLife = 50;
	EnemyBonusScript.aux = 1000;

}

function Update () {	
	
	//audio1.Play();
	//AudioSource.e
	
	if(faseTime >0)
	{
		faseTime -= 1 * Time.deltaTime; 
	}
	
	// novo movimento da textura
	renderer.material.SetTextureOffset("_MainTex",Vector2(0,velocidade *Time.time));
	//metodo antigo
	//var Movimento = velocidade * Time.deltaTime;
	//transform.Translate(Vector3.forward * Movimento);

	if(/*PlayerScript.maxScore >= 15000*/ MiniBossScript.miniBossLife <= 0)
	{	
		PlayerScript.estado = State.Ganhou;
	}
	
	if(PlayerScript.jogadorVida <= 0)
	{		
		Application.LoadLevel(3);
			
	}				
	if(PlayerScript.estado == State.Ganhou)
	{			
		//chama a função nextlevel no PlayerScript
		GameObject.Find("Player(Clone)").GetComponent(PlayerScript).nextLevel();
		if(ShadowGearScript.specialLife >0)
		{
			//GameObject.Find("ShadowGear(Clone)").GetComponent(ShadowGearScript).nextLevel();
		}	
		PlayerScript.fase=2;
	}	
		
		
	if(/*PlayerScript.maxScore >= 12000*/ faseTime <= 0 && cont == 0)	
	{
		gameObject.Find("Scene").audio.enabled = false;
		velocidade = 0.5;
		cont = 1;
		Instantiate(miniBoss, Vector3(transform.position.x,transform.position.y + 75 , transform.position.z -147.4466),transform.rotation);
	}
	
	
}

function OnGUI(){
		
	//GUIUtility.ScaleAroundPivot(new Vector2(Screen.width/1024f,Screen.height/768f),Vector2.zero);
	//GUI.Label(Rect(20,300,200,50),"---" +faseTime);
		
	/*																					
	if(PlayerScript.score == 1000)
	{
		GUI.Label(Rect(10,10,200,50),"Too easy",customGuiStyle);
		WaitForSeconds(1);			
	}
	
	if(PlayerScript.score == 2000)
	{
		GUI.Label(Rect(10,10,250,50),"It's getting harder..",customGuiStyle);
		WaitForSeconds(1);
	}
	
	
	if(PlayerScript.score == 3000)
	{
		GUI.Label(Rect(10,10,200,50),"Damn, I'm good!",customGuiStyle);
		WaitForSeconds(1);
	}
	
	if(PlayerScript.score == 4000)
	{
		GUI.Label(Rect(10,10,200,50),"Hell Yeah!",customGuiStyle);
		WaitForSeconds(1);
	}
	*/		
			
	if(/*PlayerScript.maxScore >= 15000*/ MiniBossScript.miniBossLife <= 0)
	{			
		GUI.Label(Rect(Screen.width * 0.1,Screen.height * 0.05, Screen.width * 0.5, Screen.height * 0.2),"level complete!",customGuiStyle);
		//yield WaitForSeconds(3);
	}



}