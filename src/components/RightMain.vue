<template>
    <div class="right">
       <img src="../images/profile.png" alt=""> 
       <div class="btn-register">
        <button><img src="../images/fingerprint.png" alt=""> Ro'yhatdan o'tish</button>
         <img class="pen" src="../images/pen.png" alt="">
    </div>
    </div>
</template>

<style scoped>
 img{
    width: 500px;
 }

 @media only screen and (max-width: 600px) {
  .right{
    margin-top: -50px;
  }
    img{
        width: 300px;
    }
    .btn-register{
        position: relative;
        display: block!important;
    }
 }

 button{
    margin-top: -10px;
    margin-left: 0px;
    padding: 10px;
    width: 300px;
    gap: 20px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    font-size: 18px;
    background-color: rgb(241, 212, 139);
    border: none;
    box-shadow: 1px 3px 1px rgb(151, 117, 33);
    cursor: pointer;
    transition: .3s;
  
    
}
button:hover{
    background-color:  rgb(243, 223, 172);
}
button:active{
    box-shadow: 0px 0px ;
}
button img{
    width: 40px;
}
.btn-register{
    position: relative;
    display: none;
   
}
.pen{
    position: absolute;
    top: -10px;
    left: 230px;
    width: 100px;
}
</style>