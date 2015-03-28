#pragma strict

var texturaFundo:Texture;
var customGuiStyle : GUIStyle;
var customGuiStyle2 : GUIStyle;
var customGuiStyle3 : GUIStyle;
var customGuiStyle4 : GUIStyle;



//var windowRect : Rect = Rect (20, 20, 120, 50);

function Start(){
	
	
	//PlayerScript.maxScore += PlayerScript.score;

}

function Update () {

	//PlayerScript.tempLife = PlayerScript.jogadorVida;

}

function OnGUI () {

	GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height),texturaFundo);
        
    GUI.Label(Rect(10,10,200,50),"upgrades",customGuiStyle);    
    
    GUI.Label(Rect(10,00,200,50),"score:"+PlayerScript.score,customGuiStyle2);
   
   	//upgrades
     GUI.Label(Rect(100,100,200,50),"life:  "+PlayerScript.jogadorVida,customGuiStyle3);
    
    GUI.Label(Rect(100,160,200,50),"speed:  "+PlayerScript.jogadorVel,customGuiStyle3);
     
    GUI.Label(Rect(100,210,200,50),"shot:  "+ActionsScript.shotLevel,customGuiStyle3);
    
    GUI.Label(Rect(100,270,200,50),"barrier:  "+ActionsScript.barrierOn,customGuiStyle3);
    
    GUI.Label(Rect(100,330,200,50),"ShadowGear:  "+ActionsScript.specialAbility,customGuiStyle3);
       
    // add life
    if (GUI.Button(Rect(220,190,30,30),"+") && PlayerScript.score >= 2000)
    {
    	PlayerScript.jogadorVida +=1;
    	PlayerScript.score -=2000;
    	
    }else{
    	//print("Not enough points");
    } 
    
    //add speed
    if (GUI.Button(Rect(220,240,30,30),"+") && PlayerScript.score >= 2000)
    {
    	PlayerScript.jogadorVel +=10;
    	PlayerScript.score -=2000;
    	
    }else{
    	//print("Not enough points");
    } 
    
    //add tiro
    if (GUI.Button(Rect(220,290,30,30),"+") && PlayerScript.score >= 5000)
    {
    	ActionsScript.shotLevel = 1;
    	PlayerScript.score -=5000;
    	
    }else{
    	//print("Not enough points");
    } 
   	//add barrier 
    if (GUI.Button(Rect(220,350,30,30),"+") && PlayerScript.score >= 5000)
    {
    	ActionsScript.barrierOn = 1;
    	PlayerScript.score -=5000;
    	
    }else{
    	//print("Not enough points");
    } 
    
    
    //add Special Ability
    if (GUI.Button(Rect(270,410,30,30),"+") && PlayerScript.score >= 5000)
    {
    	ActionsScript.specialAbility = 1;
    	PlayerScript.score -=5000;
    	
    }
    
    
     if (GUI.Button(Rect(900,550,80,30),"continue"))
    {
    	if(PlayerScript.fase == 1)
    	{
    		Application.LoadLevel(5);    	
    	}   	
    	
    	if(PlayerScript.fase == 2)
    	{
    		Application.LoadLevel(2);    	
    	}  	   	
     }    
}

