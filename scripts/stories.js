const chat_panel = document.querySelector(".lateral_panel-container")
const storie1 = document.querySelector(".storie1")
const storie2 = document.querySelector(".storie2")
const storie3 = document.querySelector(".storie3")
const storie4 = document.querySelector(".storie4")
const storie5 = document.querySelector(".storie5")
const logo_container = document.querySelector(".logo_container")
const storie_close = document.querySelector(".storie_close")
const lateral_panel = document.querySelector(".lateral_panel")
const stories_wrapper = document.querySelector(".stories_wrapper")
const stories_background = document.querySelector(".stories_background")

// ACTIVATING STORIES

storie1.addEventListener("click", open_storie1)
storie2.addEventListener("click", open_storie2)
storie3.addEventListener("click", open_storie3)
storie4.addEventListener("click", open_storie4)
storie5.addEventListener("click", open_storie5)

function aparece() {
    chat_panel.classList.add("hidden")
    logo_container.classList.add("separating")
    storie_close.classList.remove("storie_close_disappear")
    lateral_panel.classList.add("stories_container")
    lateral_panel.classList.add("leteral_panel-color")
    stories_wrapper.classList.remove("hidden")
    stories_background.classList.remove("hidden")
}

function open_storie1() {
    aparece()
    select_storie(1);
}

function open_storie2() {
    aparece()
    select_storie(2)
}

function open_storie3() {
    aparece()
    select_storie(3)
}

function open_storie4() {
    aparece()
    select_storie(4)
}

function open_storie5() {
    aparece()
    select_storie(5)
}



// DESACTIVATING STORIES

storie_close.addEventListener("click", desaparece)

function desaparece() {
    chat_panel.classList.remove("hidden")
    logo_container.classList.remove("separating")
    storie_close.classList.add("storie_close_disappear")
    lateral_panel.classList.remove("stories_container")
    lateral_panel.classList.remove("leteral_panel-color")
    stories_wrapper.classList.add("hidden")
    stories_background.classList.add("hidden")
}

//aparece()







//  CAMBIANDO ICONOS DE SONIDO, PAUSA Y REPRODUCIR

const st_play_button = document.getElementById("play_button")
let state = "playing";
st_play_button.addEventListener("click", reproducir_pausar)

function reproducir_pausar() {
    if (state == "playing") {

        st_play_button.src = "./resources/play_icon"
        state = "paused";
        pausar_reproducir_historias(state)

    } else if (state == "paused") {
        state = "playing"
        st_play_button.src = "./resources/pause_icon"
        pausar_reproducir_historias(state)
    }
}

//  ACTIVANDO SONIDO Y SILENCIANDO

const st_sound_button = document.getElementById("sound_button")
storie_sound_state = "sonando";

st_sound_button.addEventListener("click", silenciar_sonar)

function silenciar_sonar() {
    if (storie_sound_state == "sonando") {
        st_sound_button.src = ("./resources/sound_off_icon")
        storie_sound_state = "silenciado";
    } else if (storie_sound_state == "silenciado") {
        st_sound_button.src = "./resources/sound_icon";
        storie_sound_state = "sonando"
    }
}

/*  **************************  PASANDO LAS HISTORIAS  ****************************  */

//Next and previous Storie:

const next_storie = document.querySelector(".next_storie")
const previous_storie = document.querySelector(".previous_storie")

next_storie.addEventListener("click", next_storie_activate)
previous_storie.addEventListener("click", previous_storie_activate)

var active_storie = 1;

function next_storie_activate() {
    if (active_storie < 6) {
        active_storie += 1;
        select_storie(active_storie)

    }
}

function previous_storie_activate() {
    if (active_storie > 1) {
        active_storie -= 1;
        select_storie(active_storie)
    }
}

function select_storie(active_storie) {
    switch (active_storie) {
        case 1:
            storie_number_one()
            break;

        case 2:
            storie_number_two()
            break;

        case 3:
            storie_number_three()
            break;

        case 4:
            storie_number_four()
            break;

        case 5:
            storie_number_five()
            break;

        case 6:
            storie_number_six()
            break;
        default:
            storie_number_one()
    }
}

const storie_image = document.getElementById("storie_content-image")
const active_storie_img = document.querySelector(".active_storie_img")
const active_storie_username = document.querySelector(".active_storie-username")

function storie_number_one() {
    console.log("Historia 1")
    active_storie = 1;

    storie_image.src = ("https://www.latfusa.com/wp-content/uploads/2022/02/20121119115601Jason_Mraz.jpg")
    active_storie_img.src = ("https://i1.sndcdn.com/artworks-000010190535-p1ondm-t500x500.jpg")
    active_storie_username.textContent = ("Jason Mraz")

    sombrear_background_storie1()
}


function storie_number_two() {
    console.log("Historia 2")
    active_storie = 2;

    storie_image.src = ("https://assets1.cbsnewsstatic.com/hub/i/2016/11/20/8560cfea-7330-496e-9d4d-5a705775a16b/ot-brunomarsfd.jpg")
    active_storie_img.src = ("https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd")
    active_storie_username.textContent = ("Bruno Mars")

    sombrear_background_storie2()
}


