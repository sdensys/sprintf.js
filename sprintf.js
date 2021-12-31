/* sprintf.js (C) 2021-present Denys Savchenko -- https://github.com/sdensys */

var sprintf=function(fmt,arg){
	var f=String(fmt),i,j=0,n=f.length,s="",t;
	for (i=0; i<n; i++){
		if (f.charAt(i)!="%") {s+=f.charAt(i); continue;}
		if (i+1>=n) break; if (f.charAt(++i)=="%") {s+="%"; continue;}
		var a,e=false,p=" ",r=false,w=0,z=false;
		if (f.charAt(i)=="+") {z=true; if (++i>=n) break;}
		if (f.charAt(i)==" " || f.charAt(i)=="0"){
			p=f.charAt(i); if (++i>=n) break;
		}
		else if (f.charAt(i)=="'"){
			if ((i+=2)>=n) break; p=f.charAt(i-1);
		}
		if (f.charAt(i)=="-") {r=true; if (++i>=n) break;}
		while (f.charAt(i)>="0" && f.charAt(i)<="9"){
			w=w*10+Number(f.charAt(i)); if (++i>=n) break;
		}
		if (i>=n) break;
		if (f.charAt(i)=="."){
			e=0; if (++i>=n) break;
			while (f.charAt(i)>="0" && f.charAt(i)<="9"){
				e=e*10+Number(f.charAt(i)); if (++i>=n) break;
			}
			if (i>=n) break;
		}
		a=arg[j++]; if (a==undefined) continue; t="";
		switch (f.charAt(i)){
		case "u": t+=Math.abs(parseInt(a)); break;
		case "d": a=parseInt(a); t+=((z & a>0)?"+":"")+a; break;
		case "s": t+=String(a); if (e!==false && t.length>e) t=t.slice(0,e); break;
		case "x": t+=Math.abs(parseInt(a)).toString(16); break;
		case "X": t+=Math.abs(parseInt(a)).toString(16).toUpperCase(); break;
		case "f": a=parseFloat(a); if (e!==false) a=a.toFixed(e);
			t+=((z & a>0)?"+":"")+a; break;
		case "e": a=parseFloat(a);
			a=(e===false)?a.toExponential():a.toExponential(e);
			t+=((z & a>0)?"+":"")+a; break;
		case "E": a=parseFloat(a);
			a=(e===false)?a.toExponential():a.toExponential(e);
			t+=((z & a>0)?"+":"")+String(a).toUpperCase(); break;
		case "b": t+=Math.abs(parseInt(a)).toString(2); break;
		case "o": t+=Math.abs(parseInt(a)).toString(8); break;
		case "c": t=String.fromCharCode(Number(a));
			if (e!==false && t.length>e) t=t.slice(0,e); break;
		case "g":
			var a2=parseFloat(a); a=a2; if (e!==false) a=a.toFixed(e); a=String(a);
			a2=(e===false)?a2.toExponential():a2.toExponential(e); a2=String(a2);
			t+=((z & a>0)?"+":"")+((a.length<=a2.length)?a:a2); break;
		case "G":
			var a2=parseFloat(a); a=a2; if (e!==false) a=a.toFixed(e); a=String(a);
			a2=(e===false)?a2.toExponential():a2.toExponential(e); a2=String(a2);
			if (a.length>a2.length) a=a2; a=a.toUpperCase();
			t+=((z & a>0)?"+":"")+a; break;
		default: continue;
		}
		if (w!=0 && t.length<w){
			a=p.repeat(w-t.length);
			if (r) t+=a;
			else if (t.length && p=="0" && (t.charAt(0)=="+" || t.charAt(0)=="-"))
				t=t.charAt(0)+a+t.slice(1);
			else t=""+a+t;
		}
		s+=t;
	}
	return s;
};
