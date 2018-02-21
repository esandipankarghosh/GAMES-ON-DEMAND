function crig(value){
	var element,op,t;
	var imodel=["Select a model","Atom","Celeron","Celeron D","Celeron Dual Core","Celeron G","Celeron J","Core 2 Duo","Core 2 Extreme","Core 2 Quad","Core i3 1st Gen","Core i3 2nd Gen","Core i3 3rd Gen","Core i3 4th Gen","Core i3 6th Gen","Core i5 1st Gen","Core i5 2nd Gen","Core i5 3rd Gen","Core i5 4th Gen","Core i5 5th Gen","Core i5 6th Gen","Core i7 1st Gen","Core i7 2nd Gen","Core i7 3rd Gen","Core i7 4th Gen","Core i7 5th Gen","Core i7 6th Gen","Pentium","Pentium 2","Pentium 3","Pentium 4","Pentium D","Pentium Dual Core","Pentium Extreme Series","Pentium G","Pentium J","Xeon","Xeon E3 series","Xeon E5 series","Xeon E5 v2 series","Xeon E5 v3 series","Xeon E7 series"];
	var iv=[];
	for(i=0;i<imodel.length;i++)
	{
		iv[i]=i;
	}
	var amodel=["Select a model","APU A4 series","APU A6 series","APU A8 series","APU A10 series","APU E series","Athlon","Athlon 2","Athlon 64","Athlon 64 X2","Athlon Dual Core","Athlon X2","Athlon X4","Athlon Xp","Duron","FX","K6","Opteron 100","Opteron 200","Opteron 1000","Opteron 2000","Opteron 3000","Opteron 4000","Opteron 6000","Opteron 8000","Opteron Multi CPU","Phenom","Phenom 2","Sempron"];
	var av=[];
	for(i=0;i<amodel.length;i++)
	{
		av[i]=i;
	}
	if(value!="select")
	{
		element=document.createElement("SELECT");
		element.setAttribute("id","series");
		document.getElementById("cpu").appendChild(element);
		if(value=="intel")
		{
			for(i=0;i<imodel.length;i++)
			{			
				op=document.createElement("option");
				op.setAttribute("id","im");
				t=document.createTextNode(imodel[i]);
				op.appendChild(t);
				document.getElementById("series").appendChild(op);
			}
			for(i=0;i<imodel.length;i++)
			{
				document.getElementById("series").replaceChild(document.getElementById("im"),document.getElementById("am"));
			}
		}
		else if(value=="amd")
		{
			for(i=0;i<amodel.length;i++)
			{
				op=document.createElement("option");
				op.setAttribute("id","am");
				t=document.createTextNode(amodel[i]);
				op.appendChild(t);
				document.getElementById("series").appendChild(op);
			}
			for(i=0;i<amodel.length;i++)
			{
				document.getElementById("series").replaceChild(document.getElementById("am"),document.getElementById("im"));
			}
		}
	}
	else if(value=="select")
	{
		document.getElementById("cpu").removeChild(document.getElementById("series"));
	}
}
