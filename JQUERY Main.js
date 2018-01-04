$(document).ready(function(){
    $counter=1;
    $no=1;
    
    setTimeout(show1,3000);
    function show1(){
        $(".line"+$no).css("visibility","visible");
        if($counter==3)
        {
            $(this).stop();
            if($no==2 && $counter==3)
            {
                $counter=0;
                setTimeout(show2,100);
            }
            else{
                setTimeout(hide1,100);
            }
            $no++;
            $counter=0;
        }
        else
        {
            setTimeout(hide1,100);
        }
    }
    
    function hide1(){
        $(".line"+$no).css("visibility","hidden");
        setTimeout(show1,100);
        $counter++;
    }
    
    function show2(){
        $("#info_circle").css("visibility","visible");
        
        if($counter==3){
            $counter=0;
            $(this).stop();
            setTimeout(show3,100);
        }
        else{
            setTimeout(hide2,100);
        }
    }
    
    function hide2(){
        $("#info_circle").css("visibility","hidden");
        setTimeout(show2,100);
        $counter++;
    }
    
    function show3(){
        $("#info").css("visibility","visible");
        
        if($counter==3){
            $counter=0;
            $(this).stop();
        }
        else{
            setTimeout(hide3,100);
        }
    }
    
    function hide3(){
        $("#info").css("visibility","hidden");
        setTimeout(show3,100);
        $counter++;
    }
});


you can make it more easy..:)





