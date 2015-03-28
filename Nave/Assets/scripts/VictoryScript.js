#pragma strict

var texturaFundo:Texture;
var customGuiStyle : GUIStyle;
var customGuiStyle2 : GUIStyle;

function Start(){
		
	//PlayerScript.maxScore += PlayerScript.score;

}
function OnGUI()
{		

	GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height),texturaFundo);

	GUIUtility.ScaleAroundPivot(new Vector2(Screen.width/1024f,Screen.height/768f),Vector2.zero);

	GUI.Label(Rect(80,50,300,500),"And the Earth was saved...\n\nScore:"+PlayerScript.maxScore,customGuiStyle);
				
	GUI.Label(Rect(400,400,180,50),"menu",customGuiStyle2);
	
	if(Input.anyKeyDown){
		Application.LoadLevel(0);
		}		
		
}

