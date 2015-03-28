#pragma strict
var texturaFundo:Texture;
var customGuiStyle : GUIStyle;
var customGuiStyle2 : GUIStyle;



function Start(){
	
	PlayerScript.score = 0 ;
	PlayerScript.maxScore = 0;
	PlayerScript.jogadorVida = 3;		
	ActionsScript.shotLevel = 0;
	ActionsScript.barrierOn = 0;
	ActionsScript.specialAbility = 0;	
	ActionsScript.freqTiro = 0.5;

}




function OnGUI()
	{		
		
		GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height),texturaFundo);
		
		GUIUtility.ScaleAroundPivot(new Vector2(Screen.width/1024f,Screen.height/768f),Vector2.zero);
	
		GUI.Label(Rect(Screen.width * 0.05,Screen.height * 0.1, Screen.width * 1, Screen.height * 0.2),"Gambiarra Shooter",customGuiStyle);
		
		
		GUI.Label(Rect(Screen.width * 0.02,Screen.height * 0.15, Screen.width * 0.2, Screen.height * 0.2),"Press any key to Start",customGuiStyle2);
		
		GUI.Label(Rect(Screen.width * 0.02,Screen.height * 0.25, Screen.width * 0.2, Screen.height * 0.2),"wasd to move\n c-pause\n v-unpause ",customGuiStyle2);
		
				
		if(Input.anyKeyDown)
		{
			Application.LoadLevel(4);
		}
			
	}