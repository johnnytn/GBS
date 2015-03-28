#pragma strict

var texturaFundo:Texture;
var customGuiStyle : GUIStyle;
var customGuiStyle2 : GUIStyle;


function OnGUI()
{		

	GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height),texturaFundo);
	
	GUIUtility.ScaleAroundPivot(new Vector2(Screen.width/1024f,Screen.height/768f),Vector2.zero);

	GUI.Label(Rect(80,50,300,500),"Game Over....\n\n Score:"+PlayerScript.maxScore,customGuiStyle);
	
	if(GUI.Button(Rect(500,400,180,30),"menu",customGuiStyle2))
	{
		Application.LoadLevel(0);
	}
	
	if(GUI.Button(Rect(500,480,180,30),"retry",customGuiStyle2))
	{		  		
    	Retry();
   
	}
	
}

function Retry(){

	PlayerScript.jogadorVida = PlayerScript.tempLife;
	
	if(PlayerScript.fase == 1)
	{
		Application.LoadLevel(1); 
			
	}
	
    if(PlayerScript.fase == 2)
    {
    	//BossScript.bossLife = 100;
    	 Application.LoadLevel(5); 
    }
   
}