<script setup>
import Swal from 'sweetalert2'
import { ref } from "vue";
const form = ref(null);
 function sendMessage(){
    const isim = document.getElementById('recipient-name').value
    const familya = document.getElementById('recipient-last').value
    const nomer = document.getElementById('recipient-phone').value
    const yosh = document.getElementById('recipient-age').value
    const xabar = `
        %0AFoydalanuvchi ismi: ${isim}
        %0AFoydalanuvchi familya: ${familya}
        %0AFoydalanuvchi nomeri: ${nomer}
        %0AFoydalanuvchi yoshi: ${yosh}
    `.trim();
    if(isim && familya && nomer && yosh){
        
    form.value.reset();
        fetch(`https://api.telegram.org/bot6559478190:AAHJqWrZvRtw7-D_j2aJo3V7caSB_X6FkAI/sendMessage?chat_id=-1001811333330&text=${xabar}&parse_mode=html`)
    .then((r) => r.json())
    .then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Jo`natildi',
            text: 'Xabaringiz jo`natildi',

        })
        window.location.href='https://t.me/+yp18rD887gMzY2My'
      
    })
    }

    else{
        Swal.fire({
            icon: 'error',
            title: 'Xato..',
            text: 'Qatorlarni to`liq to`ldiring',

        })
    }
    // %0A -> Beak line
 
}
</script>

<template>
    <div class="right">
       <img src="../images/profile.png" alt=""> 
       <div class="btn-register">
        <button type="button" class="btn btn-primary register" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><img src="../images/fingerprint.png" alt=""> Ro'yhatdan o'tish</button>
         <img class="pen" src="../images/pen.png" alt="">
    </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title fs-5" id="exampleModalLabel">Ro'yhatdan o'tish</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="form" ref="form">
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Ism:</label>
                  <input type="text" class="form-control" id="recipient-name" required>
                </div>
                <div class="mb-3">
                  <label for="recipient-last" class="col-form-label">Familya:</label>
                  <input type="text" class="form-control" id="recipient-last" required>
                </div>
                <div class="mb-3">
                    <label for="recipient-phone" class="col-form-label">Nomer:</label>
                    <input placeholder="+998" type="number" class="form-control" id="recipient-phone" required>
                  </div>
                  
                  <div class="mb-3">
                    <label for="recipient-age" class="col-form-label">Yoshiz:</label>
                    <input type="number" class="form-control" id="recipient-age" required>
                  </div>
              </form>
            </div>
            <div class="modal-footer">
              <button id="close-modal-button" type="button" class="btn btn-danger" data-bs-dismiss="modal">Yopish</button>
              <button @click="sendMessage()" type="button" class="btn btn-primary">Ro'yxatdan o'tish</button>
            </div>
          </div>
        </div>
      </div>
</template>

<style scoped>
 img{
    width: 35%;
    position: fixed;
    right: 0;
    bottom: 0;
 }

 @media only screen and (max-width: 600px) {
  
  .right{
    margin-top: -50px;
  }
    img{
        width: 300px;
        position: relative;
    }
    .btn-register{
        position: relative;
        display: block!important;
        color: black;
    }
    .register{
        color: black;
    }
 }

 .register{
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
.register:hover{
    background-color:  rgb(243, 223, 172);
}
.register:active{
    box-shadow: 0px 0px ;
}
.register img{
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