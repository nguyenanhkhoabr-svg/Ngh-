/* =====================================
   NỀN KÝ TỰ
===================================== */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

let width;
let height;

function resizeCanvas() {

    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


/* =====================================
   CHỮ RƠI - I LOVE YOU MINH THY
===================================== */

const chars = "I LOVE YOU MINH THY ♥ ";

const fontSize = 19;

let columns;
let drops = [];


function createColumns() {

    columns = Math.floor(width / fontSize);

    drops = [];

    for (let i = 0; i < columns; i++) {

        drops[i] =
            Math.random() * (height / fontSize);

    }

}

createColumns();

window.addEventListener("resize", createColumns);


/* =====================================
   VẼ CHỮ RƠI
===================================== */

function drawMatrix() {

    ctx.fillStyle =
        "rgba(0, 0, 0, 0.10)";

    ctx.fillRect(
        0,
        0,
        width,
        height
    );


    ctx.font =
        "bold " + fontSize + "px monospace";


    for (let i = 0; i < columns; i++) {

        const word =
            "I LOVE YOU MINH THY ♥";


        const char =
            word[
                Math.floor(drops[i]) %
                word.length
            ];


        const random =
            Math.random();


        if (random > 0.88) {

            ctx.fillStyle =
                "#ff6fa3";

        } else if (random > 0.55) {

            ctx.fillStyle =
                "#ffffff";

        } else {

            ctx.fillStyle =
                "#777777";

        }


        ctx.fillText(

            char,

            i * fontSize,

            drops[i] * fontSize

        );


        if (
            drops[i] * fontSize >
            height
        ) {

            drops[i] =
                Math.random() * -20;

        }


        /*
           Tốc độ chữ rơi
        */

        drops[i] += 0.30;

    }

}


setInterval(
    drawMatrix,
    40
);


/* =====================================
   CÁC ĐỐI TƯỢNG
===================================== */

const text =
    document.getElementById("text");


const heartCanvas =
    document.getElementById("heartCanvas");


const start =
    document.getElementById("start");


const music =
    document.getElementById("music");


const giftBtn =
    document.getElementById("giftBtn");


const heartCtx =
    heartCanvas.getContext("2d");


/* =====================================
   NỘI DUNG
===================================== */

const messages = [

    "Khoa muốn nói với nghé một điều...",

    "Tui đã suy nghĩ rất lâu về chuyện này.",

    "Tui không biết phải nói thế nào...",

    "Nhưng tui thật sự rất thương bạn.",

    "Tui muốn được ở bên bạn nhiều hơn.",

    "Tui biết bạn luôn sợ và lo lắng cho tui.",

    "Nhưng bạn yên tâm, tui vẫn sẽ luôn ở đây.",

    "Dù ngoài kia có làm cho tui mang tâm trạng thế nào đi chăng nữa tui cũng tự nhủ lòng phải luôn dịu dàng với người mình thương và sẽ không để bạn thất vọng hay phải chịu thiệt thòi.",

    "Dù trời có sập xuống đi chăng nữa tui cũng chẳng sợ, chỉ sợ 1 ngày bạn không còn cần tui nữa.",

    "Có thể tui không phải là người hoàn hảo, cũng chẳng phải người giỏi nói những lời ngọt ngào. Nhưng có một điều tui chắc chắn, đó là tình cảm tui dành cho bạn là thật.",

    "Cảm ơn Nghé yêu vì đã xuất hiện trong cuộc đời tui. Cảm ơn những lúc bạn ở bên, những nụ cười của bạn, và cả những điều nhỏ bé mà có thể Nghé chẳng bao giờ để ý.",

    "Tui không biết tương lai sẽ như thế nào, nhưng ở hiện tại, tui chỉ muốn được cùng bạn đi thêm thật nhiều ngày nữa. Cùng nhau vui, cùng nhau buồn, cùng nhau vượt qua những lúc khó khăn.",

    "Nếu có thể chọn lại một lần nữa giữa rất nhiều người trên thế giới này, có lẽ tui vẫn muốn gặp Thy, vẫn muốn thương bạn, và vẫn muốn câu chuyện của chúng ta được bắt đầu. ❤️"

];


/* =====================================
   HIỆN CHỮ
===================================== */

function showMessage(message) {

    text.classList.remove("show");


    setTimeout(() => {

        text.textContent =
            message;

        text.classList.add("show");

    }, 500);

}


/* =====================================
   ẨN CHỮ
===================================== */

function hideMessage() {

    text.classList.remove("show");

}


/* =====================================
   THỜI GIAN ĐỌC
===================================== */

function getReadingTime(message) {

    return Math.min(

        12000,

        Math.max(

            3500,

            message.length * 75

        )

    );

}


/* =====================================
   TRÁI TIM BẰNG CHỮ
===================================== */

function resizeHeartCanvas() {

    heartCanvas.width =
        window.innerWidth;

    heartCanvas.height =
        window.innerHeight;

}


resizeHeartCanvas();


window.addEventListener(
    "resize",
    resizeHeartCanvas
);


/* =====================================
   TẠO TRÁI TIM
===================================== */

function createTextHeart() {

    const w =
        heartCanvas.width;

    const h =
        heartCanvas.height;


    heartCanvas.classList.add("show");


    heartCtx.clearRect(
        0,
        0,
        w,
        h
    );


    /*
       Kích thước trái tim
    */

    const size =
        Math.min(w, h) * 0.34;


    const centerX =
        w / 2;


    const centerY =
        h / 2;


    const words =
        "I LOVE YOU MINH THY ";


    const heartFontSize =
        Math.max(
            14,
            size * 0.050
        );


    heartCtx.font =
        `bold ${heartFontSize}px Arial`;


    heartCtx.textAlign =
        "center";


    heartCtx.textBaseline =
        "middle";


    let charIndex = 0;


    const points = 100;


    /*
       Vẽ chữ theo đường viền trái tim
    */

    for (
        let i = 0;
        i < points;
        i++
    ) {

        const t =
            (Math.PI * 2 * i) /
            points;


        const x =
            16 *
            Math.pow(
                Math.sin(t),
                3
            );


        const y =
            13 * Math.cos(t)
            - 5 * Math.cos(2 * t)
            - 2 * Math.cos(3 * t)
            - Math.cos(4 * t);


        const px =
            centerX +
            x * size / 32;


        const py =
            centerY -
            y * size / 32;


        /*
           Màu trắng + hồng
        */

        if (i % 6 === 0) {

            heartCtx.fillStyle =
                "#ffffff";

            heartCtx.shadowColor =
                "#ffffff";

        } else {

            heartCtx.fillStyle =
                "#ff6fa3";

            heartCtx.shadowColor =
                "#ff6fa3";

        }


        heartCtx.shadowBlur =
            12;


        const char =
            words[
                charIndex %
                words.length
            ];


        heartCtx.fillText(

            char,

            px,

            py

        );


        charIndex++;

    }


    heartCtx.shadowBlur = 0;

}


/* =====================================
   CHẠY TOÀN BỘ CÂU CHUYỆN
===================================== */

function playStory() {

    let time = 1200;


    messages.forEach(
        (message) => {

            const readingTime =
                getReadingTime(message);


            /*
               Hiện câu
            */

            setTimeout(
                () => {

                    showMessage(message);

                },
                time
            );


            /*
               Thời gian đọc
            */

            time += readingTime;


            /*
               Làm mờ câu
            */

            setTimeout(
                () => {

                    hideMessage();

                },
                time - 700
            );


            /*
               Khoảng nghỉ
            */

            time += 800;

        }
    );


    /*
       =================================
       SAU KHI ĐỌC HẾT TẤT CẢ
       =================================
    */

    setTimeout(
        () => {

            createTextHeart();


            /*
               Chờ trái tim hiện rõ
               rồi mới hiện nút nhận quà
            */

            setTimeout(
                () => {

                    giftBtn.classList.add("show");

                },
                2500
            );

        },
        time + 1000
    );

}


/* =====================================
   NÚT BẮT ĐẦU
===================================== */

start.addEventListener(
    "click",
    () => {


        /*
           Phát nhạc
        */

        music.play().catch(
            () => {}
        );


        /*
           Ẩn nút bắt đầu
        */

        start.style.opacity =
            "0";


        setTimeout(
            () => {

                start.style.display =
                    "none";

            },
            500
        );


        /*
           Bắt đầu câu chuyện
        */

        playStory();

    }
);


/* =====================================
   NÚT NHẬN QUÀ
===================================== */

giftBtn.addEventListener(
    "click",
    () => {

        window.location.href =
            "gift.html";

    }
);