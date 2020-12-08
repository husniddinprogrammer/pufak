let x=document.getElementById('div1');
let p1=1; 
let p2=1;
let t1=Math.random()*500;
let t2=Math.random()*1200;

let x2=document.getElementById('div12');
let p12=1; 
let p22=1;
let t12=Math.random()*500;
let t22=Math.random()*1200;

let x3=document.getElementById('div13');
let p13=1; 
let p23=1;
let t13=Math.random()*500;
let t23=Math.random()*1200;

let x4=document.getElementById('div14');
let p14=1; 
let p24=1;
let t14=Math.random()*500;
let t24=Math.random()*1200;

let x5=document.getElementById('div15');
let p15=1; 
let p25=1;
let t15=Math.random()*500;
let t25=Math.random()*1200;

let x6=document.getElementById('div16');
let p16=1; 
let p26=1;
let t16=Math.random()*500;
let t26=Math.random()*1200;

let x7=document.getElementById('div17');
let p17=1; 
let p27=1;
let t17=Math.random()*500;
let t27=Math.random()*1200;

let x8=document.getElementById('div18');
let p18=1; 
let p28=1;
let t18=Math.random()*500;
let t28=Math.random()*1200;

let x9=document.getElementById('div19');
let p19=1; 
let p29=1;
let t19=Math.random()*500;
let t29=Math.random()*1200;

setInterval(() => {
    
    if (p1<100) {
        x.style.backgroundColor='red';
    x.style.marginTop=t1+'px';
    x.style.marginLeft=t2+'px';
    x.style.display='inline-block';
    x.style.height=p1 +'px';
    x.style.width=p1+'px'; 
    x.style.opacity=p2;
    p1=p1+1;
    p2=p2-0.01;
    }

  if (p1==100) {
      x.style.opacity=0;
      x.style.display='none';
      t1=Math.random()*500;
        t2=Math.random()*900;
       p1=1;
       p2=1;
  }
   
     

}, 20);
 setInterval(() => {
    
        if (p12<100) {
            x2.style.backgroundColor='blue';
        x2.style.marginTop=t12+'px';
        x2.style.marginLeft=t22+'px';
        x2.style.display='inline-block';
        x2.style.height=p12 +'px';
        x2.style.width=p12+'px'; 
        x2.style.opacity=p22;
        p12=p12+1;
        p22=p22-0.01;
        }
    
      if (p12==100) {
          x2.style.opacity=0;
          x2.style.display='none';
          t12=Math.random()*500;
            t22=Math.random()*900;
           p12=1;
           p22=1;
      }
    
    }, 30);
    setInterval(() => {
    
        if (p13<100) {
            x3.style.backgroundColor='black';
        x3.style.marginTop=t13+'px';
        x3.style.marginLeft=t23+'px';
        x3.style.display='inline-block';
        x3.style.height=p13 +'px';
        x3.style.width=p13+'px'; 
        x3.style.opacity=p23;
        p13=p13+1;
        p23=p23-0.01;
        }
    
      if (p13==100) {
          x3.style.opacity=0;
          x3.style.display='none';
          t13=Math.random()*500;
            t23=Math.random()*900;
           p13=1;
           p23=1;
      }
       
         
    
    }, 10);

    setInterval(() => {
    
        if (p14<100) {
            x4.style.backgroundColor='darkviolet';
        x4.style.marginTop=t14+'px';
        x4.style.marginLeft=t24+'px';
        x4.style.display='inline-block';
        x4.style.height=p14 +'px';
        x4.style.width=p14+'px'; 
        x4.style.opacity=p24;
        p14=p14+1;
        p24=p24-0.01;
        }
    
      if (p14==100) {
          x4.style.opacity=0;
          x4.style.display='none';
          t14=Math.random()*500;
            t24=Math.random()*900;
           p14=1;
           p244=1;
      }
       
         
    
    }, 25);

    setInterval(() => {
    
        if (p15<100) {
            x5.style.backgroundColor='indigo';
        x5.style.marginTop=t15+'px';
        x5.style.marginLeft=t25+'px';
        x5.style.display='inline-block';
        x5.style.height=p15 +'px';
        x5.style.width=p15+'px'; 
        x5.style.opacity=p25;
        p15=p15+1;
        p25=p25-0.01;
        }
    
      if (p15==100) {
          x5.style.opacity=0;
          x5.style.display='none';
          t15=Math.random()*500;
            t25=Math.random()*900;
           p15=1;
           p25=1;
      }
       
         
    
    }, 18);

    setInterval(() => {
    
        if (p16<100) {
            x6.style.backgroundColor='darkgreen';
        x6.style.marginTop=t16+'px';
        x6.style.marginLeft=t26+'px';
        x6.style.display='inline-block';
        x6.style.height=p16 +'px';
        x6.style.width=p16+'px'; 
        x6.style.opacity=p26;
        p16=p16+1;
        p26=p26-0.01;
        }
    
      if (p16==100) {
          x6.style.opacity=0;
          x6.style.display='none';
          t16=Math.random()*500;
            t26=Math.random()*900;
           p16=1;
           p26=1;
      }
       
         
    
    }, 20);

    setInterval(() => {
    
        if (p17<100) {
            x7.style.backgroundColor='white';
        x7.style.marginTop=t17+'px';
        x7.style.marginLeft=t27+'px';
        x7.style.display='inline-block';
        x7.style.height=p17 +'px';
        x7.style.width=p17+'px'; 
        x7.style.opacity=p27;
        p17=p17+1;
        p27=p27-0.01;
        }
    
      if (p17==100) {
          x7.style.opacity=0;
          x7.style.display='none';
          t17=Math.random()*500;
            t27=Math.random()*900;
           p17=1;
           p27=1;
      }
       
         
    
    }, 23);

    setInterval(() => {
    
        if (p18<100) {
            x8.style.backgroundColor='maroon';
        x8.style.marginTop=t18+'px';
        x8.style.marginLeft=t28+'px';
        x8.style.display='inline-block';
        x8.style.height=p18 +'px';
        x8.style.width=p18+'px'; 
        x8.style.opacity=p28;
        p18=p18+1;
        p28=p28-0.01;
        }
    
      if (p18==100) {
          x8.style.opacity=0;
          x8.style.display='none';
          t18=Math.random()*500;
            t28=Math.random()*900;
           p18=1;
           p28=1;
      }
       
         
    
    }, 14);
    setInterval(() => {
    
        if (p19<100) {
            x9.style.backgroundColor='green';
        x9.style.marginTop=t19+'px';
        x9.style.marginLeft=t29+'px';
        x9.style.display='inline-block';
        x9.style.height=p19 +'px';
        x9.style.width=p19+'px'; 
        x9.style.opacity=p29;
        p19=p19+1;
        p29=p29-0.01;
        }
    
      if (p19==100) {
          x9.style.opacity=0;
          x9.style.display='none';
          t19=Math.random()*500;
            t29=Math.random()*900;
           p19=1;
           p29=1;
      }
       
         
    
    }, 26);
    setInterval(() => {
    
    if (p1<100) {
        x.style.backgroundColor='red';
    x.style.marginTop=t1+'px';
    x.style.marginLeft=t2+'px';
    x.style.display='inline-block';
    x.style.height=p1 +'px';
    x.style.width=p1+'px'; 
    x.style.opacity=p2;
    p1=p1+1;
    p2=p2-0.01;
    }

  if (p1==100) {
      x.style.opacity=0;
      x.style.display='none';
      t1=Math.random()*500;
        t2=Math.random()*900;
       p1=1;
       p2=1;
  }

}, 20);