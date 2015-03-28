#pragma strict
var velocidade:float;
var customGuiStyle : GUIStyle;



var player:GameObject;
var player2:GameObject;
var player3:GameObject;



function Start(){

	PlayerScript.fase = 2;
	
	
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
	

}

function Update () {

	renderer.material.SetTextureOffset("_MainTex",Vector2(-velocidade *Time.time,0));

	if(PlayerScript.estado == State.Ganhou)
	{			
		//chama a função nextlevel no PlayerScript
		GameObject.Find("Player(Clone)").GetComponent(PlayerScript).nextLevel();
		if(ShadowGearScript.specialLife >0)
		{
			//GameObject.Find("ShadowGear(Clone)").GetComponent(ShadowGearScript).nextLevel();
		}	
		PlayerScript.fase=0;
	}	
	
	if(PlayerScript.jogadorVida <= 0)
	{
		Application.LoadLevel(3);
	}

}

function OnGUI(){

	//GUIUtility.ScaleAroundPivot(new Vector2(Screen.width/1024f,Screen.height/768f),Vector2.zero);
	
	if(BossScript.bossLife <=0)
	{			
		GUI.Label(Rect(Screen.width * 0.1,Screen.height * 0.05, Screen.width * 0.5, Screen.height * 0.2),"level complete",customGuiStyle);	
		
	}
	
	
}