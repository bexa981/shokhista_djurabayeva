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
    <div class="main-left">
        <div class="card-info">
            <div>
                <p class="top-card">Boshlanishi</p>
                <p class="sana">3-4 Mart 2024</p>

            </div>
            <div>
                <img src="../images/clock.png" alt="">
            </div>

            <div>
                
            </div>
        </div>
        <h1>Baxt formulasi vebinarida <br> qatnashish uchun ro'yhatdan o'ting!</h1>
        <p class="info">Qalbni davolamay turib badanni davolab bo'lmaydi. Ota-onangizni o'z o'rniga qo'ymaguningizcha hayotda o'zligingizni topa olmaysiz</p>
    
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
                    <input placeholder="+998901234567 misol" type="number" class="form-control" id="recipient-phone" required>
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
.card-info{
    display: flex;
    margin-top: 70px;
    justify-content: space-around;
    background-color: rgb(132, 2, 2);
    align-items: center;
    border-left: 4px solid goldenrod;
    box-shadow: 0px 0px 5px goldenrod;
    padding: 5px;
    width: 40%;
    height: auto;
    border-radius: 10px;
    margin-left: 30px;
    line-height: 1;
 
    color: white;
}
.card-info p{
    margin: 0;
}
img{
    width: 80px;
    
}
.sana{
    font-size: 22px;
    color: rgb(239, 199, 98);
}
h1{
    margin-left: 30px;
    width: 50%;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 4em;
    color: white;
    line-height: 1.3;
}
.info{
    margin-left: 30px;
    width: 450px;
    color: white;
}
.register{
    margin-top: 30px;
    margin-left: 30px;
    padding: 10px;
    width: 300px;
    gap: 20px;
    color: black;
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
}
.pen{
    position: absolute;
    top: -10px;
    left: 270px;
    width: 100px;
}
@media only screen and (max-width: 600px) {
    .card-info{
        margin-top: 10px;
        width: 90%;
    }
    .btn-register{
        display: none;
        color: black;
    }
    h1{
        margin-left: 0;
        font-size: 26px;
        padding: 5px;
        width: 90%;
        text-align: center;
    }
    .info{
        width: 90%!important;
        color: rgb(218, 176, 69);
    }
    
}
@media only screen and (max-width: 480px) {
    .info{
        width: 400px;
        margin-left: 10px;
       
    }
    h1{
        margin-left: 0;
        font-size: 26px;
    }
    .card-info{
        margin-left: 0;
        width: 350px;
       
    }
    .main-left{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>