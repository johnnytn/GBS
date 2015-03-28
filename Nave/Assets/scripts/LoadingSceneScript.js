#pragma strict

var customGuiStyle : GUIStyle;
var customGuiStyle2 : GUIStyle;

var textura:Texture;

static var playerChoice:int;
var aux:int;
var windowRect0 : Rect = Rect (200, 200, 120, 50);
aux = 0;

function Start(){
	//playerChoice = 1;
}


function Update () {


}


function DoMyWindow (windowID : int) {


		

		GUIUtility.ScaleAroundPivot(new Vector2(Screen.width/1024f,Screen.height/768f),Vector2.zero);
		
		
		if(GUI.Button(Rect(Screen.width * 0.05,Screen.height * 0.15, Screen.width * 0.2, Screen.height * 0.9),"Shadow Gear"))
		{
			playerChoice = 0;
			Application.LoadLevel(1);
		}
		
		if(GUI.Button(Rect(Screen.width * 0.3,Screen.height * 0.15, Screen.width * 0.2, Screen.height * 0.9),"Red Baron"))
		{
			playerChoice = 1;
			Application.LoadLevel(1);
		}
		
		if(GUI.Button(Rect(Screen.width * 0.55,Screen.height * 0.15, Screen.width * 0.2, Screen.height * 0.9),"Specter"))
		{
			playerChoice = 2;
			Application.LoadLevel(1);
		}
		
		//GUI.Label(Rect(Screen.width * 0.5,Screen.height * 0.5, Screen.width * 0.5, Screen.height * 0.5),"Choose your ship",customGuiStyle);
}



function OnGUI(){			
		
	
	GUI.color = Color.white;        
	windowRect0 = GUI.Window (0, Rect (Screen.width * 0.1,Screen.height * 0.05, Screen.width * 0.8, Screen.height * 0.8), DoMyWindow, "");
	
	GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height),textura);
	
	
	GUI.Label(Rect(Screen.width * 0.35,Screen.height * 0.9, Screen.width * 0.5, Screen.height * 0.5),"make your choice",customGuiStyle);    
	
	/*
		//Time.time é o tempo desde quando o jogo começou a ser rodado
		if(aux == 0)
		{
			//GUI.Label(Rect(10,-220,300,200),"E assim apos tal coisa...",customGuiStyle2);
			GUI.Label(Rect(Screen.width * 0.03,Screen.height * 0.15, Screen.width * 0.2, Screen.height * 0.2),"loading",customGuiStyle);
			//print(aux);
			Loading();
		}else if(aux == 2 ){
			
			//GUI.Label(Rect(10,-220,300,200),"..algo aconteceu..",customGuiStyle2);
			GUI.Label(Rect(Screen.width * 0.03,Screen.height * 0.15, Screen.width * 0.2, Screen.height * 0.2),"loading.",customGuiStyle);
			//print(aux);
			Loading();
		}else if(aux == 4){
			GUI.Label(Rect(Screen.width * 0.03,Screen.height * 0.15, Screen.width * 0.2, Screen.height * 0.2),"loading..",customGuiStyle);
			//print(aux);
			Loading();
		}else  if(aux == 6){
			GUI.Label(Rect(Screen.width * 0.03,Screen.height * 0.15, Screen.width * 0.2, Screen.height * 0.2),"loading...",customGuiStyle);
			//print(aux);
			Loading();
		}else{	
			
			GUI.Label(Rect(Screen.width * 0.02,Screen.height * 0.08, Screen.width * 0.2, Screen.height * 0.2),"press to start",customGuiStyle2);
			//print(aux);
		
			if(Input.anyKeyDown)
			{			
				Application.LoadLevel(1);
			}	
		}
		*/	
}

function Loading(){

	//yield WaitForSeconds(3);
	//aux++;
}