function storie_number_three() {
    console.log("Historia 3")
    active_storie = 3;

    storie_image.src = ("https://hips.hearstapps.com/hmg-prod/images/zendaya-performs-with-labrinth-at-the-mojave-tent-during-news-photo-1682257323.jpg?crop=1.00xw:0.668xh;0,0.0513xh&resize=1200:*")
    active_storie_img.src = ("https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg/800px-Zendaya_-_2019_by_Glenn_Francis.jpg")
    active_storie_username.textContent = ("Zendaya")

    sombrear_background_storie3()
}


function storie_number_four() {
    console.log("Historia 4")
    active_storie = 4;

    storie_image.src = ("https://upload.wikimedia.org/wikipedia/commons/8/81/Chris_Martin_2017_in_Hamburg.jpg")
    active_storie_img.src = ("https://i.scdn.co/image/ab6761610000e5eb989ed05e1f0570cc4726c2d3")
    active_storie_username.textContent = ("Coldplay")

    sombrear_background_storie4()
}


function storie_number_five() {
    console.log("Historia 5")
    active_storie = 5;

    storie_image.src = ("https://i1.sndcdn.com/artworks-000455043036-00i29s-t500x500.jpg")
    active_storie_img.src = ("https://m.media-amazon.com/images/M/MV5BNzkxOGE0NzgtYzAwYS00NWE4LTk4Y2EtMWE4YTQ0YjVlMTdiXkEyXkFqcGdeQXVyMTU3ODQxNDYz._V1_.jpg")
    active_storie_username.textContent = ("BTS")

    sombrear_background_storie5()
}


function storie_number_six() {
    console.log("Historia 6")
    active_storie = 6;

    storie_image.src = ("")
    active_storie_img.src = ("")
    active_storie_username.textContent = ("")

    sombrear_background_storie6()
}


// ********************* SOMBREANDO EL BACKGROUND DE CADA USUARIO (PANEL LATERAL IZQUIERDO)
//background_user-selected

const storie_1 = document.getElementById("storie_1")
const storie_2 = document.getElementById("storie_2")
const storie_3 = document.getElementById("storie_3")
const storie_4 = document.getElementById("storie_4")
const storie_5 = document.getElementById("storie_5")
const storie_6 = document.getElementById("storie_6")

storie_1.addEventListener("click", storie_number_one)
storie_2.addEventListener("click", storie_number_two)
storie_3.addEventListener("click", storie_number_three)
storie_4.addEventListener("click", storie_number_four)
storie_5.addEventListener("click", storie_number_five)
storie_6.addEventListener("click", storie_number_six)



function sombrear_background_storie1() {
    storie_1.classList.add("background_user-selected")
    storie_2.classList.remove("background_user-selected")
    storie_3.classList.remove("background_user-selected")
    storie_4.classList.remove("background_user-selected")
    storie_5.classList.remove("background_user-selected")
    storie_6.classList.remove("background_user-selected")
}

function sombrear_background_storie2() {
    storie_1.classList.remove("background_user-selected")
    storie_2.classList.add("background_user-selected")
    storie_3.classList.remove("background_user-selected")
    storie_4.classList.remove("background_user-selected")
    storie_5.classList.remove("background_user-selected")
    storie_6.classList.remove("background_user-selected")
}

function sombrear_background_storie3() {
    storie_1.classList.remove("background_user-selected")
    storie_2.classList.remove("background_user-selected")
    storie_3.classList.add("background_user-selected")
    storie_4.classList.remove("background_user-selected")
    storie_5.classList.remove("background_user-selected")
    storie_6.classList.remove("background_user-selected")
}

function sombrear_background_storie4() {
    storie_1.classList.remove("background_user-selected")
    storie_2.classList.remove("background_user-selected")
    storie_3.classList.remove("background_user-selected")
    storie_4.classList.add("background_user-selected")
    storie_5.classList.remove("background_user-selected")
    storie_6.classList.remove("background_user-selected")
}

function sombrear_background_storie5() {
    storie_1.classList.remove("background_user-selected")
    storie_2.classList.remove("background_user-selected")
    storie_3.classList.remove("background_user-selected")
    storie_4.classList.remove("background_user-selected")
    storie_5.classList.add("background_user-selected")
    storie_6.classList.remove("background_user-selected")
}

function sombrear_background_storie6() {
    storie_1.classList.remove("background_user-selected")
    storie_2.classList.remove("background_user-selected")
    storie_3.classList.remove("background_user-selected")
    storie_4.classList.remove("background_user-selected")
    storie_5.classList.remove("background_user-selected")
    storie_6.classList.add("background_user-selected")
}







/* ******************** PASANDO HISTORIAS AUTOMÁTICAMENTE ********************** */
//open_storie1()


/*
function pausar_reproducir_historias(estado){   // <= Esta función fué llamada en la sección "Cambiando icono Pausado/reproduciendo"
    if (estado == "playing"){ 
        var next_storie_interval = setInterval(siguiente = () =>{            
                console.log("Siguiente historia")  
            }, 1000)        
        }
        else if(estado == "paused")
    } 
    
*/